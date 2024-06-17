import DefaultHolyGrail from "../../components/examples/templates/holy-grail/DefaultHolyGrail.astro"

import StickyNavsHolyGrail from "../../components/examples/templates/holy-grail/StickyNavsHolyGrail.astro"
import HolyGrailTemplateIcon from "../../components/icons/template-icons/HolyGrailTemplateIcon.astro"

import RawAllStickyHolyGrail from "../../components/examples/templates/holy-grail/AllStickyHolyGrail.astro?raw"
import RawDefaultHolyGrail from "../../components/examples/templates/holy-grail/DefaultHolyGrail.astro?raw"
import RawStickyNavsHolyGrail from "../../components/examples/templates/holy-grail/StickyNavsHolyGrail.astro?raw"

import * as RawAstroHolyGrailLayout from "../../components/examples/templates/holy-grail/scripts/astro-holy-grail-layout?raw"
import * as RawApplyDefaultHolyGrailNavHeight from "../../components/examples/templates/holy-grail/scripts/default/apply-nav-height?raw"

import * as RawApplyStickyNavsHolyGrailNavHeight from "../../components/examples/templates/holy-grail/scripts/sticky-navs/apply-nav-height?raw"
import * as RawApplyStickyNavsHolyGrailNavsTop from "../../components/examples/templates/holy-grail/scripts/sticky-navs/apply-sticky-navs-top?raw"

import AllStickyHolyGrail from "../../components/examples/templates/holy-grail/AllStickyHolyGrail.astro"

import * as RawApplyAllStickyHolyGrailNavHeight from "../../components/examples/templates/holy-grail/scripts/all-sticky/apply-nav-height?raw"
import * as RawApplyAllStickyHolyGrailNavsTop from "../../components/examples/templates/holy-grail/scripts/all-sticky/apply-sticky-navs-top?raw"
import * as RawAstroAllStickyHolyGrailLayout from "../../components/examples/templates/holy-grail/scripts/all-sticky/astro-all-sticky-holy-grail-layout?raw"

import type { TemplateItem } from ".."

export const HolyGrailTemplate: TemplateItem = {
	label: "holy-grail",
	name: "Holy Grail",
	href: "/examples/templates/holy-grail",
	component: DefaultHolyGrail,
	files: [
		{ rawFile: RawDefaultHolyGrail, rawFileName: "DefaultHolyGrail.astro", lang: "astro" },
		{
			rawFile: RawAstroHolyGrailLayout.default,
			rawFileName: "astro-holy-grail-layout.ts",
			lang: "typescript",
		},
		{
			rawFile: RawApplyDefaultHolyGrailNavHeight.default,
			rawFileName: "apply-nav-height.ts",
			lang: "typescript",
		},
	],
	icon: HolyGrailTemplateIcon,
	variants: [
		{
			label: "sticky-navs-holy-grail",
			name: "Sticky Navs Holy Grail",
			href: "/examples/templates/holy-grail#sticky-navs-holy-grail",
			component: StickyNavsHolyGrail,
			files: [
				{
					rawFile: RawStickyNavsHolyGrail,
					rawFileName: "StickyNavsHolyGrail.astro",
					lang: "astro",
				},
				{
					rawFile: RawAstroHolyGrailLayout.default,
					rawFileName: "astro-holy-grail-layout.ts",
					lang: "typescript",
				},
				{
					rawFile: RawApplyStickyNavsHolyGrailNavHeight.default,
					rawFileName: "apply-nav-height.ts",
					lang: "typescript",
				},
				{
					rawFile: RawApplyStickyNavsHolyGrailNavsTop.default,
					rawFileName: "apply-sticky-navs-top.ts",
					lang: "typescript",
				},
			],
		},
		{
			label: "all-sticky-holy-grail",
			name: "All Sticky Holy Grail",
			href: "/examples/templates/holy-grail#all-sticky-holy-grail",
			component: AllStickyHolyGrail,
			files: [
				{
					rawFile: RawAllStickyHolyGrail,
					rawFileName: "AllStickyHolyGrail.astro",
					lang: "astro",
				},
				{
					rawFile: RawAstroAllStickyHolyGrailLayout.default,
					rawFileName: "astro-holy-grail-layout.ts",
					lang: "typescript",
				},
				{
					rawFile: RawApplyAllStickyHolyGrailNavHeight.default,
					rawFileName: "apply-nav-height.ts",
					lang: "typescript",
				},
				{
					rawFile: RawApplyAllStickyHolyGrailNavsTop.default,
					rawFileName: "apply-sticky-navs-top.ts",
					lang: "typescript",
				},
			],
		},
	],
	references: ["https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/"],
}
