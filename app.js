/* Renders the page from data.js. You shouldn't need to edit this file. */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const TYPES = {
  didactic:     { label: "Lecture / Presentation", plural: "Lectures" },
  lab:          { label: "Skills Lab",             plural: "Labs" },
  discussion:   { label: "Topic Discussion",       plural: "Topic discussions" },
  precepting:   { label: "APPE Precepting",        plural: "Precepting" },
  assessment:   { label: "Assessment",             plural: "Assessments" },
  coordination: { label: "Course Coordination",    plural: "Course coordination" }
};

// Hero + about
$("name").textContent = PROFILE.name;
$("role").textContent = PROFILE.title;
$("org").textContent = PROFILE.org;
$("photo").src = PROFILE.photo;
$("cv-btn").href = PROFILE.cv;
$("about-text").innerHTML = PROFILE.about.map((p) => `<p>${esc(p)}</p>`).join("");
$("email-btn").href = "mailto:" + PROFILE.email;
$("email-btn").textContent = PROFILE.email;
$("foot").textContent = `© ${new Date().getFullYear()} ${PROFILE.name} · CV updated ${PROFILE.cvUpdated}`;

// Stats are counted from the data so they stay current automatically
const count = (fn) => TEACHING.filter(fn).length;
const stats = [
  [count((t) => t.type === "didactic" || t.type === "discussion"), "Lectures & topic discussions"],
  [count((t) => t.type === "lab"), "Skills labs facilitated"],
  [count((t) => t.role && /lead/i.test(t.role) && t.type === "lab"), "Labs as lead facilitator"],
  [count((t) => t.type === "precepting"), "APPE precepting blocks"]
];
$("stats").innerHTML = stats.map(([n, l]) => `<div class="stat"><span class="stat-n">${n}</span><span class="stat-l">${l}</span></div>`).join("");

// Philosophy
$("pillars").innerHTML = PHILOSOPHY.pillars.map((p, i) =>
  `<div class="pillar"><span class="pillar-i">0${i + 1}</span><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p></div>`).join("");
$("statement").innerHTML = PHILOSOPHY.paragraphs.map((p, i) => `<p${i > 1 ? ' class="more"' : ""}>${esc(p)}</p>`).join("");
const toggle = (btn, box) => $(btn).addEventListener("click", (e) => {
  const open = $(box).classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", open);
  e.currentTarget.textContent = open ? "Show less" : "Read the full statement";
});
toggle("statement-toggle", "statement");
const sourcesHtml = (list) => `<div class="sources"><h4>Grounded in</h4><ul>${list.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`;
$("statement-toggle").insertAdjacentHTML("afterend", sourcesHtml(PHILOSOPHY.sources));

// Research philosophy
$("r-pillars").innerHTML = RESEARCH.pillars.map((p, i) =>
  `<div class="pillar"><span class="pillar-i">0${i + 1}</span><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p></div>`).join("");
$("r-statement").innerHTML = RESEARCH.paragraphs.map((p, i) => `<p${i > 1 ? ' class="more"' : ""}>${esc(p)}</p>`).join("");
toggle("r-toggle", "r-statement");
$("r-toggle").insertAdjacentHTML("afterend", sourcesHtml(RESEARCH.sources));

// Teaching timeline
const academicYear = (d) => { const [y, m] = d.split("-").map(Number); return m >= 7 ? y : y - 1; };
const yearLabel = (y) => {
  const stage = y >= 2025 ? "Fellowship" : "PGY-1 Residency";
  return `${y}–${y + 1}<span class="year-stage">${stage}</span>`;
};

function detailsHtml(d) {
  const block = (h, t) => t ? `<div class="d-block"><h4>${h}</h4><p>${esc(t)}</p></div>` : "";
  const ev = (d.evidence || []).map((e) => `<a class="chip-link" href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.label)} ↗</a>`).join("");
  return `${d.summary ? `<p class="d-summary">${esc(d.summary)}</p>` : ""}
    ${d.attendance ? `<p class="d-meta"><b>Attendance:</b> ${esc(d.attendance)}</p>` : ""}
    ${block("Reflection", d.reflection)}${block("What went well", d.strengths)}
    ${block("Areas for growth", d.growth)}${block("Learner &amp; preceptor feedback", d.feedback)}
    ${ev ? `<div class="d-evidence"><h4>Evidence</h4><div class="chips">${ev}</div></div>` : ""}`;
}

