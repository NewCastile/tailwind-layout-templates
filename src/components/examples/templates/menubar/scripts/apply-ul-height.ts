import tailwindTheme from "../../../../../../tailwind.config.mjs"

const {
	theme: {
		extend: { screens },
	},
} = tailwindTheme

const applyUListHeight = (md: MediaQueryList) => {
	const $nav = document.querySelector<HTMLElement>("#menubar-header #main-navigation")
	const $ul = document.querySelector<HTMLElement>("#menubar-header #main-navigation ul")
	const $header = document.querySelector<HTMLElement>("#menubar-header header")
	const $toggleNavButton = document.querySelector<HTMLElement>("#menubar-header button")

	if ($nav && $ul && $header && $toggleNavButton) {
		const isExpanded = $toggleNavButton.getAttribute("aria-expanded")
		if (md.matches) {
			if (isExpanded === "true") {
				$nav!.setAttribute(
					"style",
					`
						height: calc(100vh - ${$header.offsetHeight}px); 
						max-height: calc(100vh - ${$header.offsetHeight}px);
					`
				)
				$ul!.setAttribute(
					"style",
					`
						height: calc(100vh - ${$header.offsetHeight}px); 
						max-height: calc(100vh - ${$header.offsetHeight}px);
					`
				)
			} else {
				$nav!.setAttribute("style", "height: 0px;")
				$ul!.setAttribute("style", "height: 0px;")

				$toggleNavButton.setAttribute("aria-expanded", "false")
			}
		} else {
			$nav!.setAttribute("style", "height: auto;")
			$ul!.setAttribute("style", "height: auto;")

			$toggleNavButton.setAttribute("aria-expanded", "false")
		}
	}
}

const mq = window.matchMedia(`(max-width: ${screens.md})`)

applyUListHeight(mq)

mq.addEventListener("change", () => {
	applyUListHeight(mq)
})
