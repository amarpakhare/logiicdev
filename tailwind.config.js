/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			// animation: {
			// 	"gradient-x": "gradient-x 5s ease infinite",
			// },
			// keyframes: {
			// 	"gradient-x": {
			// 		"0%, 100%": {
			// 			"background-position": "0% 50%",
			// 		},
			// 		"50%": {
			// 			"background-position": "100% 50%",
			// 		},
			// 	},
			// },
			// backgroundSize: {
			// 	"200%": "200%",
			// },
			fontFamily:{
				poppins: ["Poppins", "sans-serif"]
			}
		},
	},
	plugins: [],
}