// Resizes the navigation element depending on the media query, viewport height and other elements height

import tailwindTheme from "../../../../../../../tailwind.config.mjs"

const {
	theme: {
		extend: { screens },
	},
} = tailwindTheme

const mq = window.matchMedia(`(max-width: ${screens.sm})`)

const applyNavHeight = (md: MediaQueryList) => {
	const $nav = document.querySelector<HTMLElement>("#holy-grail-layout #main-navigation")
	const $header = document.querySelector<HTMLElement>("#holy-grail-layout header")
	const $toggleNavButton = document.querySelector<HTMLElement>(
		"#holy-grail-layout #toggle-nav-button"
	)

	const isExpanded = $toggleNavButton?.getAttribute("aria-expanded")

	if ($nav && $header && $toggleNavButton && isExpanded) {
		if (md.matches) {
			if (isExpanded === "false") {
				$nav.setAttribute("style", "")
				return
			}
		}
		if (!md.matches) {
			$nav.setAttribute("style", "height: auto;")
			$toggleNavButton.setAttribute("aria-expanded", "false")
		}
	}
}

applyNavHeight(mq)

mq.addEventListener("change", () => {
	applyNavHeight(mq)
})
