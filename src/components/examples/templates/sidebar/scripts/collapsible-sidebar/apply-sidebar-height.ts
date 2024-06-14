import tailwindTheme from "../../../../../../../tailwind.config.mjs"

const {
	theme: {
		extend: { screens },
	},
} = tailwindTheme

const mq = window.matchMedia(`(max-width: ${screens.sm})`)

const applySidebarHeight = () => {
	const $button = document.querySelector<HTMLElement>("#collapsible-sidebar #toggle-sidebar-button")
	const $wrapper = document.querySelector("#collapsible-sidebar [data-sidebar-wrapper]")
	const collapsedSidebarWidth = $wrapper ? `${$wrapper.clientWidth}px` : "48px"

	const toggleNav = (isExpanded: string) => {
		if (isExpanded === "true") {
			$button!.innerText = ">"
			$wrapper!.setAttribute("style", `width: ${collapsedSidebarWidth}px;`)
			$button!.setAttribute("aria-expanded", "false")
		}
	}

	if ($button && $wrapper) {
		const isExpanded = $button.getAttribute("aria-expanded")
		if (isExpanded) {
			toggleNav(isExpanded)
		}
	}
}

applySidebarHeight()

mq.addEventListener("change", () => {
	applySidebarHeight()
})
