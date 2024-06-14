import tailwindTheme from "../../../../../../../tailwind.config.mjs"

const {
	theme: {
		extend: { screens },
	},
} = tailwindTheme

const animationClasses = ["transition-[left]", "duration-200", "ease-in-out"]
const closeClasses = ["-left-full"].concat(animationClasses)
const openClasses = ["left-0"].concat(animationClasses)

const applySidebarHeight = (mq: MediaQueryList) => {
	const $header = document.querySelector<HTMLElement>("#sidebar-with-header header")
	const $button = document.querySelector("#sidebar-with-header #toggle-sidebar-button")
	const $sidebar = document.querySelector("#sidebar-with-header #sidebar")
	const $sidebarContainer = document.querySelector<HTMLElement>("[data-sidebar-bg-container]")

	if ($button && $sidebar && $header && $sidebarContainer) {
		if (mq.matches) {
			$sidebar.setAttribute(
				"style",
				`
						height: calc(100vh - ${$header.offsetHeight}px - ${$button.clientHeight}px); 
						max-height: calc(100vh - ${$header.offsetHeight}px - ${$button.clientHeight}px)
					`
			)
			$sidebarContainer.setAttribute("style", `top: ${$header.offsetHeight}px;`)
		} else {
			$sidebar.setAttribute("style", "height: auto; max-height: auto")
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
