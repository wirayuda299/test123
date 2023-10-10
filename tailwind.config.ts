/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			     boxShadow: {
        postCardImgShadow: "0 3px 4px 0 rgba(250, 137, 36, 0.06)",
        darkShadow: "0 6px 6px 2px rgba(71, 153, 235, 0.04)",
      },

      backgroundImage: {
        meetUpBg: `url(../public/images/hostMeetup.svg)`,
      },
			fontFamily: {
				'source-sans': '[var(--source-sans)]',
			},
			maxWidth: {
				442: '442px',
				500: '500px',
				720: '720px',
				1440: '1440px',
			},
			width: {
				60: '60px',
			},
			height: {
				60: '60px',
			},
			colors: {
				primary: '#FF4401',
				secondary: {
					redblack: '#661B00',
					red: {
						DEFAULT: '#FF4401',
						90: '#FF571A',
						80: '#FF6934',
						60: '#FF8F67',
						10: '#FFECE6',
					},
					yellow: {
						DEFAULT: '#EA942C',
						90: '#EC9F41',
						80: '#EEA956',
						30: '#F9DFC0',
						10: '#FDF4EA',
					},
					blueBlack: {
						DEFAULT: '#0A182D',
						80: '#2A62B5',
					},
					blue: {
						DEFAULT: '#347AE2',
						90: '#4887E5',
						80: '#5D95E8',
						20: '#D6E4F9',
						10: '#EBF2FC',
					},
					purpleBlack: '#141631',
					purple: {
						DEFAULT: '#6570F7',
						80: '#848DF9',
						20: '#E0E2FD',
						10: '#F0F1FE',
					},
					green: {
						DEFAULT: '#0ECC8D',
						80: '#3ED6A4',
						10: '#E7FAF4',
					},
				},
				white: {
					DEFAULT: '#FFFFFF',
					800: '#F7F7F7',
					700: '#F4F6F8',
				},
				darkPrimary: {
					DEFAULT: '#151A1E',
					2: '#1E252B',
					3: '#262D34',
					4: '#2C353D',
				},
				darkSecondary: {
					DEFAULT: '#192351',
					900: '#3F4354',
					800: '#97989D',
					700: '#858EAD',
					600: '#C5D0E6',
				},
			},
			screens: {
				'3xl': '1440px',
			},

			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
