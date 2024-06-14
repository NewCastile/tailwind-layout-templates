class Disclosure extends HTMLElement {
	constructor() {
		super()
		const $icon = this.querySelector("svg")
		const $button = this.querySelector("button")
		const $section = this.querySelector("div[aria-hidden]")

		const toggleDisclosure = (isExpanded: string) => {
			$section!.classList.toggle("block", isExpanded === "false")
			$section!.classList.toggle("hidden", isExpanded === "true")

			$icon!.classList.toggle("rotate-180", isExpanded === "false")
			$icon!.classList.toggle("rotate-0", isExpanded === "true")

			if (isExpanded === "true") {
				$button!.setAttribute("aria-expanded", "false")
				$section!.setAttribute("aria-hidden", "true")
			} else {
				$button!.setAttribute("aria-expanded", "true")
				$section!.setAttribute("aria-hidden", "false")
			}
		}

		if ($button && $section && $icon) {
			$button.addEventListener("click", () => {
				const isExpanded = $button.getAttribute("aria-expanded")
				if (isExpanded) {
					toggleDisclosure(isExpanded)
				}
			})
		}
	}
}

customElements.define("astro-disclosure", Disclosure)
