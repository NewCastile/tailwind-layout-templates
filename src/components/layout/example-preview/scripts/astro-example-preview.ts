const animationClasses = ["transition-[width]", "duration-300", "ease-in-out"]

const mobileClasses = ["w-full"].concat(["sm:w-[20rem]"], ...animationClasses)

const tabletClasses = ["w-full"].concat(["sm:w-[30rem]"], ...animationClasses)

const desktopClasses = ["w-full"].concat(...animationClasses)

const selectedClasses = ["border-white", "bg-sky-950", "text-slate-200"]

const breakpoints = [
	{ id: "MOBILE", classes: mobileClasses },
	{ id: "TABLET", classes: tabletClasses },
	{ id: "DESKTOP", classes: desktopClasses },
]

const isTailwindBgColorClass = (clss: string) => {
	const bgColorPrefix = clss.startsWith("bg")
	const hyphenSplittedClss = clss.split("-")
	const bgColorSufix = hyphenSplittedClss.map((str) => Number(str)).filter((num) => num)

	if (bgColorPrefix && bgColorSufix) {
		return true
	} else {
		return false
	}
}

class ExamplePreview extends HTMLElement {
	constructor() {
		super()

		// Read the message from the data attribute.
		const $iframe = this.querySelector<HTMLElement>("iframe")
		const $wrapper = this.querySelector<HTMLElement>("[data-iframe-wrapper]")
		const $menu = this.querySelector<HTMLElement>("[data-breakpoint-menu]")
		const currentBreakpoint = $menu ? $menu.getAttribute("data-current-breakpoint") : null

		const $breakpointButtons = this.querySelectorAll("[data-select-breakpoint-button]")

		const breakpointButtonsInitialBgColorClasses = Array.from($breakpointButtons).map((button) => {
			const buttonClasses = Array.from(button.classList.values())

			const [currentBgClass] = buttonClasses.filter((clss) => {
				return isTailwindBgColorClass(clss)
			})

			return currentBgClass
		})

		const updateMenu = ({
			menu,
			selectedBreakpoint,
		}: {
			menu: HTMLElement
			selectedBreakpoint: string
		}) => {
			menu.setAttribute("data-current-breakpoint", selectedBreakpoint)

			$breakpointButtons.forEach((button, buttonIdx) => {
				const buttonBreakpoint = button.getAttribute("data-breakpoint-option-value")
				const buttonInitialBgClass = breakpointButtonsInitialBgColorClasses[buttonIdx]
				if (buttonBreakpoint) {
					const isSelectedBreakpoint = buttonBreakpoint === selectedBreakpoint

					if (isSelectedBreakpoint) {
						button.classList.remove(buttonInitialBgClass)
						button.classList.add(...selectedClasses)
					} else {
						button.classList.remove(...selectedClasses)
						button.classList.add(buttonInitialBgClass)
					}
				}
			})
		}

		const toggleBreakpoint = ({
			menu,
			wrapper,
			selectedBreakpoint,
		}: {
			menu: HTMLElement
			wrapper: HTMLElement
			selectedBreakpoint: string
		}) => {
			const [newBreakpoint] = breakpoints.filter(
				(breakpoint) => breakpoint.id === selectedBreakpoint
			)

			const unselectedBreakpointsClasses = breakpoints
				.filter((breakpoint) => breakpoint.id !== selectedBreakpoint)
				.map((breakpoint) => breakpoint.classes)

			if (newBreakpoint) {
				const { classes: newBreakpointClasses } = newBreakpoint

				unselectedBreakpointsClasses.forEach((classes) => {
					wrapper.classList.remove(...classes)
				})

				wrapper.classList.add(...newBreakpointClasses)

				updateMenu({ menu, selectedBreakpoint })
			}
		}

		if ($menu && $wrapper && currentBreakpoint) {
			toggleBreakpoint({
				menu: $menu,
				wrapper: $wrapper,
				selectedBreakpoint: currentBreakpoint,
			})
		}

		if ($menu && $wrapper && $iframe) {
			$breakpointButtons.forEach((button) => {
				button.addEventListener("click", (event) => {
					event.preventDefault()

					const breakpoint = button.getAttribute("data-breakpoint-option-value")

					if (breakpoint) {
						toggleBreakpoint({
							menu: $menu,
							wrapper: $wrapper,
							selectedBreakpoint: breakpoint,
						})
					}
				})
			})
		}
	}
}

customElements.define("astro-example-preview", ExamplePreview)
