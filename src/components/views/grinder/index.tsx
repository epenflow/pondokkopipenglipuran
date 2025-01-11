import type React from 'react';
import './base.css';
const Grinder = () => {
	const { CSSVariables } = resoureces;
	return (
		<section
			style={CSSVariables}
			className="grinder-view">
			<div className="grinder--content-outer">
				<div className="grinder--image" />
			</div>
		</section>
	);
};
const resoureces = {
	CSSVariables: {
		'--grinder-image': `url('https://ucarecdn.com/3a45b0ab-1c1a-44f3-8024-871127da05c3/-/preview/970x999/')`,
	} as React.CSSProperties,
};
export default Grinder;
