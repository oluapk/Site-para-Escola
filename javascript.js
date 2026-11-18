const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const navLinks = [...document.querySelectorAll(".main-nav a")];
const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    mainNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    mainNav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
});

navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

const observer = new IntersectionObserver((entries) => {
    const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) {
        return;
    }

    navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
}, { rootMargin: "-25% 0px -65% 0px", threshold: [0, 0.2, 0.5] });

sections.forEach((section) => observer.observe(section));
document.querySelector("#current-year").textContent = new Date().getFullYear();
