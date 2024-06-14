import tailwindConfig from "../../../../../../tailwind.config.mjs"

const {
	theme: {
		extend: { screens },
	},
} = tailwindConfig

const mq = window.matchMedia(`(max-width: ${screens.sm})`)

class CollapsibleSidebarLayout extends HTMLElement {
	constructor() {
		super()

		const animationClasses = ["transition-[width]", "duration-300", "ease-in-out"]

		const $button = this.querySelector<HTMLElement>("#collapsible-sidebar #toggle-sidebar-button")
		const $sidebar = this.querySelector("#collapsible-sidebar #sidebar")
		const $wrapper = this.querySelector("#collapsible-sidebar [data-sidebar-wrapper]")
		const $content = this.querySelector("#collapsible-sidebar [data-layout-content]")

		const collapsedSidebarWidth = $wrapper ? `${$wrapper.clientWidth}px` : "48px"

		if ($wrapper) {
			$wrapper.classList.add(...animationClasses)
		}

		const toggleNavWidth = (isExpanded: string) => {
			switch (isExpanded) {
				case "true":
					$wrapper!.setAttribute("style", `width: ${collapsedSidebarWidth}px;`)
					break
				case "false":
					if (mq.matches) {
						$wrapper!.setAttribute(
							"style",
							`min-width: 100%; width: calc(${$wrapper!.clientWidth}px + ${$content!.clientWidth}px);`
						)
					} else {
						$wrapper!.setAttribute("style", `width: ${$sidebar!.clientWidth + 100}px;`)
					}
					break
				default:
					break
			}
		}

		const toggleNav = (isExpanded: string) => {
			switch (isExpanded) {
				case "false":
					$button!.innerText = "<"
					toggleNavWidth(isExpanded)
					$button!.setAttribute("aria-expanded", "true")

					break
				case "true":
					$button!.innerText = ">"
					toggleNavWidth(isExpanded)
					$button!.setAttribute("aria-expanded", "false")

					break
				default:
					break
			}
		}

		if ($button && $sidebar && $wrapper && $content) {
			$button.addEventListener("click", () => {
				const isExpanded = $button.getAttribute("aria-expanded")
				if (isExpanded) {
					toggleNav(isExpanded)
				}
			})
		}
	}
}

customElements.define("astro-collapsible-sidebar-layout", CollapsibleSidebarLayout)
