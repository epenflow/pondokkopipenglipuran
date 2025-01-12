'use client';
import { useGSAP } from '@gsap/react';
import React from 'react';
import './base.scss';
const WhoWeAre = () => {
	const { CSSVariables, heading, description, texts } = resources;
	const scope = React.useRef<HTMLElement>(null);
	useGSAP(() => {}, { scope });
	return (
		<section
			ref={scope}
			style={CSSVariables}
			className={'about'}>
			<div className={'content--container'}>
				<div className={'content--image'} />
				<div className={'content--inner'}>
					<h1 className={'heading--content'}>{heading}</h1>
					<p className={'text--content'}>{texts[0]}</p>
					<p className={'text--content'}>{texts[1]}</p>
				</div>
				<div className={'spoon--image'} />
				<p className={'text--content'}>{description}</p>
			</div>
		</section>
	);
};

const resources = {
	heading: `Who Are We?`,
	texts: [
		`Pondok Kopi was established by A.A Gde Joyti Rahadian and A.A Gde Krisna Adita in June 2017. This business is located in Penglipuran Tourism Village, specifically behind Karang Memadu. The name of the cafe is inspired by the name of Penglipuran Village, with the aim of attracting tourist visiting the village.`,
		`In addition to supporting economic development and increasing tourist interest in visiting Penglipuran Village, Pondok Kopi also supports local farmers. The coffee beans produced by this cafe are sourced from local farmers, purchased in the form of green beans. These coffee beans are then processed at Pondok Kopi using traditional roasting methods`,
	],
	description: `Nestled in the heart of the serene Penglipuran Village, Pondok Kopi offers more than just a cup of coffee – it provides an immersive experience into the rich cultural heritage of Bali.`,

	CSSVariables: {
		'--content-image': `url('https://ucarecdn.com/b7335594-1bb7-49ac-9b6a-91e859a9073c/-/preview/1000x666/')`,
		'--spoon-image': `url('https://ucarecdn.com/ea9a2d6c-87a6-4487-b0a3-5f428e33adc7/-/preview/948x185/')`,
	} as React.CSSProperties,
};
export default WhoWeAre;
