const DATA = {
  alias: "torete",
  nombre: "Hugo",
  role: "Security Researcher",
  status: "open to collaboration",
  bio: "Security researcher working on Windows internals, malware analysis and low-level development. I like taking binaries apart, understanding what they actually do, and building the tooling that makes it easier.",
  aboutTitle: "More than just code",
  about: [
    "I'm the kind of developer who learns by taking things apart. Most of my work lives below the surface: PE internals, unpacking, code virtualization, kernel-mode research, and tools that make reversing less painful.",
    "I spend most of my time in C and C++, reading disassembly, poking at virtualized code and writing small utilities around whatever problem I'm stuck on. Everything on this page is my own work, or something I studied until I understood it well enough to rebuild it.",
    "Right now most of my effort goes into DRMini, my own PE protector. It's not public yet, but it's the project I'm most proud of.",
  ],
  githubUser: "toreto67",
  github: "https://github.com/toreto67",
  telegramUser: "trainsick",
  telegram: "https://t.me/trainsick",
  discordUser: "1354485153359069445",
  telefono: "+40 738 212 216",
  email: "",
  location: "Málaga, Spain",
  stack: "C / C++ / x86-64 / Rust",
  focus: "Windows internals & reverse engineering",
  ctaPrimary: "view projects",
  ctaSecondary: "get in touch",
  avatar: "https://avatars.githubusercontent.com/u/329960189?v=4",

  facts: [
    { k: "location", v: "Málaga, Spain" },
    { k: "status", v: "Learning and building" },
    { k: "focus", v: "Windows internals & reverse engineering" },
    { k: "main stack", v: "C / C++ / x86-64 / Rust" },
  ],

  interests: [
    { t: "Windows Internals", d: "Processes, memory, the loader, syscalls and everything the NT layer hides from userspace." },
    { t: "Reverse Engineering", d: "Unpacking virtualized code, rebuilding imports, tracing behaviour, reading binaries at the instruction level." },
    { t: "Binary Protection", d: "Obfuscators, packers, code virtualizers and DRM — and how to break every single one of them." },
    { t: "Low-Level Development", d: "Close to the metal: native code, drivers, hooks, loaders and custom tooling for problems that have no off-the-shelf answer." },
  ],

  skills: [
    { n: "Reverse Engineering", l: 90, t: "static & runtime analysis, unpacking" },
    { n: "Windows Internals", l: 86, t: "PE format, loader, syscalls, memory" },
    { n: "C++", l: 88, t: "daily driver — systems and tooling" },
    { n: "C / x86-64", l: 62, t: "native code, asm, calling conventions" },
    { n: "Code Virtualization", l: 68, t: "VM-based protection and its bypasses" },
    { n: "Rust", l: 30, t: "learning, small experiments" },
  ],

  timeline: [
    { h: "Started taking things apart", p: "Got into programming through small utilities and scripts, then got pulled into figuring out what actually happens under the hood." },
    { h: "Windows internals and RE", p: "Moved into PE structures, the image loader, protected binaries and learning to read exactly what those tools are trying to hide." },
    { h: "Writing my own tooling", p: "Built unpackers, dumpers, mutators and small utilities to solve my own problems instead of waiting for someone else to do it." },
    { h: "Kernel and virtualization", p: "Hypervisors, kernel-mode frameworks, hardware-level tricks. Still exploring where this ends up." },
  ],

  projects: [
    {
      n: "DRMini",
      d: "My own PE protector for Windows x64. String encryption, import hiding, code virtualization, anti-debug and anti-dump. Still in development.",
      tags: ["C++", "PE / x64", "Protector", "VM"],
      private: true,
    },
    {
      n: "Erase-Function",
      d: "Runtime function eraser. Removes code from memory while it is still executing, so it can never be dumped out of the process. My own project, written in C++.",
      tags: ["C++", "Runtime", "Anti-dump"],
      url: "https://github.com/toreto67/Erase-Function",
    },
  ],

  posts: {
    n: "NoMercyAI Visual — Full Teardown",
    d: "A four-part reverse engineering write-up on a 77 MB .NET single-file bundle: recovering the managed payload, defeating the string obfuscation, mapping the ECDSA license system, and the hardening fixes it exposed. Read in one go.",
    tags: ["RE", ".NET", "4 parts"],
    url: "blog/index.html",
  },

  marquee: [
    "reverse engineering",
    "windows internals",
    "x86-64",
    "c / c++",
    "malware analysis",
    "code virtualization",
    "pe protection",
    "drm development",
    "writing",
    "kernel development",
    "unpacking",
  ],

  terminal: [
    "$ whoami",
    "-> torete",
    "$ cat identity.txt",
    "name    : Hugo",
    "role    : Security Researcher",
    "focus   : Windows internals, malware & RE",
    "stack   : C / C++ / x86-64 / Rust",
    "based   : Málaga, Spain",
    "status  : open to collaboration",
    "$ echo $CONTACT",
    "telegram: @trainsick",
    "discord : 1354485153359069445",
    "github  : toreto67",
    "$ _",
  ],
};

