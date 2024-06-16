import tailwindTheme from "../../../../../../../tailwind.config.mjs"

const {
	theme: {
		extend: { screens },
	},
} = tailwindTheme

const mq = window.matchMedia(`(max-width: ${screens.sm})`)

const animationClasses = ["transition-[left]", "duration-200", "ease-in-out"]
const closeClasses = ["-left-full"].concat(animationClasses)
const openClasses = ["left-0"].concat(animationClasses)

const applySidebarHeight = (mq: MediaQueryList) => {
	const $sidebarContainter = document.querySelector<HTMLElement>(
		"#default-sidebar #sidebar-container"
	)
	const $button = document.querySelector("#default-sidebar #toggle-sidebar-button")
	const $sidebar = document.querySelector("#default-sidebar #sidebar")

	if ($sidebarContainter && $button && $sidebar) {
		if (mq.matches) {
			$sidebar.setAttribute(
				"style",
				`
						height: calc(100vh - ${$sidebarContainter.clientHeight}px); 
						max-height: calc(100vh - ${$sidebarContainter.clientHeight}px)
					`
			)
		} else {
			$sidebar.setAttribute("style", "height: auto; max-height: auto")
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
