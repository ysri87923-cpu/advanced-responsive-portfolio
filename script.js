const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Light / dark theme. The selected theme is saved in the browser.
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") {
  root.dataset.theme = "light";
  themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  const isLight = root.dataset.theme !== "light";
  if (isLight) {
    root.dataset.theme = "light";
    localStorage.setItem("portfolio-theme", "light");
    themeToggle.textContent = "☀";
  } else {
    delete root.dataset.theme;
    localStorage.setItem("portfolio-theme", "dark");
    themeToggle.textContent = "☾";
  }
});

// Current year in footer
document.querySelector("#year").textContent = new Date().getFullYear();
