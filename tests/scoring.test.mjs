import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import {
  clamp,
  invertedLinearScore,
  withdrawalSpeedScore,
  oddsValueScore,
  paymentsBrazilScore,
  scoreBookmaker,
  rank,
  applyFilters,
  headToHead,
} from "../src/scoring.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const dataset = JSON.parse(await readFile(join(HERE, "..", "data", "bookmakers.json"), "utf8"));

test("clamp limita o intervalo", () => {
  assert.equal(clamp(15, 0, 10), 10);
  assert.equal(clamp(-3, 0, 10), 0);
  assert.equal(clamp(4.2, 0, 10), 4.2);
});

test("invertedLinearScore premia valores menores", () => {
  assert.equal(invertedLinearScore(2, 2, 96), 10);
  assert.equal(invertedLinearScore(96, 2, 96), 0);
  assert.ok(invertedLinearScore(10, 2, 96) > invertedLinearScore(40, 2, 96));
  assert.equal(invertedLinearScore(200, 2, 96), 0, "acima do pior caso a nota nao fica negativa");
});

test("velocidade de saque e margem produzem notas 0-10", () => {
  for (const b of dataset.bookmakers) {
    const speed = withdrawalSpeedScore(b);
    const odds = oddsValueScore(b);
    assert.ok(speed >= 0 && speed <= 10, `${b.id}: velocidade fora do intervalo`);
    assert.ok(odds >= 0 && odds <= 10, `${b.id}: odds fora do intervalo`);
  }
});

test("Pix e conta em real elevam a nota de pagamentos", () => {
  const comPix = dataset.bookmakers.find((b) => b.payments.pix && b.brl_native);
  const semPix = dataset.bookmakers.find((b) => !b.payments.pix && !b.brl_native);
  assert.ok(paymentsBrazilScore(comPix) > paymentsBrazilScore(semPix));
});

test("a nota final fica entre 0 e 10 para todas as casas", () => {
  for (const b of dataset.bookmakers) {
    const { total } = scoreBookmaker(b, dataset.weights);
    assert.ok(total >= 0 && total <= 10, `${b.id}: total ${total}`);
  }
});

test("o ranking sai ordenado e exclui a linha de base por padrao", () => {
  const rows = rank(dataset);
  assert.ok(rows.length > 0);
  assert.ok(rows.every((r) => !r.raw.benchmark));
  for (let i = 1; i < rows.length; i += 1) {
    assert.ok(rows[i - 1].total >= rows[i].total, "ordem decrescente quebrada");
  }
});

test("includeBenchmark traz a linha de base de volta", () => {
  const semBenchmark = rank(dataset).length;
  const comBenchmark = rank(dataset, { includeBenchmark: true }).length;
  assert.ok(comBenchmark > semBenchmark);
});

test("pesos customizados mudam a ordem do ranking", () => {
  const padrao = rank(dataset)[0].id;
  const soOdds = rank(dataset, { weights: { odds_value: 1 } })[0].id;
  assert.notEqual(padrao, soOdds, "quem tem a menor margem deve liderar quando so as odds pesam");
  assert.equal(soOdds, "maxbet");
});

test("filtro de Pix devolve apenas casas com Pix", () => {
  const rows = applyFilters(rank(dataset), { pix: true });
  assert.ok(rows.length > 0);
  assert.ok(rows.every((r) => r.raw.payments.pix));
});

test("filtro de horas respeita o limite", () => {
  const rows = applyFilters(rank(dataset), { maxWithdrawalHours: 12 });
  assert.ok(rows.every((r) => r.raw.withdrawal.avg_hours <= 12));
});

test("busca encontra por apelido", () => {
  const rows = applyFilters(rank(dataset), { search: "ibcbet" });
  assert.equal(rows.length, 1);
  assert.equal(rows[0].id, "maxbet");
});

test("comparacao direta aponta um vencedor por pilar", () => {
  const a = dataset.bookmakers.find((b) => b.id === "sbobet");
  const b = dataset.bookmakers.find((x) => x.id === "bk8");
  const result = headToHead(a, b, dataset.weights);
  assert.equal(result.rows.length, 7);
  assert.ok(["SBOBet", "BK8", "empate"].includes(result.overall));
  const pagamentos = result.rows.find((r) => r.pillar === "payments_brazil");
  assert.equal(pagamentos.winner, "BK8");
});

test("os pesos do dataset somam 1.0", () => {
  const soma = Object.values(dataset.weights).reduce((a, b) => a + b, 0);
  assert.ok(Math.abs(soma - 1) < 0.001, `soma ${soma}`);
});

test("todas as casas declaram licenca e aviso de verificacao", () => {
  for (const b of dataset.bookmakers) {
    assert.ok(Array.isArray(b.licenses) && b.licenses.length > 0, `${b.id} sem licenca`);
    assert.ok(typeof b.verify_url === "string" && b.verify_url.startsWith("http"), `${b.id} sem verify_url`);
  }
});
