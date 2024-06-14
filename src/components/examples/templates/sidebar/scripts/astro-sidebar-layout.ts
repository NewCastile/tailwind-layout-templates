class Sidebar extends HTMLElement {
	constructor() {
		super()
		const animationClasses = ["transition-[left]", "duration-200", "ease-in-out"]
		const closeClasses = ["-left-full"].concat(animationClasses)
		const openClasses = ["left-0"].concat(animationClasses)

		const $button = this.querySelector("#toggle-sidebar-button")
		const $sidebar = this.querySelector("#sidebar")

		const toggleNav = (isExpanded: string) => {
			if ($button && $sidebar) {
				switch (isExpanded) {
					case "false":
						$button.setAttribute("aria-expanded", "true")
						$sidebar.classList.remove(...closeClasses)
						$sidebar.classList.add(...openClasses)
						break
					case "true":
						$button.setAttribute("aria-expanded", "false")
						$sidebar.classList.remove(...openClasses)
						$sidebar.classList.add(...closeClasses)
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
