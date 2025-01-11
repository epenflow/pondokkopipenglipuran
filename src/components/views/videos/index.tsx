'use client';
import React from 'react';
import './base.css';
import hoc, { type Props } from './hoc';

const Videos: React.FC<Props> = ({ scope }) => {
	return (
		<section
			ref={scope}
			className="videos-view">
			<iframe
				className="w-full h-svh"
				src="https://www.youtube.com/embed/H9Ledm14Nw0?si=V6S-5P7pDrUBMh6G"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			/>
		</section>
	);
};

export default hoc(Videos);
