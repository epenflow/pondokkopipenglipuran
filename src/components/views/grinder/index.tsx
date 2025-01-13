'use client';
import React from 'react';
import flags from '~/libs/flags';
import './base.scss';
import hoc, { type Props } from './hoc';

const Grinder: React.FC<Props> = ({ scope }) => {
	const { CSSVariables } = resources;
	return (
		<section
			ref={scope}
			style={CSSVariables}
			data-flag-border={flags['border']}
			className="grinder">
			<div
				data-spoon="end"
				data-flag-border={flags['border']}
				className="content--container">
				<div className="grinder--image" />
				<div
					data-flag-border={flags['border']}
					className="spoon--step"
				/>
			</div>
		</section>
	);
};
export default hoc(Grinder);
const resources = {
	CSSVariables: {
		'--grinder-image': `url('https://ucarecdn.com/3a45b0ab-1c1a-44f3-8024-871127da05c3/-/preview/970x999/')`,
	} as React.CSSProperties,
};
