class Tabs extends HTMLElement {
	constructor() {
		super()
		const $tabs = this.querySelectorAll<HTMLElement>("[role=tab]")
		const $firstTab = $tabs[0]
		const $lastTab = $tabs[$tabs.length - 1]
		const $panels = this.querySelectorAll<HTMLElement>("[role=tabpanel]")

		const setSelectedTab = (currentTab: HTMLElement) => {
			$tabs.forEach((tab, tabIdx) => {
				if (currentTab === tab) {
					tab.setAttribute("aria-selected", "true")
					tab.removeAttribute("tabindex")
					$panels[tabIdx].classList.remove("hidden")
				} else {
					tab.setAttribute("aria-selected", "false")
					tab.tabIndex = -1
					$panels[tabIdx].classList.add("hidden")
				}
			})
		}

		const moveFocusToTab = (currentTab: HTMLElement) => {
			currentTab.focus()
		}

		const moveFocusToPreviousTab = (currentTab: HTMLElement) => {
			if (currentTab === $firstTab) {
				moveFocusToTab($lastTab)
			} else {
				const index = Array.from($tabs).indexOf(currentTab)
				moveFocusToTab(Array.from($tabs)[index - 1])
			}
		}

		const moveFocusToNextTab = (currentTab: HTMLElement) => {
			if (currentTab === $lastTab) {
				moveFocusToTab($firstTab)
			} else {
				const index = Array.from($tabs).indexOf(currentTab)
				moveFocusToTab(Array.from($tabs)[index + 1])
			}
		}

		/* EVENT HANDLERS */

		const onKeydown = (event: KeyboardEvent) => {
			let tgt = event.currentTarget,
				flag = false

			if (!(tgt instanceof HTMLElement)) return
			switch (event.key) {
				case "ArrowLeft":
					moveFocusToPreviousTab(tgt)
					flag = true
					break

				case "ArrowRight":
					moveFocusToNextTab(tgt)
					flag = true
					break

				case "Home":
					moveFocusToTab($firstTab)
					flag = true
					break

				case "End":
					moveFocusToTab($lastTab)
					flag = true
					break

				default:
					break
			}

			if (flag) {
				event.stopPropagation()
				event.preventDefault()
			}
		}

		// Since this example uses buttons for the tabs, the click onr also is activated
		// with the space and enter keys
		const onClick = (event: MouseEvent) => {
			const tgt = event.currentTarget
			if (tgt && tgt instanceof HTMLElement) {
				setSelectedTab(tgt)
			}
		}

		$tabs.forEach(($tab) => {
			$tab.tabIndex = -1
			$tab.setAttribute("aria-selected", "false")
			$tab.addEventListener("keydown", (event) => onKeydown(event))
			$tab.addEventListener("click", (event) => onClick(event))
		})

		if ($tabs) {
			setSelectedTab(Array.from($tabs)[0])
		}
	}
}

customElements.define("astro-tabs", Tabs)
