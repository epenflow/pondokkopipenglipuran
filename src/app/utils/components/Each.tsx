import React from 'react';

const Each = <T,>({
	of,
	render,
}: {
	of: T[];
	render: (item: T, index: number) => React.ReactNode;
}) => {
	return React.Children.toArray(of.map((item, index) => render(item, index)));
};

export default Each;
