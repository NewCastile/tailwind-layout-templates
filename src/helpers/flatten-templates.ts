import type { BasicTemplateItem, TemplateItem } from "../data"

export const flattenTemplate = <T extends TemplateItem>(exampleArray: T[]): BasicTemplateItem[] => {
	let templateLabels: T[] = []

	exampleArray.forEach((template) => {
		const baseTemplate = template
		const labelMappedVariants = template.variants
			? template.variants.map((variant) => {
					return variant as T
				})
			: []

		const variantsLabels = [baseTemplate].concat(labelMappedVariants)

		templateLabels = templateLabels.concat(baseTemplate, variantsLabels)
	})

	return templateLabels
}
