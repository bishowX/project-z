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
				600: "#4D5562",
				700: "#394150",
			},
			white: "#FFFFFF",
		},
	},
	plugins: [],
};
