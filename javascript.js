const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
	const isOpen = menuButton.getAttribute("aria-expanded") === "true";
	menuButton.setAttribute("aria-expanded", String(!isOpen));
	menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
	navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
	if (event.target.closest("a")) {
		menuButton.setAttribute("aria-expanded", "false");
		menuButton.setAttribute("aria-label", "Abrir menu");
		navigation.classList.remove("is-open");
	}
});

document.querySelector("#year").textContent = new Date().getFullYear();
