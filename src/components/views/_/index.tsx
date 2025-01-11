'use client';
import React from 'react';
import './base.css';
import hoc, { type Props } from './hoc';

const WhoWeAre: React.FC<Props> = ({ scope }) => {
	const { intro, CSSVariables, seedCoord, description } = resources;

	return (
		<section
			ref={scope}
			style={CSSVariables}
			className="about-view">
			{seedCoord['default'].map(({ left, top }, key) => {
				const $CSSVariables = {
					'--seed-size': '5rem',
					'--seed-left': left,
					'--seed-top': top,
				} as React.CSSProperties;
				return (
					<div
						key={key}
						style={$CSSVariables}
						className="seed"
					/>
				);
			})}

			<div className="about-intro--outer">
				<div className="about-intro--inner">
					<h1
						data-text
						className="heading--content">
						{intro['heading']}
					</h1>
					<p
						data-text
						className="text--content text-justify">
						{intro['texts'][0]}
					</p>
					<p
						data-text
						className="text--content text-justify">
						{intro['texts'][1]}
					</p>
				</div>
				<div className="spoon" />
			</div>

			<div className="about-description--outer">
				<div className="about-description--inner">
					<p
						data-text
						className="text--content text-justify">
						{description['text']}
					</p>
				</div>
				<div className="about-description--inner">
					<div className="grinder" />
					<div className="seed-step" />
				</div>
			</div>

			<div className="about-coffee--outer">
				<div className="coffee-cup" />
				<div className="spoon-step" />
			</div>
		</section>
	);
};
export default hoc(WhoWeAre);

const resources = {
	intro: {
		heading: `Who Are We?`,
		texts: [
			`Pondok Kopi was established by A.A Gde Joyti Rahadian and A.A Gde Krisna Adita in June 2017. This business is located in Penglipuran Tourism Village, specifically behind Karang Memadu. The name of the cafe is inspired by the name of Penglipuran Village, with the aim of attracting tourist visiting the village.`,
			`In addition to supporting economic development and increasing tourist interest in visiting Penglipuran Village, Pondok Kopi also supports local farmers. The coffee beans produced by this cafe are sourced from local farmers, purchased in the form of green beans. These coffee beans are then processed at Pondok Kopi using traditional roasting methods`,
		],
	},
	description: {
		text: `Nestled in the heart of the serene Penglipuran Village, Pondok Kopi offers more than just a cup of coffee – it provides an immersive experience into the rich cultural heritage of Bali.`,
	},

	CSSVariables: {
		'--seed-image': `url('https://ucarecdn.com/6bc9a575-c48c-409d-9351-53947c26c61c/-/preview/600x414/')`,
		'--pondok-kopi-image': `url('https://ucarecdn.com/2f9ea7c3-0cc1-43e1-b26d-8ea9dfd855c8/-/preview/1000x666/')`,
		'--grinder-image': `url('https://ucarecdn.com/8dba19f5-fae2-4b1b-8f73-336aac5a96a9/-/preview/965x1000/')`,
		'--spoon-image': `url('https://ucarecdn.com/d4d63d57-b9eb-4f89-a861-ffbb9ee43090/-/preview/990x437/')`,
		'--coffee-cup-image': `url('https://ucarecdn.com/b01b96fd-572a-46ec-8a66-7723fdb6802d/-/preview/1000x494/')`,
		'--seed-size': '5rem',
	} as React.CSSProperties,

	seedCoord: {
		default: [
			{ top: '0%', left: '0%' },
			{ top: '20%', left: '15%' },
			{ top: '10%', left: '25%' },
			{ top: '15%', left: '75%' },
			{ top: '0%', left: '85%' },
			{ top: '0%', left: '60%' },
		],
		description: [
			{ top: '0%', left: '0%' },
			{ top: '25%', left: '15%' },
			{ top: '75%', left: '25%' },
			{ top: '60%', left: '75%' },
			{ top: '0%', left: '85%' },
			{ top: '0%', left: '60%' },
		],
	} satisfies Record<string, Array<{ top: string; left: string }>>,
};
