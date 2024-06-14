const animationClasses = ["transition-[width]", "duration-300", "ease-in-out"]

const mobileClasses = ["w-full"].concat(["sm:w-[20rem]"], ...animationClasses)

const tabletClasses = ["w-full"].concat(["sm:w-[30rem]"], ...animationClasses)

const desktopClasses = ["w-full"].concat(...animationClasses)

const selectedClasses = ["underline", "underline-offset-8", "decoration-4", "decoration-blue-500"]

const breakpoints = [
	{ id: "MOBILE", classes: mobileClasses },
	{ id: "TABLET", classes: tabletClasses },
	{ id: "DESKTOP", classes: desktopClasses },
]

class ExamplePreview extends HTMLElement {
	constructor() {
		super()

		// Read the message from the data attribute.
		const iframe = this.querySelector("iframe")
		const wrapper = this.querySelector("[data-iframe-wrapper]")
		const menu = this.querySelector("[data-breakpoint-menu]")
		const currentBreakpoint = menu ? menu.getAttribute("data-current-breakpoint") : null

		const buttons = this.querySelectorAll("[data-select-breakpoint-button]")

		const updateMenu = ({
			menu,
			selectedBreakpoint,
		}: {
			menu: Element
			selectedBreakpoint: string
		}) => {
			menu.setAttribute("data-current-breakpoint", selectedBreakpoint)
			const buttons = menu.querySelectorAll("button")
			buttons.forEach((button) => {
				const buttonBreakpoint = button.getAttribute("data-breakpoint-option-value")

				if (buttonBreakpoint) {
					const isSelectedBreakpoint = buttonBreakpoint === selectedBreakpoint

					if (isSelectedBreakpoint) {
						button.classList.add(...selectedClasses)
					} else {
						button.classList.remove(...selectedClasses)
					}
				}
			})
		}

		const toggleBreakpoint = ({
			menu,
			wrapper,
			selectedBreakpoint,
		}: {
			menu: Element
			wrapper: Element
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

		if (menu && wrapper && currentBreakpoint) {
			toggleBreakpoint({
				menu,
				wrapper,
				selectedBreakpoint: currentBreakpoint,
			})
		}

		if (menu && wrapper && iframe) {
			buttons.forEach((button) => {
				button.addEventListener("click", (event) => {
					event.preventDefault()

					const breakpoint = button.getAttribute("data-breakpoint-option-value")

					if (breakpoint) {
						toggleBreakpoint({
							menu,
							wrapper,
							selectedBreakpoint: breakpoint,
						})
					}
				})
			})
		}
	}
}

customElements.define("astro-example-preview", ExamplePreview)
