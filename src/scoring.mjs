/**
 * Motor de pontuacao do comparador de casas de apostas asiaticas.
 *
 * Funcoes puras, sem dependencias, sem I/O. O mesmo modulo roda no Node
 * (scripts/rank.mjs) e no navegador (assets/app.js).
 */

/** Limita um valor ao intervalo [min, max]. */
export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

/**
 * Converte um valor bruto em nota 0-10 com decaimento linear invertido:
 * quanto MENOR o valor bruto, maior a nota.
 *
 * @param {number} value valor bruto (ex.: horas de saque)
 * @param {number} best  valor que vale nota 10
 * @param {number} worst valor que vale nota 0
 */
export function invertedLinearScore(value, best, worst) {
  if (!Number.isFinite(value)) return 0;
  if (worst === best) return value <= best ? 10 : 0;
  const ratio = (worst - value) / (worst - best);
  return clamp(ratio * 10, 0, 10);
}

/** Nota de velocidade de saque: 10 pontos ate 2h, 0 em 96h. */
export function withdrawalSpeedScore(bookmaker) {
  return invertedLinearScore(bookmaker.withdrawal?.avg_hours, 2, 96);
}

/** Nota de valor das odds: 10 pontos com margem 1.5%, 0 com margem 8%. */
export function oddsValueScore(bookmaker) {
  return invertedLinearScore(bookmaker.odds?.margin_top_leagues_pct, 1.5, 8);
}

/**
 * Bonus de pagamentos derivado dos dados objetivos, combinado com a nota
 * editorial. Pix e conta em real pesam muito para quem aposta do Brasil.
 */
export function paymentsBrazilScore(bookmaker) {
  const editorial = bookmaker.editorial_scores?.payments_brazil ?? 0;
  let objective = 0;
  if (bookmaker.payments?.pix) objective += 4;
  if (bookmaker.brl_native) objective += 3;
  if ((bookmaker.payments?.crypto ?? []).length > 0) objective += 1.5;
  if ((bookmaker.payments?.ewallets ?? []).length >= 2) objective += 1;
  if ((bookmaker.withdrawal?.min_brl ?? 999) <= 60) objective += 0.5;
  objective = clamp(objective, 0, 10);
  return (editorial + objective) / 2;
}

/** Devolve as sete notas de pilar de uma casa, todas na escala 0-10. */
export function pillarScores(bookmaker) {
  const ed = bookmaker.editorial_scores ?? {};
  return {
    payout_reliability: clamp(ed.payout_reliability ?? 0, 0, 10),
    withdrawal_speed: withdrawalSpeedScore(bookmaker),
    odds_value: oddsValueScore(bookmaker),
    limits_policy: clamp(ed.limits_policy ?? 0, 0, 10),
    payments_brazil: paymentsBrazilScore(bookmaker),
    support_pt: clamp(ed.support_pt ?? 0, 0, 10),
    product_depth: clamp(ed.product_depth ?? 0, 0, 10),
  };
}

/**
 * Pontuacao final ponderada de uma casa.
 *
 * @param {object} bookmaker registro do dataset
 * @param {object} weights   pesos por pilar (somam 1.0)
 * @returns {{ id: string, name: string, total: number, pillars: object }}
 */
export function scoreBookmaker(bookmaker, weights) {
  const pillars = pillarScores(bookmaker);
  let total = 0;
  let weightSum = 0;
  for (const [key, weight] of Object.entries(weights)) {
    if (!(key in pillars)) continue;
    total += pillars[key] * weight;
    weightSum += weight;
  }
  const normalized = weightSum > 0 ? total / weightSum : 0;
  return {
    id: bookmaker.id,
    name: bookmaker.name,
    total: Math.round(normalized * 100) / 100,
    pillars,
  };
}

/** Ordena todas as casas do dataset da maior para a menor pontuacao. */
export function rank(dataset, options = {}) {
  const weights = options.weights ?? dataset.weights;
  const includeBenchmark = options.includeBenchmark ?? false;

  return dataset.bookmakers
    .filter((b) => includeBenchmark || !b.benchmark)
    .map((b) => ({ ...scoreBookmaker(b, weights), raw: b }))
    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));
}

/**
 * Filtra o dataset por criterios praticos de um apostador brasileiro.
 *
 * @param {Array} rows saida de rank()
 * @param {object} f   { pix, brl, ptBr, sharpOnly, maxWithdrawalHours, minTotal, search }
 */
export function applyFilters(rows, f = {}) {
  return rows.filter(({ raw, total }) => {
    if (f.pix && !raw.payments?.pix) return false;
    if (f.brl && !raw.brl_native) return false;
    if (f.ptBr && !raw.pt_br_interface) return false;
    if (f.sharpOnly && !raw.limits?.sharp_friendly) return false;
    if (f.crypto && (raw.payments?.crypto ?? []).length === 0) return false;
    if (Number.isFinite(f.maxWithdrawalHours) && raw.withdrawal?.avg_hours > f.maxWithdrawalHours) return false;
    if (Number.isFinite(f.minTotal) && total < f.minTotal) return false;
    if (f.search) {
      const needle = f.search.toLowerCase();
      const haystack = [raw.name, ...(raw.aliases ?? []), raw.region].join(" ").toLowerCase();
      if (!haystack.includes(needle)) return false;
    }
    return true;
  });
}

/**
 * Compara duas casas pilar a pilar e devolve o vencedor de cada dimensao.
 * Usado pelo modo "head to head" da interface e do CLI.
 */
export function headToHead(bookmakerA, bookmakerB, weights) {
  const a = scoreBookmaker(bookmakerA, weights);
  const b = scoreBookmaker(bookmakerB, weights);
  const rows = Object.keys(a.pillars).map((key) => {
    const va = a.pillars[key];
    const vb = b.pillars[key];
    let winner = "empate";
    if (Math.abs(va - vb) >= 0.05) winner = va > vb ? a.name : b.name;
    return { pillar: key, a: Math.round(va * 100) / 100, b: Math.round(vb * 100) / 100, winner };
  });
  return {
    a,
    b,
    rows,
    overall: a.total === b.total ? "empate" : a.total > b.total ? a.name : b.name,
  };
}

/** Rotulos legiveis dos pilares, em portugues. */
export const PILLAR_LABELS = {
  payout_reliability: "Confiabilidade de pagamento",
  withdrawal_speed: "Velocidade de saque",
  odds_value: "Valor das odds",
  limits_policy: "Politica de limites",
  payments_brazil: "Pagamentos no Brasil",
  support_pt: "Suporte em portugues",
  product_depth: "Profundidade do produto",
};
