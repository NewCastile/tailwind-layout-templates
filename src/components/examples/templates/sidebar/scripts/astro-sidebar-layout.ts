class Sidebar extends HTMLElement {
	constructor() {
		super()
		const closeClasses = ["-left-full"]
		const openClasses = ["left-0"]

		const $button = this.querySelector("#toggle-sidebar-button")
		const $sidebar = this.querySelector("#sidebar")

		const toggleNav = (isExpanded: string) => {
			if ($button && $sidebar) {
				switch (isExpanded) {
					case "false":
						$sidebar.classList.remove(...closeClasses)
						$sidebar.classList.add(...openClasses)
						$button.setAttribute("aria-expanded", "true")
						break
					case "true":
						$sidebar.classList.remove(...openClasses)
						$sidebar.classList.add(...closeClasses)
						$button.setAttribute("aria-expanded", "false")
						break
					default:
						break
				}
			}
		}

		if ($button && $sidebar) {
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
customElements.define("astro-sidebar-layout", Sidebar)
