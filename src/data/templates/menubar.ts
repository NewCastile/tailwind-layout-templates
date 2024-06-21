import type { TemplateItem } from ".."
import DefaultMenubar from "../../components/examples/templates/menubar/DefaultMenubar.astro"

import RawDefaultMenubar from "../../components/examples/templates/menubar/DefaultMenubar.astro?raw"
import RawMenuButtonPlaceholder from "../../components/examples/templates/menubar/lib/MenuButtonPlaceholder.astro?raw"

import * as RawAstroMenubarHeader from "../../components/examples/templates/menubar/scripts/astro-menubar-header?raw"
import * as RawAstroMenubarNav from "../../components/examples/templates/menubar/scripts/astro-menubar-nav?raw"
import * as RawApplyUlHeight from "../../components/examples/templates/menubar/scripts/apply-ul-height?raw"
import * as RawAstroMenuButtonPlaceholder from "../../components/examples/templates/menubar/lib/scripts/astro-menu-button-placeholder?raw"

import MenubarTemplateIcon from "../../components/icons/template-icons/MenubarTemplateIcon.astro"

export const MenubarTemplate: TemplateItem = {
	label: "menubar",
	name: "Menubar",
	href: "/examples/templates/menubar",
	component: DefaultMenubar,
	icon: MenubarTemplateIcon,
	files: [
		{ rawFile: RawDefaultMenubar, rawFileName: "DefaultMenubar.astro", lang: "astro" },
		{
			rawFile: RawMenuButtonPlaceholder,
			rawFileName: "MenuButtonPlaceholder.astro",
			lang: "astro",
		},
		{ rawFile: RawApplyUlHeight.default, rawFileName: "apply-ul-height.ts", lang: "typescript" },
		{
			rawFile: RawAstroMenubarHeader.default,
			rawFileName: "astro-menubar-header.ts",
			lang: "typescript",
		},
		{
			rawFile: RawAstroMenubarNav.default,
			rawFileName: "astro-menubar-nav.ts",
			lang: "typescript",
		},
		{
			rawFile: RawAstroMenuButtonPlaceholder.default,
			rawFileName: "astro-menu-button-placeholder.ts",
			lang: "typescript",
		},
	],
	variants: [],
	references: [
		"https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/",
		"https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/",
	],
}
