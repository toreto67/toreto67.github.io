const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- theme ---------- */
const KEY = "drmini-theme";
const root = document.documentElement;
const stored = localStorage.getItem(KEY);
if (stored) root.dataset.theme = stored;
else root.dataset.theme = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
$("#theme").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem(KEY, root.dataset.theme);
});

/* ---------- header + mobile nav ---------- */
const hdr = $("#hdr"), sheet = $("#navsheet"), burger = $("#burger");
const onScroll = () => hdr.classList.toggle("is-stuck", scrollY > 6);
addEventListener("scroll", onScroll, { passive: true });
onScroll();

const setMenu = (open) => {
  sheet.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.innerHTML = open
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><use href="#i-x"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><use href="#i-menu"/></svg>';
};
burger.addEventListener("click", () => setMenu(!sheet.classList.contains("is-open")));
$$("#navsheet a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

/* ---------- reveal ---------- */
const io = new IntersectionObserver(
  (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("is-in")),
  { threshold: 0.1, rootMargin: "0px 0px -40px" }
);
const rv = (el) => el && io.observe(el);
$$(".rv").forEach(rv);
rv(document.body);

/* ---------- capabilities ---------- */
const CAPS = [
  ["i-tree", "Code virtualization", "Marked regions are translated to a small bytecode and executed by an embedded interpreter, so there is no native x86 left to disassemble in that part of the image.", ["bytecode VM", "Zydis", "per region"]],
  ["i-quotes", "String encryption", "Strings are located in the image, encrypted, and decrypted at runtime by a TLS callback. A minimum length filter keeps short values out of it.", ["TLS decryptor", "re-encryption", "zeroize"]],
  ["i-eyeoff", "Import protection", "The import table is emptied and the functions are resolved at runtime. The reconstructed table is re-encrypted on an interval, so it is readable for a window and no longer.", ["runtime resolver", "re-encryption", "window ms"]],
  ["i-lock", "Code encryption", "Code sections are encrypted and decrypted per page on demand. In lazy mode memory stays mostly clean, so a dumped process does not hand over a full readable image.", ["per page", "lazy mode", "interval ms"]],
  ["i-bug", "Anti-analysis", "Anti-debug disrupts the debug and timing facilities in the process. Anti-dump makes the usual live memory grabs useless. Anti-VM detects virtualized environments and is off by default.", ["anti-debug", "anti-dump", "anti-VM"]],
  ["i-fprint", "Traceability", "A unique watermark is stamped into every output, and the COFF symbol table, debug sections and section names are cleaned up so the original layout is not free to read.", ["watermark", "strip symbols", "section names"]],
];
$("#caps").innerHTML = CAPS.map(
  ([ic, t, d, tags]) => `<article class="cap">
    <div class="cap__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><use href="#${ic}"/></svg></div>
    <h3>${t}</h3>
    <p>${d}</p>
    <ul>${tags.map((x) => `<li>${x}</li>`).join("")}</ul>
  </article>`
).join("");

/* ---------- pipeline steps ---------- */
const STEPS = [
  ["Loading image", "parse the PE"],
  ["Checking what this binary supports", "capability analysis"],
  ["Stripping COFF symbol table", "debug.stripSymbols"],
  ["Removing debug sections", "Pdb, Tds, debug directories"],
  ["Virtualizing marked code regions", "bytecode VM"],
  ["Triple-checking strings", "false-positive pass"],
  ["Encrypting strings, code & hiding imports", "the main work"],
  ["Injecting TLS decryptor & import resolver", "runtime stub"],
  ["Stamping watermark", "unique id per output"],
  ["Writing output", "done, with degradations"],
];
$("#steps").innerHTML = STEPS.map(
  ([t, d]) => `<li><b>${t}</b><em>${d}</em></li>`
).join("");

/* ---------- report ---------- */
$("#report").innerHTML =
  `<span class="tk-c">MyApp.exe</span>  -&gt;  <span class="tk-c">MyApp.drmini.exe</span>\n\n` +
  `symbols stripped: <span class="tk-c">true</span> | debug sections removed: <span class="tk-n">4</span> |\n` +
  `strings detected: on encrypted: <span class="tk-n">218</span> (re-encrypt: off) |\n` +
  `imports hidden: <span class="tk-n">96</span> funcs in <span class="tk-n">7</span> dlls (re-encrypt: on) |\n` +
  `anti-debug: on | anti-dump: on | virtualized regions: <span class="tk-n">3</span> |\n` +
  `code encrypted: <span class="tk-n">1483264</span> bytes | poisoned dirs: <span class="tk-n">2</span> |\n` +
  `poisoned sections: <span class="tk-n">1</span> | watermark: <span class="tk-n">65A3F1C0D4E20001</span> |\n` +
  `output: <span class="tk-n">2768896</span> bytes\n\n` +
  `<span class="tk-d">degraded to stay compatible:</span>\n` +
  `  - <span class="tk-d">import re-encryption disabled: .NET image, imports are resolved by the runtime</span>\n` +
  `  - <span class="tk-d">code encryption skipped: no dynamic base and no relocations</span>`;

/* ---------- config keys ---------- */
const KV = [
  ["stripSymbols", "clear the COFF symbol table"],
  ["stripDebugSections", "remove debug directories"],
  ["strings.minLength", "shortest string worth encrypting"],
  ["strings.runtimeReencrypt", "re-encrypt strings on an interval"],
  ["strings.zeroize", "wipe the plaintext after use"],
  ["strings.windowMs", "how long a string stays readable"],
  ["imports.hide", "empty the import table"],
  ["imports.runtimeReencrypt", "re-encrypt imports on an interval"],
  ["imports.windowMs", "how long the table stays readable"],
  ["antiDebug", "disrupt debuggers and timers"],
  ["antiDump", "make live memory dumping useless"],
  ["antiVm", "detect virtual machines"],
  ["virtualize", "translate marked regions to bytecode"],
  ["encryptCode", "encrypt the code sections"],
  ["lazy", "decrypt on demand instead of up front"],
  ["watermark", "stamp a unique id into the output"],
];
$("#kv").innerHTML = KV.map(([k, v]) => `<div><b>${k}</b><span>${v}</span></div>`).join("");
