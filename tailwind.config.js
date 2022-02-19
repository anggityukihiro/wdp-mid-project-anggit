module.exports = {
	content: ["./src/**/*.{html,js}"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: "#F6DE2D",
				secondary: "#191919",
				third: "#9d9d9d",
			},
			fontFamily: {
				primary: ["Lato", "sans-serif"],
				secondary: ["Playfair Display", "serif"],
			},
			container: {
				center: true,
				padding: "1rem",
			},
		},
	},
	plugins: [require('tailwind-hamburgers')],
};
 