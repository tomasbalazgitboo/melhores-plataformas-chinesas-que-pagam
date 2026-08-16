#!/usr/bin/env node
/**
 * CLI do comparador de casas de apostas asiaticas.
 *
 * Uso:
 *   node scripts/rank.mjs
 *   node scripts/rank.mjs --pix --pt --max-hours=24
 *   node scripts/rank.mjs --sharp --top=5 --json
 *   node scripts/rank.mjs --compare=sbobet,dafabet
 *   node scripts/rank.mjs --weights=payout_reliability:0.5,withdrawal_speed:0.5
 */

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { rank, applyFilters, headToHead, PILLAR_LABELS } from "../src/scoring.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA_PATH = join(HERE, "..", "data", "bookmakers.json");

const HELP = `
Comparador de casas de apostas asiaticas

  node scripts/rank.mjs [opcoes]

Filtros
  --pix                 apenas casas com Pix
  --brl                 apenas casas com conta nativa em real
  --pt                  apenas casas com interface em portugues
  --sharp               apenas casas que toleram apostadores vencedores
  --crypto              apenas casas que aceitam criptomoedas
  --max-hours=N         saque medio de no maximo N horas
  --min-score=N         pontuacao final minima (0-10)
  --search=texto        busca por nome, apelido ou regiao

Saida
  --top=N               mostra apenas as N primeiras
  --benchmark           inclui a linha de base ocidental (Pinnacle)
  --json                imprime JSON em vez de tabela
  --pillars             mostra a nota de cada pilar
  --compare=a,b         comparacao direta entre duas casas (ids)
  --weights=k:v,k:v     sobrescreve os pesos dos pilares
  --help                esta ajuda

Aviso: os dados sao estimativas editoriais, nao garantias de pagamento.
Aposte apenas o que voce pode perder. Proibido para menores de 18 anos.
`;

function parseArgs(argv) {
  const flags = {};
  for (const arg of argv) {
    if (!arg.startsWith("--")) continue;
    const [key, value] = arg.slice(2).split("=");
    flags[key] = value === undefined ? true : value;
  }
  return flags;
}

function parseWeights(spec, fallback) {
  if (!spec || spec === true) return fallback;
  const weights = {};
  for (const pair of String(spec).split(",")) {
    const [key, value] = pair.split(":");
    const num = Number(value);
    if (key in PILLAR_LABELS && Number.isFinite(num)) weights[key] = num;
  }
  return Object.keys(weights).length > 0 ? weights : fallback;
}

function bar(score) {
  const filled = Math.round(score);
  return "#".repeat(filled).padEnd(10, ".");
}

function pad(text, width) {
  const value = String(text);
  return value.length > width ? value.slice(0, width - 1) + "." : value.padEnd(width);
}

function printTable(rows, showPillars) {
  console.log("");
  console.log(
    pad("#", 3) + pad("Casa", 20) + pad("Nota", 7) + pad("Saque", 8) + pad("Margem", 9) + pad("Pix", 5) + pad("BRL", 5) + "Licencas"
  );
  console.log("-".repeat(96));

  rows.forEach((row, index) => {
    const raw = row.raw;
    console.log(
      pad(index + 1, 3) +
        pad(raw.name + (raw.benchmark ? " *" : ""), 20) +
        pad(row.total.toFixed(2), 7) +
        pad(raw.withdrawal.avg_hours + "h", 8) +
        pad(raw.odds.margin_top_leagues_pct + "%", 9) +
        pad(raw.payments.pix ? "sim" : "nao", 5) +
        pad(raw.brl_native ? "sim" : "nao", 5) +
        raw.licenses.join(", ")
    );

    if (showPillars) {
      for (const [key, label] of Object.entries(PILLAR_LABELS)) {
        const value = row.pillars[key];
        console.log("      " + pad(label, 30) + bar(value) + "  " + value.toFixed(2));
      }
      console.log("");
    }
  });

  console.log("-".repeat(96));
  console.log(rows.length + " casa(s). * = linha de base ocidental, fora do ranking asiatico.");
}

function printHeadToHead(result) {
  console.log("");
  console.log(pad("Pilar", 32) + pad(result.a.name, 12) + pad(result.b.name, 12) + "Vencedor");
  console.log("-".repeat(80));
  for (const row of result.rows) {
    console.log(
      pad(PILLAR_LABELS[row.pillar] ?? row.pillar, 32) + pad(row.a.toFixed(2), 12) + pad(row.b.toFixed(2), 12) + row.winner
    );
  }
  console.log("-".repeat(80));
  console.log(
    pad("TOTAL PONDERADO", 32) + pad(result.a.total.toFixed(2), 12) + pad(result.b.total.toFixed(2), 12) + result.overall
  );
}

async function main() {
  const flags = parseArgs(process.argv.slice(2));

  if (flags.help) {
    console.log(HELP);
    return;
  }

  const dataset = JSON.parse(await readFile(DATA_PATH, "utf8"));
  const weights = parseWeights(flags.weights, dataset.weights);

  if (flags.compare) {
    const [idA, idB] = String(flags.compare).split(",").map((s) => s.trim());
    const a = dataset.bookmakers.find((b) => b.id === idA);
    const b = dataset.bookmakers.find((x) => x.id === idB);
    if (!a || !b) {
      console.error("Ids validos: " + dataset.bookmakers.map((x) => x.id).join(", "));
      process.exitCode = 1;
      return;
    }
    const result = headToHead(a, b, weights);
    if (flags.json) console.log(JSON.stringify(result, null, 2));
    else printHeadToHead(result);
    return;
  }

  let rows = rank(dataset, { weights, includeBenchmark: Boolean(flags.benchmark) });

  rows = applyFilters(rows, {
    pix: Boolean(flags.pix),
    brl: Boolean(flags.brl),
    ptBr: Boolean(flags.pt),
    sharpOnly: Boolean(flags.sharp),
    crypto: Boolean(flags.crypto),
    maxWithdrawalHours: flags["max-hours"] ? Number(flags["max-hours"]) : undefined,
    minTotal: flags["min-score"] ? Number(flags["min-score"]) : undefined,
    search: typeof flags.search === "string" ? flags.search : undefined,
  });

  if (flags.top) rows = rows.slice(0, Number(flags.top));

  if (flags.json) {
    console.log(
      JSON.stringify(
        {
          generated_from: dataset.dataset_name,
          last_reviewed: dataset.last_reviewed,
          disclaimer: dataset.data_disclaimer,
          weights,
          results: rows.map(({ raw, ...rest }) => ({ ...rest, region: raw.region, licenses: raw.licenses })),
        },
        null,
        2
      )
    );
    return;
  }

  printTable(rows, Boolean(flags.pillars));
  console.log("");
  console.log("Aviso: " + dataset.data_disclaimer);
  console.log("Proibido para menores de 18 anos. Apoio: CVV 188.");
}

main().catch((error) => {
  console.error("Falha ao executar o comparador:", error.message);
  process.exitCode = 1;
});
