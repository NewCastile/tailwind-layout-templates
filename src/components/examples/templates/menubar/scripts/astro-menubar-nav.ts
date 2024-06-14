class MenubarNav extends HTMLUListElement {
	constructor() {
		super()

		const $menuButtons = Array.from(this.querySelectorAll<HTMLElement>(".menu-button"))

		const controlFocusByKey = (
			keyboardEvent: KeyboardEvent,
			menuTopLevelElements: HTMLElement[],
			currentIndex: number
		) => {
			switch (keyboardEvent.key) {
				case "ArrowLeft":
					keyboardEvent.preventDefault()
					if (currentIndex > -1) {
						var prevIndex = Math.max(0, currentIndex - 1)
						menuTopLevelElements[prevIndex].focus()
					}
					break
				case "ArrowRight":
					keyboardEvent.preventDefault()
					if (currentIndex > -1) {
						var nextIndex = Math.min(menuTopLevelElements.length - 1, currentIndex + 1)
						menuTopLevelElements[nextIndex].focus()
					}
					break
				case "Home":
					keyboardEvent.preventDefault()
					menuTopLevelElements[0].focus()
					break
				case "End":
					keyboardEvent.preventDefault()
					menuTopLevelElements[menuTopLevelElements.length - 1].focus()
					break
			}
		}

		const toggleMenu = (menu: HTMLElement, show: boolean) => {
			if (menu) {
				menu.style.display = show ? "block" : "none"
			}
		}
		const onButtonKeyDown = (event: KeyboardEvent) => {
			if (!$menuButtons) return
			if (document.activeElement && document.activeElement instanceof HTMLElement) {
				var targetButtonIndex = $menuButtons.indexOf(document.activeElement)

				controlFocusByKey(event, $menuButtons, targetButtonIndex)
			}
		}

		if ($menuButtons) {
			$menuButtons.map((menuButton) => {
				if (
					menuButton.tagName.toLowerCase() === "button" &&
					menuButton.hasAttribute("aria-controls")
				) {
					if (menuButton.parentNode && menuButton.parentNode instanceof HTMLElement) {
						const menu = menuButton.parentNode.querySelector("ul")
						if (menu) {
							menuButton.setAttribute("aria-expanded", "false")
							toggleMenu(menu, false)

							menuButton.addEventListener("keydown", (event) => {
								onButtonKeyDown(event)
							})
						}
					}
				}
			})
		}
	}
}

customElements.define("astro-menubar-nav", MenubarNav, { extends: "ul" })
