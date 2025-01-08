'use client';
import React from 'react';
import './base.css';
import hoc, { type Props } from './hoc';

const Hero: React.FC<Props> = ({ scope }) => {
	const CSSVariables = {
		'--background-image':
			"url('https://ucarecdn.com/b7335594-1bb7-49ac-9b6a-91e859a9073c/-/preview/1000x666/')",
	} as React.CSSProperties;
	return (
		<section
			ref={scope}
			style={CSSVariables}
			className="hero-view">
			<div className="hero-container">
				<div className="hero-container--image" />
			</div>
		</section>
	);
};
export default hoc(Hero);
