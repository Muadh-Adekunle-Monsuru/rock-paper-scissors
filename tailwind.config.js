/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'barlow-regular': ['barlow-regular', 'sans'],
				'barlow-bold': ['barlow-bold', 'sans'],
			},
			backgroundImage: {
				'scissorGradient':
					'radial-gradient(circle,hsl(39, 89%, 49%),hsl(40, 84%, 53%))',
				'paperGradient':
					'radial-gradient(circle,hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
				'rockGradient':
					'radial-gradient(circle,hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
				'lizardGradient':
					'radial-gradient(circle, hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
				'cyan':
					'radial-gradient(circle,hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
				'bodyBackground':
					'radial-gradient(circle,hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
				'triangleBg': 'url("/images/bg-triangle.svg")',
				'pentagonBg': 'url("/images/bg-pentagon.svg")',
			},
			colors: {
				'darkText': 'hsl(229, 25%, 31%)',
				'scoreText': 'hsl(229, 64%, 46%)',
				'headerOutline': 'hsl(217, 16%, 45%)',
			},
		},
	},
	plugins: [],
};
