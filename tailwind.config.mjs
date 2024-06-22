/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			screens: {
				...defaultTheme.screens,
			},
			colors: {
				...defaultTheme.colors,
				primary: "#18191a",
				foreground: "#292929",
				secondary: "#beb8b0",
			},
		},
	},
	plugins: [],
}
