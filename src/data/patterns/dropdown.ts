import DropdownIcon from "../../components/icons/pattern-icons/DropdownIcon.astro"
import Dropdown from "../../components/examples/components/dropdown/Dropdown.astro"

import RawDropdown from "../../components/examples/components/dropdown/Dropdown.astro?raw"
import * as RawAstroDropdown from "../../components/examples/components/dropdown/scripts/astro-dropdown?raw"
import type { TemplateItem } from ".."

export const DropdownPattern: TemplateItem = {
	label: "dropdown",
	name: "Dropdown",
	href: "/examples/patterns/dropdown",
	files: [
		{ rawFile: RawDropdown, rawFileName: "Dropdown.astro", lang: "astro" },
		{ rawFile: RawAstroDropdown.default, rawFileName: "astro-dropdown.ts", lang: "typescript" },
	],
	icon: DropdownIcon,
	component: Dropdown,
	references: [
		"https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions/",
	],
}
