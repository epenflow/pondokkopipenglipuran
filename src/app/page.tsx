import dynamic from 'next/dynamic';
import React from 'react';

export default function Page() {
	const { Views } = resources;
	return (
		<main>
			<React.Suspense>
				{Object.entries(Views).map(([key, View]) => (
					<View key={key} />
				))}
			</React.Suspense>
		</main>
	);
}

const resources = {
	Views: {
		About: dynamic(() => import('~/components/views/about')),
		// Hero: dynamic(() => import('~/components/views/hero')),
		// WhoWeAre: dynamic(() => import('~/components/views/who-we-are')),
		// Grinder: dynamic(() => import('~/components/views/grinder')),
		// Videos: dynamic(() => import('~/components/views/videos')),
	},
};
