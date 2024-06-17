import tailwindTheme from "../../../../../../../tailwind.config.mjs"

const {
	theme: {
		extend: { screens },
	},
} = tailwindTheme

const mq = window.matchMedia(`(max-width: ${screens.sm})`)

const applyNavHeight = (md: MediaQueryList) => {
	const $nav = document.querySelector<HTMLElement>("[data-all-sticky-holy-grail] #main-navigation")
	const $heading = document.querySelector<HTMLElement>("[data-all-sticky-holy-grail] header h2")
	const $button = document.querySelector<HTMLElement>(
		"[data-all-sticky-holy-grail] #toggle-nav-button"
	)
	const $toggleNavButtonContainer = document.querySelector<HTMLElement>(
		"[data-all-sticky-holy-grail] #toggle-nav-button"
	)?.parentElement

	const isExpanded = $button?.getAttribute("aria-expanded")

	if ($nav && $heading && $button && $toggleNavButtonContainer && isExpanded) {
		const remainingHeight = `calc(100vh - ${$heading.clientHeight}px - ${$toggleNavButtonContainer.clientHeight})`
		if (md.matches) {
			if (isExpanded === "true") {
				$nav.setAttribute(
					"style",
					`
						height: ${remainingHeight};
						max-height: ${remainingHeight};
					`
				)
			} else {
				$nav.setAttribute("style", "height: 0px;")
				$button.setAttribute("aria-expanded", "false")
			}
		} else {
			$nav.setAttribute("style", "height: auto;")
			$button.setAttribute("aria-expanded", "false")
		}
	}
}

applyNavHeight(mq)

mq.addEventListener("change", () => {
	applyNavHeight(mq)
})