function entryHtml(t) {
  const reflective = t.details && (t.details.reflection || t.details.strengths || t.details.evidence);
  const head = `<span class="e-date">${esc(t.dateLabel)}</span>
    <span class="e-main"><span class="e-title">${esc(t.title)}${reflective ? '<span class="dot" title="Includes reflection"></span>' : ""}</span>
      <span class="e-meta">${esc(t.audience)} · ${esc(t.setting)}</span></span>
    <span class="e-tags"><span class="tag t-${t.type}">${TYPES[t.type].label}</span>${t.role && t.role !== "Facilitator" ? `<span class="tag role">${esc(t.role)}</span>` : ""}</span>`;
  return t.details
    ? `<details class="entry" data-type="${t.type}"><summary>${head}<span class="chev" aria-hidden="true"></span></summary><div class="e-body">${detailsHtml(t.details)}</div></details>`
    : `<div class="entry" data-type="${t.type}"><div class="row">${head}<span class="chev-space"></span></div></div>`;
}

function renderTimeline(filter) {
  const items = TEACHING.filter((t) => filter === "all" || t.type === filter || (filter === "reflections" && t.details))
    .sort((a, b) => b.date.localeCompare(a.date));
  const years = [...new Set(items.map((t) => academicYear(t.date)))];
  $("timeline").innerHTML = years.map((y) => {
    const list = items.filter((t) => academicYear(t.date) === y);
    return `<div class="year"><h3 class="year-h">${yearLabel(y)}<span class="year-n">${list.length}</span></h3>${list.map(entryHtml).join("")}</div>`;
  }).join("") || `<p class="muted">No entries yet.</p>`;
}

const filters = [["all", "All"], ...Object.entries(TYPES).filter(([k]) => TEACHING.some((t) => t.type === k)).map(([k, v]) => [k, v.plural]), ["reflections", "With reflections"]];
$("filters").innerHTML = filters.map(([k, l], i) => `<button class="filter" data-f="${k}" aria-pressed="${i === 0}">${l}</button>`).join("");
$("filters").addEventListener("click", (e) => {
  const b = e.target.closest(".filter"); if (!b) return;
  document.querySelectorAll(".filter").forEach((x) => x.setAttribute("aria-pressed", x === b));
  renderTimeline(b.dataset.f);
});
renderTimeline("all");

// Scholarship
$("pubs").innerHTML = SCHOLARSHIP.publications.map((p) => `<li><p>${p.cite} <i>${esc(p.venue)}</i>.</p><span class="pill">${esc(p.status)}</span></li>`).join("");
$("posters").innerHTML = SCHOLARSHIP.posters.map((p) => `<li><p>${esc(p.title)}</p><span class="muted small">${esc(p.venue)} · ${esc(p.date)}</span></li>`).join("");
$("research").innerHTML = SCHOLARSHIP.research.map((r) => `<li><p class="strong">${esc(r.title)}</p><span class="muted small">${esc(r.where)} · ${esc(r.date)}</span>${r.note ? `<span class="small">${esc(r.note)}</span>` : ""}</li>`).join("");

// Background
$("training").innerHTML = TRAINING.map((t) => `<li><span class="muted small">${esc(t.date)}</span><p class="strong">${esc(t.title)}</p><span class="small">${esc(t.where)}</span>${t.note ? `<span class="muted small">${esc(t.note)}</span>` : ""}</li>`).join("");
const compact = (list) => list.map((h) => `<li><p>${esc(h.title)}${h.where ? `<span class="muted small block">${esc(h.where)}</span>` : ""}</p><span class="muted small">${esc(h.date)}</span></li>`).join("");
$("honors").innerHTML = compact(HONORS);
$("docs").innerHTML = [{ label: `Curriculum Vitae (${PROFILE.cvUpdated})`, url: PROFILE.cv, primary: true }, ...LOGS]
  .map((d) => `<a class="doc${d.primary ? " primary" : ""}" href="${esc(d.url)}" ${d.primary ? "download" : 'target="_blank" rel="noopener"'}><span>${esc(d.label)}</span><span aria-hidden="true">${d.primary ? "↓" : "↗"}</span></a>`).join("");
