import dynamic from 'next/dynamic';

export default function Page() {
	const { Views } = resources;
	return (
		<main>
			{Object.entries(Views).map(([key, View]) => (
				<View key={key} />
			))}
		</main>
	);
}

const resources = {
	Views: {
		Hero: dynamic(() => import('~/components/views/hero')),
		WhoWeAre: dynamic(() => import('~/components/views/who-we-are')),
		Videos: dynamic(() => import('~/components/views/videos')),
	},
};
