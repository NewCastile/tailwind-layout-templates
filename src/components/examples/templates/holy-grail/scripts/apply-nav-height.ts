import tailwindTheme from "../../../../../../tailwind.config.mjs"

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
			if (isExpanded === "true") {
				$nav.setAttribute(
					"style",
					`
						height: calc(100vh - ${$header.offsetHeight}px);
						max-height: calc(100vh - ${$header.offsetHeight}px)
					`
				)
			} else {
				$nav.setAttribute("style", "height: 0px;")
				$toggleNavButton.setAttribute("aria-expanded", "false")
			}
		} else {
			$nav.setAttribute("style", "height: auto;")
			$toggleNavButton.setAttribute("aria-expanded", "false")
		}
	}
}

applyNavHeight(mq)

mq.addEventListener("change", () => {
	applyNavHeight(mq)
})
