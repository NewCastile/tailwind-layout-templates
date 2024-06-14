class Dropdown extends HTMLElement {
	constructor() {
		super()
		const $button = this.querySelector("button")
		const $menu = this.querySelector('[role="menu"]')
		const $menuItems = Array.from(this.querySelectorAll('[role="menuitem"]'))
		let $firstMenuitem = $menuItems ? $menuItems[0] : null
		let $lastMenuitem = $menuItems ? $menuItems[$menuItems.length - 1] : null
		let $firstChars = $menuItems
			? $menuItems.map((el) => {
					if (!el.textContent) return
					return el.textContent.trim()[0].toLocaleLowerCase()
				})
			: []

		// Utilities

		const setFocusToMenuitem = (newMenuitem: Element) => {
			$menuItems.forEach((item) => {
				if (item === newMenuitem) {
					item.setAttribute("tabindex", "0")
					if (newMenuitem instanceof HTMLElement) {
						newMenuitem.focus()
					}
				} else {
					item.setAttribute("tabindex", "-1")
				}
			})
		}

		const setFocusToFirstMenuitem = () => {
			if ($firstMenuitem) {
				setFocusToMenuitem($firstMenuitem)
			}
		}

		const setFocusToLastMenuitem = () => {
			if ($lastMenuitem) {
				setFocusToMenuitem($lastMenuitem)
			}
		}
		const setFocusToPreviousMenuitem = (currentMenuitem: Element) => {
			var newMenuItem: Element | null = null
			var index: number = 0
			if (currentMenuitem === $firstMenuitem) {
				newMenuItem = $lastMenuitem
			} else {
				index = $menuItems.indexOf(currentMenuitem)
				newMenuItem = $menuItems[index - 1]
			}

			if (newMenuItem) {
				setFocusToMenuitem(newMenuItem)
			}

			return newMenuItem
		}

		const setFocusToNextMenuitem = (currentMenuItem: Element) => {
			var newMenuitem: Element | null = null
			var index: number = 0

			if (currentMenuItem === $lastMenuitem) {
				newMenuitem = $firstMenuitem
			} else {
				index = $menuItems.indexOf(currentMenuItem)
				newMenuitem = $menuItems[index + 1]
			}
			if (newMenuitem) {
				setFocusToMenuitem(newMenuitem)
			}

			return newMenuitem
		}

		const setFocusByFirstCharacter = (currentMenuitem: Element | null, char: string) => {
			if (!currentMenuitem) return
			var start, index

			if (char.length > 1) {
				return
			}

			char = char.toLowerCase()

			// Get start index for search based on position of currentItem
			start = $menuItems.indexOf(currentMenuitem) + 1
			if (start >= $menuItems.length) {
				start = 0
			}

			// Check remaining slots in the menu
			index = $firstChars.indexOf(char, start)

			// If not found in remaining slots, check from beginning
			if (index === -1) {
				index = $firstChars.indexOf(char, 0)
			}

			// If match was found...
			if (index > -1) {
				setFocusToMenuitem($menuItems[index])
			}
		}

		// Popup menu methods

		const openPopup = () => {
			if ($menu && $button) {
				$menu.setAttribute("style", "display: block")
				$button.setAttribute("aria-expanded", "true")
			}
		}

		const closePopup = () => {
			if ($button && $menu && isOpen()) {
				$button.setAttribute("aria-expanded", "false")
				$menu.setAttribute("style", "display: none")
			}
		}

		const isOpen = () => {
			if ($button) {
				return $button.getAttribute("aria-expanded") === "true"
			}
		}

		// Menu event handlers

		const onButtonKeydown = (event: KeyboardEvent) => {
			let flag: boolean = false

			switch (event.key) {
				case " ":
				case "Enter":
					break

				case "ArrowDown":
				case "Down":
					openPopup()
					setFocusToFirstMenuitem()
					flag = true
					break

				case "Esc":
				case "Escape":
					closePopup()
					flag = true
					break

				case "Up":
				case "ArrowUp":
					openPopup()
					setFocusToLastMenuitem()
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

		const onButtonClick = (event: Event) => {
			event.preventDefault()
			event.stopPropagation()
			if (isOpen()) {
				closePopup()
				if ($button) {
					$button.focus()
				}
			} else {
				openPopup()
				setFocusToFirstMenuitem()
			}
		}

		const onMenuitemKeydown = (event: Event) => {
			if (!(event instanceof KeyboardEvent)) return
			var tgt = event.currentTarget,
				key = event.key,
				flag = false

			if (!$button || !tgt || !(tgt instanceof HTMLElement)) return

			const isPrintableCharacter = (str: string) => {
				return str.length === 1 && str.match(/\S/)
			}

			if (event.ctrlKey || event.altKey || event.metaKey) {
				return
			}

			if (event.shiftKey && tgt instanceof HTMLElement) {
				if (isPrintableCharacter(key)) {
					setFocusByFirstCharacter(tgt, key)
					flag = true
				}

				if (event.key === "Tab") {
					if ($button) {
						$button.focus()
					}
					closePopup()
					flag = true
				}
			} else {
				switch (key) {
					case " ":
					case "Enter":
						closePopup()
						$button.focus()
						flag = true
						break

					case "Esc":
					case "Escape":
						closePopup()
						$button.focus()
						flag = true
						break

					case "Up":
					case "ArrowUp":
						setFocusToPreviousMenuitem(tgt)
						flag = true
						break

					case "ArrowDown":
					case "Down":
						setFocusToNextMenuitem(tgt)
						flag = true
						break

					case "Tab":
						closePopup()
						break

					default:
						if (isPrintableCharacter(key)) {
							setFocusByFirstCharacter(tgt, key)
							flag = true
						}
						break
				}
			}

			if (flag) {
				event.stopPropagation()
				event.preventDefault()
			}
		}

		const onMenuitemClick = (event: Event) => {
			var tgt = event.currentTarget

			if (!$button || !tgt) return
			closePopup()
			$button.focus()
		}

		const onMenuitemMouseover = (event: Event) => {
			var tgt = event.currentTarget
			if (tgt && tgt instanceof HTMLElement) {
				tgt.focus()
			}
		}

		const onBackgroundMousedown = (event: Event) => {
			if (!event.target) return
			if (!(event.target instanceof Node)) return
			if (!this.contains(event.target)) {
				if ($button && isOpen()) {
					closePopup()
					$button.focus()
				}
			}
		}

		if ($button) {
			$button.addEventListener("keydown", (event) => onButtonKeydown(event))
			$button.addEventListener("click", (event) => onButtonClick(event))
		}

		$menuItems.forEach((menuitem) => {
			menuitem.setAttribute("tabindex", "-1")
			menuitem.addEventListener("keydown", (event) => onMenuitemKeydown(event))

			menuitem.addEventListener("click", (event) => onMenuitemClick(event))

			menuitem.addEventListener("mouseover", (event) => onMenuitemMouseover(event))
		})

		window.addEventListener("mousedown", (event) => onBackgroundMousedown(event))
	}
}

customElements.define("astro-dropdown", Dropdown)
