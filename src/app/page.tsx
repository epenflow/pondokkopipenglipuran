import dynamic from 'next/dynamic';

export default function Page() {
	const { Views } = resources;
	return (
		<main>
			{Object.entries(Views).map(([key, View]) => (
				<View key={key} />
			))}
			<div className="h-svh w-full" />
		</main>
	);
}

const resources = {
	Views: {
		Hero: dynamic(() => import('~/components/views/hero')),
		WhoWeAre: dynamic(() => import('~/components/views/who-we-are')),
	},
};
