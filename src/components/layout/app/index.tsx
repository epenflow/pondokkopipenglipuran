import dynamic from 'next/dynamic';
import React from 'react';

const App: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { Lenis } = resources;

	return <Lenis frameRate={500}>{children}</Lenis>;
};
const resources = {
	Lenis: dynamic(() => import('~/components/layout/lenis')),
};
export default App;
