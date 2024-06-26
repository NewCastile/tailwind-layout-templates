// Resizes sidebar depending on the media query, viewport height and other elements height

import tailwindTheme from "../../../../../../../tailwind.config.mjs"

const {
	theme: {
		extend: { screens },
	},
} = tailwindTheme

const mq = window.matchMedia(`(max-width: ${screens.md})`)

const animationClasses = ["transition-[left]", "duration-200", "ease-in-out"]
const closeClasses = ["-left-full"].concat(animationClasses)
const openClasses = ["left-0"].concat(animationClasses)

const applySidebarHeight = (mq: MediaQueryList) => {
	const $button = document.querySelector<HTMLElement>("#sidebar-stacked #toggle-sidebar-button")
	const $sidebar = document.querySelector<HTMLElement>("#sidebar-stacked #sidebar")

	if ($button && $sidebar) {
		if (mq.matches) {
			$sidebar.setAttribute(
				"style",
				`
					height: calc(100vh - ${$button.clientHeight}px); 
					max-height: calc(100vh - ${$button.clientHeight}px);
				`
			)
		} else {
			$sidebar.setAttribute("style", "height: auto; max-height: auto;")
			$sidebar.classList.remove(...openClasses)
			$sidebar.classList.add(...closeClasses)

			$button.setAttribute("aria-expanded", "false")
		}
	}
}

applySidebarHeight(mq)

mq.addEventListener("change", () => {
	applySidebarHeight(mq)
})