const ICONS = {
  github: '<svg viewBox="0 0 24 24"><path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6a11.5 11.5 0 0 0 7.9-10.9C23.5 5.6 18.4.5 12 .5Z"/></svg>',
  telegram: '<svg viewBox="0 0 24 24"><path d="M21.9 4.3 18.7 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.2.3-.5.5-1 .5l.4-4.7 8.5-7.7c.4-.3-.1-.5-.6-.2L6.7 13.1 2 11.6c-1-.3-1-1 .2-1.5l19-7.3c.9-.3 1.6.2 1.3 1.5Z"/></svg>',
  discord: '<svg viewBox="0 0 24 24"><path d="M19.6 5.2A17 17 0 0 0 15.4 4l-.3.5a12 12 0 0 1 3.5 1.7 15.7 15.7 0 0 0-13.2 0A12 12 0 0 1 8.9 4.5L8.6 4a17 17 0 0 0-4.2 1.2C1.7 9.3.9 13.3 1.2 17.2A17 17 0 0 0 6.4 20l1-1.6c-1.1-.4-2.1-1-3-1.7l.7-.6a12 12 0 0 0 10.2 0l.7.6c-.9.7-1.9 1.3-3 1.7l1 1.6a17 17 0 0 0 5.2-2.8c.4-4.5-.8-8.5-3.5-12ZM8.6 15.1c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.9.9 1.8 2c0 1.1-.8 2-1.8 2Zm6.8 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.9.9 1.8 2c0 1.1-.8 2-1.8 2Z"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><path d="M6.6 2h-.9A2.7 2.7 0 0 0 3 4.7C3 14 10 21 19.3 21a2.7 2.7 0 0 0 2.7-2.7v-.9a1.4 1.4 0 0 0-1.2-1.4l-3.3-.5a1.4 1.4 0 0 0-1.4.6l-1 1.2a11.6 11.6 0 0 1-6.3-6.3l1.2-1a1.4 1.4 0 0 0 .6-1.4L8 4.2A1.4 1.4 0 0 0 6.6 2Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8.1L4.2 7v10h15.6V7L12 13.1Z"/></svg>',
  link: '<svg viewBox="0 0 24 24"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l1.4-1.4a1 1 0 1 1 1.4 1.4L12 13.4a1 1 0 1 1-1.4-1.4Zm-.7 2.8a4 4 0 0 1 0-5.7l2.1-2.1 1.4 1.4-2.1 2.1a2 2 0 0 0 2.8 2.8l2.1-2.1 1.4 1.4-2.1 2.1a4 4 0 0 1-5.6 0ZM7.8 18.3a4 4 0 0 1 0-5.6l1.4-1.4 1.4 1.4-1.4 1.4a2 2 0 0 0 2.8 2.8l1.4-1.4 1.4 1.4-1.4 1.4a4 4 0 0 1-5.6 0Z"/></svg>',
  ext: '<svg viewBox="0 0 24 24"><path d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3ZM5 5h5v2H6v11h11v-4h2v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg>',
};

