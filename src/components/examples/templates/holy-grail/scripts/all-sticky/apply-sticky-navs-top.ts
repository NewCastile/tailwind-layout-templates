import tailwindTheme from "../../../../../../../tailwind.config.mjs"

const {
	theme: {
		extend: { screens },
	},
} = tailwindTheme

const mq = window.matchMedia(`(max-width: ${screens.sm})`)

const applyStickyNavsTop = (md: MediaQueryList) => {
	const $header = document.querySelector<HTMLElement>("[data-all-sticky-holy-grail] header")
	const $stickyContainers = Array.from(
		document.querySelectorAll<HTMLElement>("[data-all-sticky-holy-grail] [data-sticky-container]")
	)

	const $mobileStickyContainer = document.querySelector<HTMLElement>(
		"[data-all-sticky-holy-grail] [data-mobile-sticky-container]"
	)

	if ($header && $mobileStickyContainer) {
		if (md.matches) {
			$mobileStickyContainer.setAttribute("style", `top: ${$header.offsetHeight}px;`)
		} else {
			$stickyContainers.forEach((stickyContainer) => {
				stickyContainer.setAttribute("style", `top: ${$header.offsetHeight}px;`)
			})
		}
	}
}

applyStickyNavsTop(mq)

mq.addEventListener("change", () => {
	applyStickyNavsTop(mq)
})
