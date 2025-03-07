import type { Config } from "tailwindcss";


export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	  container: {
		  center: true,
		  padding: "2rem",
		  screens: {
			  "2xl": "1400px",
		  },
	  },
  	extend: {
		colors: {
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
				DEFAULT: "hsl(var(--primary))",
				foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
				DEFAULT: "hsl(var(--secondary))",
				foreground: "hsl(var(--secondary-foreground))",
			},
			destructive: {
				DEFAULT: "hsl(var(--destructive))",
				foreground: "hsl(var(--destructive-foreground))",
			},
			muted: {
				DEFAULT: "hsl(var(--muted))",
				foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
				DEFAULT: "hsl(var(--accent))",
				foreground: "hsl(var(--accent-foreground))",
			},
			popover: {
				DEFAULT: "hsl(var(--popover))",
				foreground: "hsl(var(--popover-foreground))",
			},
			card: {
				DEFAULT: "hsl(var(--card))",
				foreground: "hsl(var(--card-foreground))",
			},
			// Ice cream flavors
			strawberry: {
				DEFAULT: "hsl(340, 80%, 80%)",
				light: "hsl(340, 80%, 90%)",
			},
			mint: {
				DEFAULT: "hsl(160, 60%, 80%)",
				light: "hsl(160, 60%, 90%)",
			},
			blueberry: {
				DEFAULT: "hsl(260, 70%, 85%)",
				light: "hsl(260, 70%, 92%)",
			},
			vanilla: {
				DEFAULT: "hsl(45, 80%, 85%)",
				light: "hsl(45, 80%, 92%)",
			},
			chocolate: {
				DEFAULT: "hsl(25, 70%, 65%)",
				light: "hsl(25, 70%, 75%)",
			},
			bubblegum: {
				DEFAULT: "hsl(310, 70%, 85%)",
				light: "hsl(310, 70%, 92%)",
			},
			cone: {
				DEFAULT: "hsl(30, 80%, 75%)",
				dark: "hsl(30, 70%, 65%)",
			},
		},
		borderRadius: {
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
			"accordion-down": {
				from: { height: 0 },
				to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: 0 },
			},
			wobble: {
				'0%, 100%': { transform: 'translateX(-50%) rotate(0deg)' },
				'25%': { transform: 'translateX(-52%) rotate(-1deg)' },
				'75%': { transform: 'translateX(-48%) rotate(1deg)' },
			},
			drip: {
				'0%': { height: '0', opacity: '0' },
				'50%': { height: '10px', opacity: '1' },
				'100%': { height: '0', opacity: '0' },
			}
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
			wobble: "wobble 2s ease-in-out infinite",
			drip: "drip 1.5s ease-in-out infinite",
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
