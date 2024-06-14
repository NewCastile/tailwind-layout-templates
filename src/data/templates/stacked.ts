import type { TemplateItem } from ".."

import DefaultStacked from "../../components/examples/templates/stacked/DefaultStacked.astro"
import SidebarStacked from "../../components/examples/templates/stacked/SidebarStacked.astro"
import StickyHeaderStacked from "../../components/examples/templates/stacked/StickyHeaderStacked.astro"

import RawDefaultStacked from "../../components/examples/templates/stacked/DefaultStacked.astro?raw"
import RawSidebarStacked from "../../components/examples/templates/stacked/SidebarStacked.astro?raw"
import RawStickyHeaderStacked from "../../components/examples/templates/stacked/StickyHeaderStacked.astro?raw"

import * as RawStackedHeader from "../../components/examples/templates/stacked/scripts/astro-stacked-header?raw"
import * as RawStackedApplyNavHeight from "../../components/examples/templates/stacked/scripts/apply-nav-height?raw"
import * as RawSidebarStackedApplyNavHeight from "../../components/examples/templates/stacked/scripts/sidebar-stacked/apply-nav-height?raw"
import * as RawAstroSidebarLayout from "../../components/examples/templates/sidebar/scripts/astro-sidebar-layout?raw"

import StackedTemplateIcon from "../../components/icons/template-icons/StackedTemplateIcon.astro"

export const StackedTemplate: TemplateItem = {
	label: "stacked",
	name: "Stacked",
	href: "/examples/templates/stacked",
	component: DefaultStacked,
	files: [
		{ rawFile: RawDefaultStacked, rawFileName: "DefaultStacked.astro", lang: "astro" },
		{
			rawFile: RawStackedHeader.default,
			rawFileName: "astro-stacked-header.ts",
			lang: "typescript",
		},
		{
			rawFile: RawStackedApplyNavHeight.default,
			rawFileName: "apply-nav-height.ts",
			lang: "typescript",
		},
	],
	icon: StackedTemplateIcon,
	variants: [
		{
			label: "sticky-header-stacked",
			name: "Sticky Header Stacked",
			component: StickyHeaderStacked,
			files: [
				{
					rawFile: RawStickyHeaderStacked,
					rawFileName: "StickyHeaderStacked.astro",
					lang: "astro",
				},
				{
					rawFile: RawStackedHeader.default,
					rawFileName: "astro-stacked-header.ts",
					lang: "typescript",
				},
				{
					rawFile: RawStackedApplyNavHeight.default,
					rawFileName: "apply-nav-height.ts",
					lang: "typescript",
				},
			],
			href: "/examples/templates/stacked#sticky-header-stacked",
		},
		{
			label: "sidebar-stacked",
			name: "Sidebar Stacked",
			component: SidebarStacked,
			files: [
				{ rawFile: RawSidebarStacked, rawFileName: "SidebarStacked.astro", lang: "astro" },
				{
					rawFile: RawAstroSidebarLayout.default,
					rawFileName: "astro-sidebar-layout.ts",
					lang: "typescript",
				},
				{
					rawFile: RawSidebarStackedApplyNavHeight.default,
					rawFileName: "apply-nav-height.ts",
					lang: "typescript",
				},
			],
			href: "/examples/templates/stacked#sidebar-stacked",
		},
	],
	references: ["https://design-system.w3.org/templates/basic-page.html"],
}
