import { EXAMPLES_FILES } from "../../../../data/index"

class ClipboardButton extends HTMLElement {
	constructor() {
		super()
		const $clipboardButton = this.querySelector<HTMLElement>(".clipboard-button")
		const $toastButton = this.querySelector<HTMLElement>(".toast-button")

		if ($clipboardButton && $toastButton) {
			$clipboardButton.addEventListener("click", (event) => {
				event.preventDefault()

				const fileName = $clipboardButton.getAttribute("data-file-name")
				const file = EXAMPLES_FILES.find((file) => {
					return file.rawFileName === fileName
				})

				if (file) {
					navigator.clipboard.writeText(file.rawFile)

					$toastButton.classList.remove("opacity-0")
					$toastButton.classList.add("opacity-100")

					// hide toast after 3 seconds has passed.
					setTimeout(() => {
						$toastButton.classList.remove("opacity-100")
						$toastButton.classList.add("opacity-0")
					}, 3000)
				}
			})
		}

		if ($toastButton) {
			$toastButton.addEventListener("click", (event) => {
				event.preventDefault()

				$toastButton.classList.remove("opacity-100")
				$toastButton.classList.add("opacity-0")
			})
		}
	}
}

customElements.define("astro-clipboard-button", ClipboardButton)
