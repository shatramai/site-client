// Année auto
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Reveal au scroll (fade + slide très léger)
const items = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

items.forEach(el => io.observe(el));

// Active nav (si tu oublies aria-current)
const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav a").forEach(a => {
  const href = a.getAttribute("href");
  if (href === path) a.setAttribute("aria-current", "page");
});
