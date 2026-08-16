#!/usr/bin/env node
/**
 * Validador do dataset. Roda no CI e antes de qualquer pull request que
 * altere data/bookmakers.json.
 *
 *   node scripts/validate.mjs
 */

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { pillarScores, rank } from "../src/scoring.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA_PATH = join(HERE, "..", "data", "bookmakers.json");

const REQUIRED_TOP_LEVEL = ["schema_version", "last_reviewed", "data_disclaimer", "weights", "bookmakers"];
const REQUIRED_FIELDS = ["id", "name", "founded", "region", "licenses", "payments", "withdrawal", "limits", "odds", "product", "support", "editorial_scores"];
const REQUIRED_SCORES = ["payout_reliability", "limits_policy", "payments_brazil", "support_pt", "product_depth"];

const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

const dataset = JSON.parse(await readFile(DATA_PATH, "utf8"));

for (const key of REQUIRED_TOP_LEVEL) {
  if (!(key in dataset)) fail(`campo obrigatorio ausente na raiz: ${key}`);
}

const weightSum = Object.values(dataset.weights ?? {}).reduce((a, b) => a + b, 0);
if (Math.abs(weightSum - 1) > 0.001) {
  fail(`a soma dos pesos deve ser 1.0, encontrada ${weightSum.toFixed(3)}`);
}

const seen = new Set();

for (const b of dataset.bookmakers ?? []) {
  const label = b.id ?? b.name ?? "(sem id)";

  for (const field of REQUIRED_FIELDS) {
    if (!(field in b)) fail(`${label}: campo obrigatorio ausente: ${field}`);
  }

  if (seen.has(b.id)) fail(`${label}: id duplicado`);
  seen.add(b.id);

  if (!/^[a-z0-9-]+$/.test(b.id ?? "")) fail(`${label}: id deve ser minusculo, sem espacos`);

  if (!Array.isArray(b.licenses) || b.licenses.length === 0) {
    fail(`${label}: pelo menos uma licenca deve ser declarada`);
  }

  for (const score of REQUIRED_SCORES) {
    const value = b.editorial_scores?.[score];
    if (!Number.isFinite(value)) fail(`${label}: nota editorial ausente ou invalida: ${score}`);
    else if (value < 0 || value > 10) fail(`${label}: ${score} fora do intervalo 0-10`);
  }

  const extraScores = Object.keys(b.editorial_scores ?? {}).filter((k) => !REQUIRED_SCORES.includes(k));
  if (extraScores.length > 0) fail(`${label}: notas editoriais desconhecidas: ${extraScores.join(", ")}`);

  if (!Number.isFinite(b.withdrawal?.avg_hours)) fail(`${label}: withdrawal.avg_hours invalido`);
  if (b.withdrawal?.avg_hours > b.withdrawal?.max_hours) fail(`${label}: avg_hours maior que max_hours`);
  if (!Number.isFinite(b.odds?.margin_top_leagues_pct)) fail(`${label}: odds.margin_top_leagues_pct invalido`);
  if (b.odds?.margin_top_leagues_pct < 1) warn(`${label}: margem abaixo de 1% e implausivel, confira a fonte`);

  if (b.payments?.pix && !b.brl_native) {
    warn(`${label}: declara Pix sem conta nativa em real, confirme se ha conversao automatica`);
  }

  if (!b.verify_url) warn(`${label}: sem verify_url, a licenca nao pode ser checada de forma independente`);

  const pillars = pillarScores(b);
  for (const [key, value] of Object.entries(pillars)) {
    if (!Number.isFinite(value)) fail(`${label}: pilar ${key} produziu valor nao numerico`);
  }
}

const ranked = rank(dataset, { includeBenchmark: true });
if (ranked.length !== (dataset.bookmakers ?? []).length) {
  fail("o ranking perdeu registros durante a pontuacao");
}

const reviewed = Date.parse(dataset.last_reviewed);
if (Number.isNaN(reviewed)) fail("last_reviewed nao e uma data valida (use AAAA-MM-DD)");

for (const message of warnings) console.log("AVISO  " + message);
for (const message of errors) console.error("ERRO   " + message);

if (errors.length > 0) {
  console.error(`\nValidacao falhou: ${errors.length} erro(s), ${warnings.length} aviso(s).`);
  process.exit(1);
}

console.log(`\nValidacao OK: ${dataset.bookmakers.length} casas, ${warnings.length} aviso(s).`);
console.log(`Topo do ranking: ${ranked[0].name} (${ranked[0].total.toFixed(2)})`);
