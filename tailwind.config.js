/** @type {import('tailwindcss').Config} */

const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				first: "moveVertical 30s ease infinite",
				second: "moveInCircle 20s reverse infinite",
				third: "moveInCircle 40s linear infinite",
				fourth: "moveHorizontal 40s ease infinite",
				fifth: "moveInCircle 20s ease infinite",
			},
			keyframes: {
				moveHorizontal: {
					"0%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
					"50%": {
						transform: "translateX(50%) translateY(10%)",
					},
					"100%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
				},
				moveInCircle: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"50%": {
						transform: "rotate(180deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				moveVertical: {
					"0%": {
						transform: "translateY(-50%)",
					},
					"50%": {
						transform: "translateY(50%)",
					},
					"100%": {
						transform: "translateY(-50%)",
					},
				},
			},
			backgroundImage: {
				'radial-custom': 'radial-gradient(circle, #00A3FF, #1c1c21)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsla(var(--background))',
				foreground: 'hsla(var(--foreground))',
				card: {
					DEFAULT: 'hsla(var(--card))',
					foreground: 'hsla(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsla(var(--popover))',
					foreground: 'hsla(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsla(var(--primary))',
					foreground: 'hsla(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsla(var(--secondary))',
					foreground: 'hsla(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsla(var(--muted))',
					foreground: 'hsla(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsla(var(--accent))',
					foreground: 'hsla(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsla(var(--destructive))',
					foreground: 'hsla(var(--destructive-foreground))'
				},
				zinc: {
					DEFAULT: 'hsla(var(--zinc))',
					foreground: 'hsla(var(--zinc-foreground))'
				},
				border: 'hsla(var(--border))',
				input: 'hsla(var(--input))',
				ring: 'hsla(var(--ring))',
				chart: {
					'1': 'hsla(var(--chart-1))',
					'2': 'hsla(var(--chart-2))',
					'3': 'hsla(var(--chart-3))',
					'4': 'hsla(var(--chart-4))',
					'5': 'hsla(var(--chart-5))'
				},
				textSecondary: 'hsla(var(--text-secondary-emerald))'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}