const $ = (s, c = document) => c.querySelector(s);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const GH = DATA.githubUser;

const links = [
  { ic: "github", t: "GitHub", u: DATA.github },
  { ic: "telegram", t: "Telegram", u: DATA.telegram },
  { ic: "discord", t: "Discord", u: `https://discord.com/users/${DATA.discordUser}` },
  { ic: "phone", t: "Phone", u: `tel:${DATA.telefono.replace(/\s/g, "")}` },
];

function renderBind() {
  document.querySelectorAll("[data-bind]").forEach((n) => {
    n.textContent = DATA[n.dataset.bind] ?? "";
  });
  document.querySelectorAll("a[href='{{github}}']").forEach((n) => (n.href = DATA.github));
  document.title = `${DATA.alias} — portfolio`;}

function renderSocials() {
  const ul = $("#socials");
  ul.innerHTML = "";
  links.forEach((l) => {
    const li = el("li");
    const a = el("a", null, `${ICONS[l.ic]}<span>${l.t}</span>`);
    a.href = l.u;
    if (l.u.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    li.appendChild(a);
    ul.appendChild(li);
  });
}

function renderFacts() {
  const box = $("#facts");
  box.innerHTML = "";
  DATA.facts.forEach((f) => {
    box.appendChild(el("div", "fact reveal", `<div class="fact__k">${f.k}</div><div class="fact__v">${f.v}</div>`));
  });
}

function renderAbout() {
  $(".about__text").innerHTML = DATA.about.map((p) => `<p>${p}</p>`).join("");
  const box = $("#interests");
  box.innerHTML = "";
  DATA.interests.forEach((i) => {
    box.appendChild(el("div", "interest reveal", `<h4>${i.t}</h4><p>${i.d}</p>`));
  });
}

function renderSkills() {
  const box = $("#skillsGrid");
  box.innerHTML = "";
  DATA.skills.forEach((s) => {
    box.appendChild(
      el("div", "skill reveal", `<div class="skill__name">${s.n}</div><div class="skill__bar"><i data-w="${s.l}"></i></div><span class="skill__tag">${s.t}</span>`)
    );
  });
}

function renderTimeline() {
  const box = $("#timeline");
  box.innerHTML = "";
  DATA.timeline.forEach((t, i) => {
    box.appendChild(el("li", "tl reveal", `<span class="tl__n">${i + 1}</span><h4>${t.h}</h4><p>${t.p}</p>`));
  });
}

function renderProjects() {
  const box = $("#projects");
  box.innerHTML = "";
  if (DATA.projects.length === 2) box.classList.add("projects--pair");

  DATA.projects.forEach((p) => {
    const locked = !p.url;
    const internal = !locked && !/^https?:/i.test(p.url);
    const node = el(locked ? "div" : "a", "project reveal" + (locked ? " project--locked" : ""));
    if (!locked) {
      node.href = p.url;
      if (!internal) {
        node.target = "_blank";
        node.rel = "noopener";
      }
    }
    const top = locked
      ? `<span class="project__lock">private project</span><span class="project__badge">not released</span>`
      : internal
      ? `<span class="project__lock">read here</span><span class="project__ext">${ICONS.ext}</span>`
      : `${ICONS.link}<span>${GH}/${p.n}</span><span class="project__ext">${ICONS.ext}</span>`;
    node.innerHTML = `
      <div class="project__top">${top}</div>
      <h3>${p.n}</h3>
      <p>${p.d}</p>
      <div class="project__tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>`;
    box.appendChild(node);
  });
}

function renderPosts() {
  const p = DATA.posts;
  const a = el("a", "post reveal");
  a.href = p.url;
  a.innerHTML = `
    <div class="post__part mono">re blog</div>
    <div class="post__main">
      <h3>${p.n}</h3>
      <p>${p.d}</p>
      <div class="post__tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    </div>
    <span class="post__arrow mono">&rarr;</span>`;
  $("#posts").appendChild(a);
}

function renderContacts() {
  const box = $("#contacts");
  box.innerHTML = "";
  const rows = [
    { ic: "github", k: "github", v: GH, u: DATA.github },
    { ic: "telegram", k: "telegram", v: "@" + DATA.telegramUser, u: DATA.telegram },
    { ic: "discord", k: "discord", v: DATA.discordUser, u: `https://discord.com/users/${DATA.discordUser}` },
    { ic: "phone", k: "phone", v: DATA.telefono, u: `tel:${DATA.telefono.replace(/\s/g, "")}` },
    { ic: "mail", k: "email", v: DATA.email, u: `mailto:${DATA.email}` },
  ].filter((r) => r.v);

  rows.forEach((r) => {
    const a = el("a", "contact reveal", `<div class="contact__i">${ICONS[r.ic]}</div><div class="contact__k">${r.k}</div><div class="contact__v">${r.v}</div>`);
    a.href = r.u;
    if (r.u.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    box.appendChild(a);
  });
}

function renderMarquee() {
  const line = DATA.marquee.map((m) => `<span>${m}</span>`).join("");
  $("#marquee").innerHTML = line + line;
}

function typeTerminal() {
  const out = $("#terminal");
  const lines = DATA.terminal;
  out.innerHTML = "";
  let li = 0, ci = 0, cur = null;

  (function step() {
    if (li >= lines.length) return;
    const line = lines[li];
    const isCmd = line.startsWith("$");

    if (ci === 0) {
      cur = el("span", isCmd ? "p" : null);
      out.appendChild(cur);
    }
    cur.textContent = line.slice(0, ci);
    ci += 1;

    if (ci > line.length) {
      if (li < lines.length - 1) cur.textContent += "\n";
      li += 1;
      ci = 0;
      cur = null;
      setTimeout(step, 260);
    } else {
      setTimeout(step, isCmd ? 32 : 9);
    }
  })();
}

function reveal() {
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12, rootMargin: "0px 0px -40px" }
  );
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
}

