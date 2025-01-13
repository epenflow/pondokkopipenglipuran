import dynamic from 'next/dynamic';
import React from 'react';

const App: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { Lenis, Header, DisableDevTools, GSAP } = resources;
	return (
		<Lenis frameRate={500}>
			<Header />
			{children}
			<DisableDevTools />
			<GSAP />
		</Lenis>
	);
};
const resources = {
	DisableDevTools: dynamic(() => import('~/components/layout/disable-devtools')),
	Lenis: dynamic(() => import('~/components/layout/lenis')),
	Header: dynamic(() => import('~/components/layout/header')),
	GSAP: dynamic(() => import('~/components/layout/gsap')),
};
export default App;
