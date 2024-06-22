import type { TemplateItem } from ".."
import ImageElementLink from "../../components/examples/components/link/ImageElementLink.astro"
import SpanElementLink from "../../components/examples/components/link/SpanElementLink.astro"

import RawImageElementLink from "../../components/examples/components/link/ImageElementLink.astro?raw"
import RawSpanElementLink from "../../components/examples/components/link/SpanElementLink.astro?raw"

import * as RawAstroImageLink from "../../components/examples/components/link/scripts/astro-image-link?raw"
import * as RawAstroSpanLink from "../../components/examples/components/link/scripts/astro-span-link?raw"

import LinkPatternIcon from "../../components/icons/pattern-icons/LinkPatternIcon.astro"

export const LinkPattern: TemplateItem = {
	label: "link",
	name: "Link",
	icon: LinkPatternIcon,
	href: "/examples/patterns/link",
	variants: [
		{
			name: "Image link",
			label: "image-link",
			component: ImageElementLink,
			files: [
				{ rawFile: RawImageElementLink, rawFileName: "ImageLink.astro", lang: "astro" },
				{
					rawFile: RawAstroImageLink.default,
					rawFileName: "astro-image-link.ts",
					lang: "typescript",
				},
			],
			href: "examples/patterns/link#image-link",
		},
		{
			name: "Span Link",
			label: "span-link",
			component: SpanElementLink,
			files: [
				{ rawFile: RawSpanElementLink, rawFileName: "SpanLink.astro", lang: "astro" },
				{
					rawFile: RawAstroSpanLink.default,
					rawFileName: "astro-span-link.ts",
					lang: "typescript",
				},
			],
			href: "examples/patterns/link#span-link",
		},
	],
	references: ["https://www.w3.org/WAI/ARIA/apg/patterns/link/examples/link/"],
}
