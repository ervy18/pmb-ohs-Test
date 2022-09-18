module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				nutino: ["Nunito", "sans-serif"],
				ibm: ['"IBM Plex Sans Arabic"', "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		require("daisyui"),
	],
	daisyui: {
		// styled: false,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		themes: [
			{
				orange: {
					// custom theme
					primary: "#ea5234",
					"primary-focus": "#d43616",
					"primary-content": "#ffffff",
				},
				lantern: {
					primary: "#028ea9",
					"primary-focus": "#027089",
					"primary-content": "#ffffff",
					secondary: "#ea5234",
				},
			},
			"light",
			"pastel",
			"forest",
			"synthwave",
			// "dark",
		],
	},
};
