import tailwindTheme from "../../../../../../../tailwind.config.mjs"

const {
	theme: {
		extend: { screens },
	},
} = tailwindTheme

const mq = window.matchMedia(`(max-width: ${screens.sm})`)

const applyNavHeight = (md: MediaQueryList) => {
	const $nav = document.querySelector<HTMLElement>("[data-all-sticky-holy-grail] #main-navigation")
	const $aside = document.querySelector<HTMLElement>("[data-all-sticky-holy-grail] aside nav")
	const $header = document.querySelector<HTMLElement>("[data-all-sticky-holy-grail] header")
	const $button = document.querySelector<HTMLElement>(
		"[data-all-sticky-holy-grail] #toggle-nav-button"
	)

	const isExpanded = $button?.getAttribute("aria-expanded")

	if ($header && $nav && $aside && $button && isExpanded) {
		const remainingHeight = `calc(100vh - ${$header.offsetHeight}px)`
		if (md.matches) {
			if (isExpanded === "false") {
				$nav.style.transition = ""
				$nav.style.height = ""
				$nav.style.maxHeight = ""

				$aside.style.height = ""
				$aside.style.maxHeight = ""

				$button.setAttribute("aria-expanded", "false")
			}
		} else {
			$nav.style.transition = ""
			$nav.style.height = `${remainingHeight}`
			$nav.style.maxHeight = `${remainingHeight}`

			$aside.style.height = `${remainingHeight}`
			$aside.style.maxHeight = `${remainingHeight}`

			$button.setAttribute("aria-expanded", "false")
		}
	}
}

applyNavHeight(mq)

mq.addEventListener("change", () => {
	applyNavHeight(mq)
})
