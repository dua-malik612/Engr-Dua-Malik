const $ = id => document.getElementById(id);
const a = (href, cls, inner) => `<a class="${cls}" href="${href}" target="_blank" rel="noopener">${inner}</a>`;
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

$("stats").innerHTML = STATS.map(([n, t]) => `<div><dt data-n="${n}">${calm ? n : 0}</dt><dd>${t}</dd></div>`).join("");

$("projectGrid").innerHTML = PROJECTS.map(p => `<article class="card" style="--c:${p.color}">
  <img src="assets/images/${p.img}.png" onerror="this.onerror=null;this.src='assets/images/${p.img}.svg'" alt="${p.title} preview" loading="lazy">
  <div class="card-body"><span class="chip" style="background:${p.color}">${p.tag}</span>
  <h3>${a(p.live || p.post, "stretch", p.title)}</h3><p>${p.text}</p>
  <ul class="stack">${p.stack.map(s => `<li>${s}</li>`).join("")}</ul>
  <div class="links">${p.live ? a(p.live, "live", "Open live site") : ""}${a(p.post, "live post", "LinkedIn post")}</div></div></article>`).join("");

$("academic").innerHTML = ACADEMIC.map(t => `<li>${t}</li>`).join("");
$("timeline").innerHTML = JOURNEY.map(([d, t, x, l]) => `<li><time>${d}</time><h3>${l ? a(l, "tl", t) : t}</h3><p>${x}</p></li>`).join("");
$("skillList").innerHTML = Object.entries(SKILLS).map(([g, items]) =>
  `<div><h3>${g}</h3><ul class="stack big">${items.map(s => `<li>${s}</li>`).join("")}</ul></div>`).join("");
$("winList").innerHTML = WINS.map(([w, l]) => `<li>${l ? a(l, "tl", w) : w}</li>`).join("");
$("certList").innerHTML = CERTS.map(([n, who, when, l]) =>
  a(l, "cert", `<strong>${n}</strong><span>${who}${when ? " · " + when : ""}</span>`)).join("");
$("contactBtns").innerHTML =
  a("mailto:" + EMAIL, "btn gold", "Email me") + a(LINKEDIN, "btn", "LinkedIn") + a(GITHUB, "btn", "GitHub");
$("yr").textContent = new Date().getFullYear();

// Scrolling tech strip
const techs = Object.values(SKILLS).flat();
$("track").innerHTML = [...techs, ...techs].map(t => `<span>${t}</span>`).join("");

// Count-up numbers when they scroll into view
if (!calm) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, n = +el.dataset.n; let i = 0;
    const s = setInterval(() => { el.textContent = Math.round(n * ++i / 30); if (i >= 30) clearInterval(s); }, 35);
    io.unobserve(el);
  }));
  document.querySelectorAll("[data-n]").forEach(el => io.observe(el));

  // Role typewriter in the code window
  const r = $("role"); let ri = 0, ci = ROLES[0].length, del = true;
  (function tick() {
    const w = ROLES[ri]; ci += del ? -1 : 1; r.textContent = w.slice(0, ci);
    let t = del ? 45 : 90;
    if (!del && ci === w.length) { del = true; t = 1800; }
    else if (del && ci === 0) { del = false; ri = (ri + 1) % ROLES.length; t = 300; }
    setTimeout(tick, t);
  })();
}

// ===== Wow layer =====
// Scroll progress + live Rawalpindi clock
const prog = $("prog");
addEventListener("scroll", () => { prog.style.width = scrollY / (document.documentElement.scrollHeight - innerHeight) * 100 + "%"; }, { passive: true });
const clock = () => { $("clock").textContent = "Rawalpindi · " + new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Karachi", hour: "2-digit", minute: "2-digit" }) + " PKT"; };
clock(); setInterval(clock, 20000);

// English / Urdu switch for the hero
const trans = [...document.querySelectorAll("[data-ur]")]; trans.forEach(e => e.dataset.en = e.innerHTML);
let ur = false;
const toggleLang = () => {
  ur = !ur; document.body.classList.toggle("ur-on", ur);
  trans.forEach(e => e.innerHTML = ur ? e.dataset.ur : e.dataset.en);
  $("langBtn").textContent = ur ? "English" : "اردو";
};
$("langBtn").onclick = toggleLang;

// Ctrl+K command palette
const cmds = [
  ...[["Home", "#top"], ["About", "#about"], ["Projects", "#projects"], ["Journey", "#journey"], ["Skills", "#skills"], ["Wins", "#wins"], ["Certificates", "#certs"], ["Contact", "#contact"]].map(([n, h]) => ({ n: "Go to " + n, run: () => { location.hash = h; } })),
  ...PROJECTS.filter(p => p.live).map(p => ({ n: "Open " + p.title + " live", run: () => open(p.live) })),
  { n: "Download CV", run: () => open("assets/Dua_Malik_CV.pdf") },
  { n: "Email Dua", run: () => { location.href = "mailto:" + EMAIL; } },
  { n: "Open GitHub", run: () => open(GITHUB) },
  { n: "Open LinkedIn", run: () => open(LINKEDIN) },
  { n: "Switch language (English / اردو)", run: toggleLang }
];
const pal = $("pal"), inp = $("palIn"), ul = $("palList"); let sel = 0, list = [];
const draw = () => {
  list = cmds.filter(c => c.n.toLowerCase().includes(inp.value.toLowerCase())); sel = Math.max(0, Math.min(sel, list.length - 1));
  ul.innerHTML = list.map((c, i) => `<li class="${i === sel ? "on" : ""}" data-i="${i}">${c.n}</li>`).join("") || "<li>No match</li>";
};
const openPal = () => { pal.hidden = false; inp.value = ""; sel = 0; draw(); inp.focus(); };
const closePal = () => { pal.hidden = true; };
addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); pal.hidden ? openPal() : closePal(); return; }
  if (pal.hidden) return;
  if (e.key === "Escape") closePal();
  if (e.key === "ArrowDown") { e.preventDefault(); sel++; draw(); }
  if (e.key === "ArrowUp") { e.preventDefault(); sel--; draw(); }
  if (e.key === "Enter" && list[sel]) { closePal(); list[sel].run(); }
});
inp.addEventListener("input", () => { sel = 0; draw(); });
ul.addEventListener("click", e => { const i = e.target.dataset.i; if (i != null) { closePal(); list[i].run(); } });
pal.addEventListener("click", e => { if (e.target === pal) closePal(); });
$("cmdBtn").onclick = openPal;

if (!calm) {
  // Grid lights up under the cursor in the hero
  const hero = document.querySelector(".hero");
  hero.addEventListener("pointermove", e => { const r = hero.getBoundingClientRect(); hero.style.setProperty("--mx", e.clientX - r.left + "px"); hero.style.setProperty("--my", e.clientY - r.top + "px"); });
  // 3D tilt + glare on project cards
  document.querySelectorAll(".card").forEach(c => {
    c.addEventListener("pointermove", e => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      c.style.transform = `perspective(900px) rotateX(${(.5 - y) * 8}deg) rotateY(${(x - .5) * 10}deg) translateY(-6px)`;
      c.style.setProperty("--gx", x * 100 + "%"); c.style.setProperty("--gy", y * 100 + "%");
    });
    c.addEventListener("pointerleave", () => { c.style.transform = ""; });
  });
}