function fillBars() {
  const io = new IntersectionObserver(
    (es, o) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.w + "%";
          o.unobserve(e.target);
        }
      }),
    { threshold: 0.4 }
  );
  document.querySelectorAll(".skill__bar i").forEach((n) => io.observe(n));
}

function scrollFx() {
  const bar = $("#fxProgress");
  const nav = $("#nav");
  const glow = $("#fxGlow");
  const coarse = matchMedia("(pointer: coarse)").matches;
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
    nav.classList.toggle("is-stuck", scrollY > 10);
    const s = $("#projects .project");
    if (s && !coarse) {
      const r = s.getBoundingClientRect();
      glow.style.left = r.left + r.width / 2 + "px";
      glow.style.top = Math.max(0, r.top + r.height / 2) + "px";
      glow.style.opacity = r.top < innerHeight && r.bottom > 0 ? 0.9 : 0;
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function pointerFx() {
  if (matchMedia("(pointer: coarse)").matches) return;
  document.querySelectorAll(".project").forEach((p) => {
    p.addEventListener("pointermove", (e) => {
      const r = p.getBoundingClientRect();
      p.style.setProperty("--mx", e.clientX - r.left + "px");
      p.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });
}

function theme() {
  const btn = $("#themeToggle");
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.dataset.theme = saved;
  btn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  });
}

function menu() {
  const b = $("#burger"), n = $("#navLinks");
  b.addEventListener("click", () => n.classList.toggle("is-open"));
  n.addEventListener("click", (e) => {
    if (e.target.tagName === "A") n.classList.remove("is-open");
  });
}

function boot() {
  renderBind();
  renderSocials();
  renderFacts();
  renderAbout();
  renderSkills();
  renderTimeline();
  renderProjects();
  renderPosts();
  renderContacts();
  renderMarquee();
  typeTerminal();
  reveal();
  fillBars();
  scrollFx();
  pointerFx();
  theme();
  menu();
  $("#year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", boot);
