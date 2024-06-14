import { StackedTemplate } from "./templates/stacked"
import { SidebarTemplate } from "./templates/sidebar"
import { MenubarTemplate } from "./templates/menubar"
import { DropdownPattern } from "./patterns/dropdown"
import { LinkPattern } from "./patterns/link"
import { DisclosurePattern } from "./patterns/disclosure"
import { HolyGrailTemplate } from "./templates/holy-grail"

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

export const TEMPLATES: TemplateItem[] = [
	HolyGrailTemplate,
	SidebarTemplate,
	StackedTemplate,
	MenubarTemplate,
]
