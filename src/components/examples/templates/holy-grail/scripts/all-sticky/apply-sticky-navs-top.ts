// Applies top style property to the navigation element(s) depending on the media query, viewport height and other elements height

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
			$mobileStickyContainer.style.top = `${$header.offsetHeight}px`
		} else {
			$stickyContainers.forEach((stickyContainer) => {
				stickyContainer.style.top = `${$header.offsetHeight}px`
			})
		}
	}
}

applyStickyNavsTop(mq)

mq.addEventListener("change", () => {
	applyStickyNavsTop(mq)
})
