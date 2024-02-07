import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				default: {
					100: '#ffff',
					200: '#f2f2f2',
					300: '#f5f5f5',
					400: '#D0D0D0',
				},
			},
		},
	},
	plugins: [
		/** @type {import('tailwindcss/types/config').PluginCreator} */
		({ addUtilities }: { addUtilities: any }) => {
			addUtilities({
				'.border-primary': {
					border: '1px solid #d0d0d0;',
				},
			});
		},
	],
};
export default config;
