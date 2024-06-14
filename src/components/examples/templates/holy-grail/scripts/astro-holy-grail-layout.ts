class HolyGrail extends HTMLElement {
	constructor() {
		super()
		const $header = this.querySelector("header")
		const $button = this.querySelector<HTMLElement>("#toggle-nav-button")
		const $nav = this.querySelector<HTMLElement>("#main-navigation")

		const toggleNav = (isExpanded: string) => {
			const headerHeight = $header!.clientHeight
			const buttonHeight = $button!.clientHeight
			const remainingSpace = `calc(100vh - ${headerHeight}px - ${buttonHeight}px)`

			if (isExpanded === "false") {
				$nav!.setAttribute("style", `height: ${remainingSpace}`)
				$button!.setAttribute("aria-expanded", "true")
			} else {
				$nav!.setAttribute("style", `height: 0px`)
				$button!.setAttribute("aria-expanded", "false")
			}
		}

		if ($header && $button && $nav) {
			$button.addEventListener("click", (event) => {
				event.preventDefault()

				const isExpanded = $button.getAttribute("aria-expanded")
				if (isExpanded) {
					toggleNav(isExpanded)
				}
			})
		}
	}
}

customElements.define("astro-holy-grail-layout", HolyGrail)
