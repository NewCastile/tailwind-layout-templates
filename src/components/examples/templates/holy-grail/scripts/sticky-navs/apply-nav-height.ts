import tailwindTheme from "../../../../../../../tailwind.config.mjs"

const {
	theme: {
		extend: { screens },
	},
} = tailwindTheme

const mq = window.matchMedia(`(max-width: ${screens.sm})`)

const applyNavHeight = (md: MediaQueryList) => {
	const $nav = document.querySelector<HTMLElement>("[data-sticky-navs-holy-grail] #main-navigation")
	const $aside = document.querySelector<HTMLElement>("[data-sticky-navs-holy-grail] aside nav")
	const $header = document.querySelector<HTMLElement>("[data-sticky-navs-holy-grail] header")
	const $toggleNavButton = document.querySelector<HTMLElement>(
		"[data-sticky-navs-holy-grail] #toggle-nav-button"
	)

	const isExpanded = $toggleNavButton?.getAttribute("aria-expanded")

	if ($nav && $header && $toggleNavButton && $aside && isExpanded) {
		const remainingHeight = `calc(100vh - ${$header.offsetHeight}px)`
		if (md.matches) {
			$nav.setAttribute("style", "")
			$aside.setAttribute("style", "")
		} else {
			$nav.setAttribute(
				"style",
				`
					height: ${remainingHeight}; 
					max-height:${remainingHeight};
				`
			)
			$aside.setAttribute(
				"style",
				`
					height: ${remainingHeight}; 
					max-height:${remainingHeight};
				`
			)

			$toggleNavButton.setAttribute("aria-expanded", "false")
		}
	}
}

applyNavHeight(mq)

mq.addEventListener("change", () => {
	applyNavHeight(mq)
})
