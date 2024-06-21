// Resizes sidebar depending on the media query, viewport height and other elements height

import tailwindTheme from "../../../../../../../tailwind.config.mjs"

const {
	theme: {
		extend: { screens },
	},
} = tailwindTheme

const closeClasses = ["-left-full"]
const openClasses = ["left-0"]

const applySidebarHeight = (mq: MediaQueryList) => {
	const $header = document.querySelector<HTMLElement>("#sidebar-with-header header")
	const $button = document.querySelector<HTMLElement>("#sidebar-with-header #toggle-sidebar-button")
	const $sidebar = document.querySelector<HTMLElement>("#sidebar-with-header #sidebar")
	const $sidebarGridArea = document.querySelector<HTMLElement>(
		"#sidebar-with-header [data-sidebar-grid-area]"
	)

	if ($button && $sidebar && $header && $sidebarGridArea) {
		if (mq.matches) {
			$sidebar.setAttribute(
				"style",
				`
					height: calc(100vh - ${$header.offsetHeight}px - ${$button.clientHeight}px); 
					max-height: calc(100vh - ${$header.offsetHeight}px - ${$button.clientHeight}px);
				`
			)
			$sidebarGridArea.setAttribute("style", `top: ${$header.offsetHeight}px;`)
		} else {
			$sidebar.setAttribute(
				"style",
				`
					height: calc(100vh - ${$header.offsetHeight}px); 
					max-height: calc(100vh - ${$header.offsetHeight}px);
				`
			)
			$sidebar.classList.remove(...openClasses)
			$sidebar.classList.add(...closeClasses)

			$button.setAttribute("aria-expanded", "false")
		}
	}
}

const mq = window.matchMedia(`(max-width: ${screens.sm})`)

applySidebarHeight(mq)

mq.addEventListener("change", () => {
	applySidebarHeight(mq)
})
