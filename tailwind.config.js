/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.vue"],
	experimental: {
		matchVariant: true,
	},
	theme: {
		extend: {},
		colors: {
			yellow: {
				50: "#FEFBE6",
				300: "#FFDA50",
				400: "#FBC433",
				600: "#C37E20",
				900: "#663717",
			},
			blue: {
				50: "#ECF5FE",
				600: "#0D5BE2",
				700: "#0048CD",
			},
			green: {
				50: "#EEFDF3",
				600: "#209848",
				700: "#1C743A",
			},
			red: {
				50: "#FEF0F0",
				600: "#D62226",
				700: "#B01A1E",
			},
			gray: {
				50: "#F9FAFB",
				100: "#F3F4F6",
				200: "#E5E7EB",
				400: "#9DA3AE",
				500: "#6C727F",
				600: "#4D5562",
				700: "#394150",
				800: "#212936",
				900: "#121826",
			},
			brand: {
				50: "#d7e3f3",
				500: "#4A7FC9",
				600: "#366bb4",
				700: "#295189",
			},
			white: "#FFFFFF",
			black: "#000000",
			transparent: "tranparent",
		},
	},
	plugins: [],
};
