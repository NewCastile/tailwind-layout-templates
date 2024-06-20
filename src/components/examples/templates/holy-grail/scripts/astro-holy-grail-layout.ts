class HolyGrail extends HTMLElement {
	constructor() {
		super()
		const $header = this.querySelector<HTMLElement>("header")
		const $button = this.querySelector<HTMLElement>("#toggle-nav-button")
		const $buttonContainer = $button?.parentElement
		const $nav = this.querySelector<HTMLElement>("#main-navigation")

		const toggleNav = (isExpanded: string) => {
			const remainingSpace = `calc(100vh - ${$buttonContainer!.offsetHeight}px - ${$header!.offsetHeight}px)`

			if (isExpanded === "false") {
				$nav!.setAttribute(
					"style",
					`
						height: ${remainingSpace}; 
						max-height: ${remainingSpace};
						transition: height 0.2s ease-in-out;
					`
				)
				$button!.setAttribute("aria-expanded", "true")
			} else {
				$nav!.setAttribute(
					"style",
					`
						height: 0px;
						transition: height 0.2s ease-in-out;
					`
				)
				$button!.setAttribute("aria-expanded", "false")
			}
		}

		if ($button && $buttonContainer && $nav) {
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
