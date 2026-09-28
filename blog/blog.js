const saved = localStorage.getItem("theme");
if (saved) document.documentElement.dataset.theme = saved;

const bar = document.createElement("header");
bar.className = "topbar";
bar.innerHTML = `
  <div class="topbar__inner">
    <a class="topbar__brand" href="../index.html"><span class="topbar__dot"></span>torete</a>
    <span class="topbar__spacer"></span>
    <button class="topbar__btn" id="themeToggle" type="button">◐</button>
    <a class="topbar__back" href="../index.html">&larr; back to portfolio</a>
  </div>`;
document.body.prepend(bar);

bar.querySelector("#themeToggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
});

const nav = document.querySelector(".series ol");
const dividers = [...document.querySelectorAll(".partdiv")];
if (nav && dividers.length) {
  const items = [...nav.querySelectorAll("li")];
  const io = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        const i = dividers.indexOf(e.target);
        items.forEach((li, j) => li.classList.toggle("active", i === j));
      });
    },
    { rootMargin: "-80px 0px -70% 0px" }
  );
  dividers.forEach((d) => io.observe(d));
}
