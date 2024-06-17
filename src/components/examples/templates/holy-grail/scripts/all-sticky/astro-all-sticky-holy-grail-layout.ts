class AllStickyHolyGrail extends HTMLElement {
	constructor() {
		super()
		const $nav = document.querySelector<HTMLElement>(
			"[data-all-sticky-holy-grail] #main-navigation"
		)
		const $heading = document.querySelector<HTMLElement>("[data-all-sticky-holy-grail] header h2")
		const $button = document.querySelector<HTMLElement>(
			"[data-all-sticky-holy-grail] #toggle-nav-button"
		)
		const $buttonContainer = $button?.parentElement

		const toggleNav = (isExpanded: string) => {
			const headerHeight = $heading!.clientHeight
			const buttonContainerHeight = $buttonContainer!.clientHeight
			const remainingSpace = `calc(100vh - ${headerHeight}px - ${buttonContainerHeight}px)`

			if (isExpanded === "false") {
				$nav!.setAttribute("style", `height: ${remainingSpace}`)
				$button!.setAttribute("aria-expanded", "true")
			} else {
				$nav!.setAttribute("style", `height: 0px`)
				$button!.setAttribute("aria-expanded", "false")
			}
		}

		if ($heading && $button && $buttonContainer && $nav) {
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

customElements.define("astro-all-sticky-holy-grail-layout", AllStickyHolyGrail)
