const menuButton = document.querySelector(".menu-toggle");
const sidebar = document.querySelector("#sidebar");
const backdrop = document.querySelector(".sidebar-backdrop");
const navigationTabs = [...document.querySelectorAll('[role="tab"][data-tab-target]')];
const tabPanels = [...document.querySelectorAll("[data-tab-panel]")];

function closeMenu() {
	menuButton.setAttribute("aria-expanded", "false");
	menuButton.setAttribute("aria-label", "Abrir menu");
	sidebar.classList.remove("is-open");
	backdrop.classList.remove("is-open");
}

function activateTab(tabId, moveFocus = false) {
	const selectedTab = navigationTabs.find((tab) => tab.dataset.tabTarget === tabId);

	if (!selectedTab) {
		return;
	}

	navigationTabs.forEach((tab) => {
		const isSelected = tab === selectedTab;
		tab.classList.toggle("is-active", isSelected);
		tab.setAttribute("aria-selected", String(isSelected));
		tab.tabIndex = isSelected ? 0 : -1;
	});

	tabPanels.forEach((panel) => {
		panel.hidden = panel.dataset.tabPanel !== tabId;
	});

	if (moveFocus) {
		selectedTab.focus();
	}

	closeMenu();
}

menuButton.addEventListener("click", () => {
	const isOpen = menuButton.getAttribute("aria-expanded") === "true";
	menuButton.setAttribute("aria-expanded", String(!isOpen));
	menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
	sidebar.classList.toggle("is-open", !isOpen);
	backdrop.classList.toggle("is-open", !isOpen);
});

backdrop.addEventListener("click", closeMenu);

navigationTabs.forEach((tab, index) => {
	tab.addEventListener("click", () => {
		activateTab(tab.dataset.tabTarget);
	});

	tab.addEventListener("keydown", (event) => {
		let nextIndex = index;

		if (event.key === "ArrowDown" || event.key === "ArrowRight") {
			nextIndex = (index + 1) % navigationTabs.length;
		} else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
			nextIndex = (index - 1 + navigationTabs.length) % navigationTabs.length;
		} else if (event.key === "Home") {
			nextIndex = 0;
		} else if (event.key === "End") {
			nextIndex = navigationTabs.length - 1;
		} else {
			return;
		}

		event.preventDefault();
		activateTab(navigationTabs[nextIndex].dataset.tabTarget, true);
	});
});

document.querySelector(".brand").addEventListener("click", (event) => {
	event.preventDefault();
	activateTab("inicio");
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closeMenu();
	}
});
