const isOpenClass = "modal-is-open";
const openingClass = "modal-is-opening";
const closingClass = "modal-is-closing";
const scrollbarWidthCssVar = "--pico-scrollbar-width";
const animationDuration = 400; // ms

// Toggle modal
// (toggle vol dir canviar d'estat, en aquest cas, obrir o tancar el modal)
function toggleModal(event) {
	event.preventDefault();
	const modal = document.getElementById(event.currentTarget.dataset.target);
	if (!modal) return;
	modal && (modal.open ? closeModal(modal) : openModal(modal));
} // definir la funció toggleModal a l'objecte window

// Open modal
function openModal(modal) {
	const { documentElement: html } = document;
	const scrollbarWidth = getScrollbarWidth();
	if (scrollbarWidth) {
		html.style.setProperty(scrollbarWidthCssVar, `${scrollbarWidth}px`);
	}
	html.classList.add(isOpenClass, openingClass);
	setTimeout(() => {
		visibleModal = modal;
		html.classList.remove(openingClass);
	}, animationDuration);
	modal.showModal();
}

// Close modal
function closeModal(modal) {
	visibleModal = null;
	const { documentElement: html } = document;
	html.classList.add(closingClass);
	setTimeout(() => {
		html.classList.remove(closingClass, isOpenClass);
		html.style.removeProperty(scrollbarWidthCssVar);
		modal.close();
	}, animationDuration);
}

// Get scrollbar width
function getScrollbarWidth() {
	const scrollbarWidth =
		window.innerWidth - document.documentElement.clientWidth;
	return scrollbarWidth;
}
