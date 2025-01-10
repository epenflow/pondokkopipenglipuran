import dynamic from 'next/dynamic';
import React from 'react';

const App: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { Lenis, Header } = resources;

	return (
		<Lenis frameRate={500}>
			<Header />
			{children}
		</Lenis>
	);
};
const resources = {
	Lenis: dynamic(() => import('~/components/layout/lenis')),
	Header: dynamic(() => import('~/components/layout/header')),
};
export default App;
