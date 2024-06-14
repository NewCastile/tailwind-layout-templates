import CollapsibleSidebar from "../../components/examples/templates/sidebar/CollapsibleSidebar.astro"
import DefaultSidebar from "../../components/examples/templates/sidebar/DefaultSidebar.astro"
import SidebarWithHeader from "../../components/examples/templates/sidebar/SidebarWithHeader.astro"
import SidebarTemplateIcon from "../../components/icons/template-icons/SidebarTemplateIcon.astro"

import RawCollapsibleSidebar from "../../components/examples/templates/sidebar/CollapsibleSidebar.astro?raw"
import RawDefaultSidebar from "../../components/examples/templates/sidebar/DefaultSidebar.astro?raw"
import RawSidebarWithHeader from "../../components/examples/templates/sidebar/SidebarWithHeader.astro?raw"

import * as RawAstroCollapsibleSidebarLayout from "../../components/examples/templates/sidebar/scripts/astro-collapsible-sidebar-layout?raw"
import * as RawAstroSidebarLayout from "../../components/examples/templates/sidebar/scripts/astro-sidebar-layout?raw"
import * as RawCollapsibleSidebarApplyHeight from "../../components/examples/templates/sidebar/scripts/collapsible-sidebar/apply-sidebar-height?raw"
import * as RawDefaultSidebarApplyHeight from "../../components/examples/templates/sidebar/scripts/default-sidebar/apply-sidebar-height?raw"
import * as RawWithHeaderSidebarApplyHeight from "../../components/examples/templates/sidebar/scripts/with-header-sidebar/apply-sidebar-height?raw"
import * as RawWithHeaderSidebarApplyStickyHeaderTop from "../../components/examples/templates/sidebar/scripts/with-header-sidebar/apply-sticky-header-top?raw"
import type { TemplateItem } from ".."

export const SidebarTemplate: TemplateItem = {
	label: "sidebar",
	name: "Sidebar",
	href: "/examples/templates/sidebar",
	component: DefaultSidebar,
	files: [
		{ rawFile: RawDefaultSidebar, rawFileName: "DefaultSidebar.astro", lang: "astro" },
		{
			rawFile: RawAstroSidebarLayout.default,
			rawFileName: "astro-sidebar-layout.ts",
			lang: "typescript",
		},
		{
			rawFile: RawDefaultSidebarApplyHeight.default,
			rawFileName: "apply-sidebar-height",
			lang: "typescript",
		},
	],
	icon: SidebarTemplateIcon,
	variants: [
		{
			label: "sidebar-with-header",
			name: "Sidebar with Header",
			href: "/examples/templates/sidebar/#sidebar-with-header",
			component: SidebarWithHeader,
			files: [
				{ rawFile: RawSidebarWithHeader, rawFileName: "SidebarWithHeader.astro", lang: "astro" },
				{
					rawFile: RawAstroSidebarLayout.default,
					rawFileName: "astro-sidebar-layout.ts",
					lang: "typescript",
				},
				{
					rawFile: RawWithHeaderSidebarApplyHeight.default,
					rawFileName: "apply-sidebar-height.ts",
					lang: "typescript",
				},
				{
					rawFile: RawWithHeaderSidebarApplyStickyHeaderTop.default,
					rawFileName: "apply-sticky-header-top.ts",
					lang: "typescript",
				},
			],
		},
		{
			label: "collapsible-sidebar",
			name: "Collapsible Sidebar",
			href: "/examples/templates/sidebar/#collapsible-sidebar",
			component: CollapsibleSidebar,
			files: [
				{ rawFile: RawCollapsibleSidebar, rawFileName: "CollapsibleSidebar.astro", lang: "astro" },
				{
					rawFile: RawAstroCollapsibleSidebarLayout.default,
					rawFileName: "collapsible-sidebar-layout",
					lang: "typescript",
				},
				{
					rawFile: RawCollapsibleSidebarApplyHeight.default,
					rawFileName: "apply-sidebar-height.ts",
					lang: "typescript",
				},
			],
		},
	],
	references: ["https://design-system.w3.org/layouts/sidebar.html"],
}
