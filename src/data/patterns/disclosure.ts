import type { TemplateItem } from ".."
import Disclosure from "../../components/examples/components/disclosure/Disclosure.astro"

import RawDisclosure from "../../components/examples/components/disclosure/Disclosure.astro?raw"
import * as RawAstroDisclosure from "../../components/examples/components/disclosure/scripts/astro-disclosure?raw"

import DisclosureIcon from "../../components/icons/pattern-icons/DisclosureIcon.astro"

export const DisclosurePattern: TemplateItem = {
	label: "disclosure",
	name: "Disclosure",
	component: Disclosure,
	icon: DisclosureIcon,
	files: [
		{ rawFile: RawDisclosure, rawFileName: "Disclosure.astro", lang: "astro" },
		{
			rawFile: RawAstroDisclosure.default,
			rawFileName: "astro-disclosure.ts",
			lang: "typescript",
		},
	],
	href: "/examples/patterns/disclosure",
}
