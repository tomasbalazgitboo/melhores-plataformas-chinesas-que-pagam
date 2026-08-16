/**
 * Interface web do comparador. Le data/bookmakers.json, aplica os filtros
 * escolhidos pelo usuario e renderiza o ranking usando o mesmo motor de
 * pontuacao do CLI (src/scoring.mjs).
 */

import { rank, applyFilters, headToHead, PILLAR_LABELS } from "../src/scoring.mjs";

const $ = (selector) => document.querySelector(selector);

let dataset = null;
let weights = null;

async function boot() {
  try {
    const response = await fetch("data/bookmakers.json", { cache: "no-cache" });
    if (!response.ok) throw new Error("HTTP " + response.status);
    dataset = await response.json();
  } catch (error) {
    $("#ranking").tBodies[0].innerHTML =
      '<tr><td colspan="8">Nao foi possivel carregar o dataset. Abra a pagina por um servidor local, por exemplo <code>npm start</code>.</td></tr>';
    return;
  }

  weights = { ...dataset.weights };
  $("#last-reviewed").textContent = dataset.last_reviewed;
  $("#dataset-disclaimer").textContent = dataset.data_disclaimer;

  buildWeightSliders();
  buildHeadToHeadSelects();
  bindEvents();
  render();
}

function buildWeightSliders() {
  const container = $("#weight-sliders");
  container.innerHTML = "";

  for (const [key, label] of Object.entries(PILLAR_LABELS)) {
    const row = document.createElement("label");
    row.className = "weight-row";
    row.innerHTML = `
      <span>${label}</span>
      <input type="range" min="0" max="1" step="0.01" value="${weights[key] ?? 0}" data-weight="${key}" />
      <output>${(weights[key] ?? 0).toFixed(2)}</output>
    `;
    container.appendChild(row);
  }
}

function buildHeadToHeadSelects() {
  const options = dataset.bookmakers
    .map((b) => `<option value="${b.id}">${b.name}</option>`)
    .join("");
  $("#h2h-a").innerHTML = options;
  $("#h2h-b").innerHTML = options;
  $("#h2h-a").value = dataset.bookmakers[0].id;
  $("#h2h-b").value = dataset.bookmakers[1].id;
}

function bindEvents() {
  const inputs = [
    "#f-search", "#f-hours", "#f-score", "#f-pix", "#f-brl",
    "#f-pt", "#f-crypto", "#f-sharp", "#f-benchmark",
  ];
  for (const selector of inputs) {
    $(selector).addEventListener("input", render);
  }

  $("#weight-sliders").addEventListener("input", (event) => {
    const key = event.target.dataset.weight;
    if (!key) return;
    weights[key] = Number(event.target.value);
    event.target.nextElementSibling.textContent = Number(event.target.value).toFixed(2);
    render();
  });

  $("#reset-weights").addEventListener("click", () => {
    weights = { ...dataset.weights };
    buildWeightSliders();
    render();
  });

  $("#h2h-a").addEventListener("change", renderHeadToHead);
  $("#h2h-b").addEventListener("change", renderHeadToHead);
}

function currentFilters() {
  const hours = $("#f-hours").value;
  const score = $("#f-score").value;
  return {
    search: $("#f-search").value.trim(),
    pix: $("#f-pix").checked,
    brl: $("#f-brl").checked,
    ptBr: $("#f-pt").checked,
    crypto: $("#f-crypto").checked,
    sharpOnly: $("#f-sharp").checked,
    maxWithdrawalHours: hours ? Number(hours) : undefined,
    minTotal: score ? Number(score) : undefined,
  };
}

function yesNo(value) {
  return value
    ? '<span class="pill yes">sim</span>'
    : '<span class="pill">nao</span>';
}

function render() {
  const rows = applyFilters(
    rank(dataset, { weights, includeBenchmark: $("#f-benchmark").checked }),
    currentFilters()
  );

  const tbody = $("#ranking").tBodies[0];
  tbody.innerHTML = "";
  $("#count").textContent = `(${rows.length} de ${dataset.bookmakers.length})`;
  $("#empty").hidden = rows.length > 0;

  rows.forEach((row, index) => {
    const b = row.raw;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td class="name">${b.name}${b.benchmark ? " <small>linha de base ocidental</small>" : ""}
        <small>${b.region} &middot; desde ${b.founded}</small></td>
      <td class="score ${row.total >= 8 ? "high" : ""}">${row.total.toFixed(2)}</td>
      <td>${b.withdrawal.avg_hours}h <small style="color:var(--muted)">(max ${b.withdrawal.max_hours}h)</small></td>
      <td>${b.odds.margin_top_leagues_pct}%</td>
      <td>${yesNo(b.payments.pix)}</td>
      <td>${yesNo(b.pt_br_interface)}</td>
      <td>${b.licenses.join("<br />")}</td>
    `;
    tbody.appendChild(tr);

    const detail = document.createElement("tr");
    detail.className = "details-row";
    const pillars = Object.entries(PILLAR_LABELS)
      .map(([key, label]) => `<li><span>${label}</span><strong>${row.pillars[key].toFixed(2)}</strong></li>`)
      .join("");
    detail.innerHTML = `
      <td colspan="8">
        ${b.notes}
        <ul class="pillar-list">${pillars}</ul>
        <p>Saque minimo R$ ${b.withdrawal.min_brl} &middot; aposta maxima US$ ${b.limits.max_single_bet_usd.toLocaleString("pt-BR")}
        &middot; restricao de conta: ${b.limits.account_limiting}
        &middot; <a href="${b.verify_url}" rel="noopener noreferrer external" target="_blank">verificar licenca</a></p>
      </td>
    `;
    tbody.appendChild(detail);
  });

  renderHeadToHead();
}

function renderHeadToHead() {
  const a = dataset.bookmakers.find((b) => b.id === $("#h2h-a").value);
  const b = dataset.bookmakers.find((x) => x.id === $("#h2h-b").value);
  if (!a || !b) return;

  const result = headToHead(a, b, weights);
  $("#h2h-name-a").textContent = a.name;
  $("#h2h-name-b").textContent = b.name;

  const tbody = $("#h2h").tBodies[0];
  tbody.innerHTML = result.rows
    .map(
      (row) => `
      <tr>
        <td>${PILLAR_LABELS[row.pillar] ?? row.pillar}</td>
        <td>${row.a.toFixed(2)}</td>
        <td>${row.b.toFixed(2)}</td>
        <td>${row.winner}</td>
      </tr>`
    )
    .join("");

  tbody.insertAdjacentHTML(
    "beforeend",
    `<tr>
      <td><strong>Total ponderado</strong></td>
      <td><strong>${result.a.total.toFixed(2)}</strong></td>
      <td><strong>${result.b.total.toFixed(2)}</strong></td>
      <td><strong>${result.overall}</strong></td>
    </tr>`
  );
}

boot();
