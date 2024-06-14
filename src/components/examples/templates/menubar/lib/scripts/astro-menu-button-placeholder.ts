class MenuButtonPlaceHolder extends HTMLElement {
	constructor() {
		super()
		const $dropdownButton = this.querySelector("[data-dropdown-button]")
		const $disclosureButton = this.querySelector("[data-disclosure-button]")

		const mq = window.matchMedia("(max-width: 768px)")

		if ($dropdownButton && $disclosureButton) {
			mq.addEventListener("change", () => {
				$dropdownButton.classList.toggle("menu-button", !mq.matches)
				$disclosureButton.classList.toggle("menu-button", mq.matches)
			})
		}
	}
}

customElements.define("astro-menu-button-placeholder", MenuButtonPlaceHolder)
