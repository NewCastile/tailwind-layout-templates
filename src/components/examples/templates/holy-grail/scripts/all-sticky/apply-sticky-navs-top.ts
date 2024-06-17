import tailwindTheme from "../../../../../../../tailwind.config.mjs"

const {
	theme: {
		extend: { screens },
	},
} = tailwindTheme

const mq = window.matchMedia(`(max-width: ${screens.sm})`)

const applyStickyNavsTop = (md: MediaQueryList) => {
	const $heading = document.querySelector<HTMLElement>("[data-all-sticky-holy-grail] header h2")
	const $button = document.querySelector<HTMLElement>(
		"[data-all-sticky-holy-grail] #toggle-nav-button"
	)
	const $buttonContainer = $button?.parentElement

	const $stickyContainers = Array.from(
		document.querySelectorAll("[data-all-sticky-holy-grail] [data-sticky-container]")
	)

	const $mobileStickyContainer = document.querySelector<HTMLElement>(
		"[data-all-sticky-holy-grail] [data-mobile-sticky-container]"
	)

	if ($heading && $button && $mobileStickyContainer && $buttonContainer) {
		if (md.matches) {
			$mobileStickyContainer.setAttribute(
				"style",
				`top: calc(${$heading.offsetHeight}px + ${$buttonContainer.offsetHeight}px)`
			)
		} else {
			$stickyContainers.forEach((stickyContainer) => {
				stickyContainer.setAttribute(
					"style",
					`
						top: ${$heading.offsetHeight}px;
					`
				)
			})
		}
	}
}

applyStickyNavsTop(mq)

mq.addEventListener("change", () => {
	applyStickyNavsTop(mq)
})
