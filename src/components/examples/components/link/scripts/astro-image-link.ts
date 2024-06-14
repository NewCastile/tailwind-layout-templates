class ImageLink extends HTMLImageElement {
	constructor() {
		super()

		const href = this.getAttribute("data-href")
		console.log(href)
		const changeLocation = (event: MouseEvent | KeyboardEvent, href: string) => {
			if (event instanceof KeyboardEvent && event.key !== "Enter") {
				return
			}

			window.location.href = href

			event.preventDefault()
			event.stopPropagation()
		}

		if (href) {
			this.addEventListener("click", (e) => changeLocation(e, href))
			this.addEventListener("keydown", (e) => changeLocation(e, href))
		}
	}
}

customElements.define("astro-image-link", ImageLink, { extends: "img" })
