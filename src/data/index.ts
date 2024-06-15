import { StackedTemplate } from "./templates/stacked"
import { SidebarTemplate } from "./templates/sidebar"
import { MenubarTemplate } from "./templates/menubar"
import { DropdownPattern } from "./patterns/dropdown"
import { LinkPattern } from "./patterns/link"
import { DisclosurePattern } from "./patterns/disclosure"
import { HolyGrailTemplate } from "./templates/holy-grail"
import AstroLogo from "../components/icons/logos/AstroLogo.astro"
import TypeScriptLogo from "../components/icons/logos/TypeScriptLogo.astro"

export interface BasicTemplateItem {
	label: string
	name: string
	href: string
	files?: { rawFile: any; lang: any; rawFileName: string }[]
	component?: any
}
export interface TemplateItem extends BasicTemplateItem {
	variants?: BasicTemplateItem[]
	references?: string[] | null
	icon?: any
}

export const PATTERNS: TemplateItem[] = [DropdownPattern, LinkPattern, DisclosurePattern]

export const FILE_FLATTENED_PATTERNS = PATTERNS.flatMap((pattern) => {
	const temp: BasicTemplateItem["files"] = []
	const basePatternFiles = pattern.files ? pattern.files : []
	const variantsFiles = pattern.variants
		? pattern.variants.flatMap((variant) => (variant.files ? variant.files : []))
		: []
	return temp.concat(basePatternFiles, variantsFiles)
})

export const TEMPLATES: TemplateItem[] = [
	HolyGrailTemplate,
	SidebarTemplate,
	StackedTemplate,
	MenubarTemplate,
]

export const FILE_FLATTENED_TEMPLATES = TEMPLATES.flatMap((template) => {
	const temp: BasicTemplateItem["files"] = []
	const baseTemplateFiles = template.files ? template.files : []
	const variantsFiles = template.variants
		? template.variants.flatMap((variant) => (variant.files ? variant.files : []))
		: []
	return temp.concat(baseTemplateFiles, variantsFiles)
})

export const EXAMPLES_FILES = FILE_FLATTENED_TEMPLATES.concat(FILE_FLATTENED_PATTERNS)

export const LOGOS: { fileExtension: string; icon: any }[] = [
	{ fileExtension: "astro", icon: AstroLogo },
	{ fileExtension: "ts", icon: TypeScriptLogo },
]
