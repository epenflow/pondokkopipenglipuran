import type React from 'react';
import flags from '~/libs/flags';
import './base.scss';
const Coffee = () => {
	const { CSSVariables } = resources;
	return (
		<section
			style={CSSVariables}
			data-flag-border={flags['border']}
			className="coffee">
			<div
				data-flag-border={flags['border']}
				className="content--container">
				<div className="content--outer">
					<h1 className="heading--content">
						A Journey of a Thousand Miles Begins with a Single Cup of Coffee.
					</h1>
					<div className="button--content">View on Maps</div>
				</div>
				<div className="image--container">
					<div className="image--content" />
					<div
						data-flag-border={flags['border']}
						className="spoon--step"
					/>
				</div>
			</div>
		</section>
	);
};

export default Coffee;
const resources = {
	CSSVariables: {
		'--image-content': `url('https://ucarecdn.com/b01b96fd-572a-46ec-8a66-7723fdb6802d/-/preview/1000x494/')`,
	} as React.CSSProperties,
};
