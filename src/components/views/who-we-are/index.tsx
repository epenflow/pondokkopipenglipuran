'use client';
import { useGSAP } from '@gsap/react';
import { Flip, gsap, ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

import './base.css';
interface Props {
	scope: React.RefObject<HTMLElement | null>;
}
const WhoWeAre: React.FC<Props> = ({ scope }) => {
	const { texts, title, beans } = resources;
	const CSSVariables = {
		'--coffee-bean-image': `url('https://ucarecdn.com/6bc9a575-c48c-409d-9351-53947c26c61c/-/preview/600x414/')`,
		'--grinder-image': `url('https://ucarecdn.com/8dba19f5-fae2-4b1b-8f73-336aac5a96a9/-/preview/965x1000/')`,
	} as React.CSSProperties;

	return (
		<section
			style={CSSVariables}
			ref={scope}
			className="about-view">
			{beans.map(({ x, y }, key) => {
				const $CSSVariables = {
					'--bean-x': x,
					'--bean-y': y,
				} as React.CSSProperties;
				return (
					<div
						data-bean={key}
						key={key}
						style={$CSSVariables}
						className="coffee--bean"
					/>
				);
			})}

			<div className="about--content-outer">
				<div
					data-content
					className="about--content-inner">
					<div className="bean--stopper-one" />
					<h1 className="about--heading">{title}</h1>
					{texts.map((text, key) => (
						<div
							key={key}
							className="about--text text-justify">
							<p>{text}</p>
						</div>
					))}
				</div>
			</div>

			<div className="about--content-outer">
				<div
					data-content
					className="about--content-inner">
					<div className="about--text text-center">
						<p>
							Nestled in the heart of the serene Penglipuran Village, Pondok Kopi
							offers more than just a cup of coffee – it provides an immersive
							experience into the rich cultural heritage of Bali.
						</p>
					</div>
				</div>
				{beans.map(({ x, y }, key) => {
					const $CSSVariables = {
						'--bean-x': x,
						'--bean-y': y,
					} as React.CSSProperties;
					return (
						<div
							key={key}
							style={$CSSVariables}
							className="bean--stopper-two"
						/>
					);
				})}
			</div>

			<div
				data-grinder-trigger
				className="about--content-outer">
				<div
					data-content
					className="grinder"
				/>
				<div className="bean--stopper-tree" />
			</div>
		</section>
	);
};
export default hoc(WhoWeAre);

function hoc<T extends object>(Component: React.ComponentType<T & Props>) {
	return function HOC(props: T) {
		const scope = React.useRef<HTMLElement>(null);
		useGSAP(
			() => {
				const contents: HTMLElement[] = gsap.utils.toArray('[data-content]');

				contents.forEach((content) => {
					gsap.to(content, {
						filter: 'blur(0rem)',
						ease: 'sine.inOut',
						scrollTrigger: {
							trigger: content,
							start: 'center center',
							end: 'bottom center',
							scrub: 1.5,
							// markers: process.env.NODE_ENV === 'development',
						},
					});
				});

				gsap.to('.grinder', {
					rotate: 380,
					scrollTrigger: {
						pin: scope.current,
						trigger: '[data-grinder-trigger]',
						start: 'top top',
						end: 'bottom',
						markers: process.env.NODE_ENV === 'development',
						scrub: 1.5,
					},
				});
			},
			{ scope },
		);

		useGSAP(
			() => {
				const beans: HTMLElement[] = gsap.utils.toArray('[data-bean]');
				const stepperTwo: HTMLElement[] = gsap.utils.toArray('.bean--stopper-two');
				const statesTwo = stepperTwo.map((state) => Flip.getState(state));
				const config = { duration: 1, ease: 'sine.inOut' };

				const flipTimeline = gsap.timeline({
					scrollTrigger: {
						trigger: scope.current,
						start: 'top center',
						end: 'bottom bottom',
						scrub: 1.5,
						// markers: process.env.NODE_ENV === 'development',
					},
				});

				beans.forEach((bean) => {
					flipTimeline.add(
						Flip.fit(bean, '.bean--stopper-one', {
							...config,
							filter: 'blur(0.5rem)',
						}) as GSAPAnimation,
						'0',
					);
				});
				statesTwo.forEach((state, index) => {
					flipTimeline.add(
						Flip.fit(beans[index], state, {
							...config,
							filter: 'blur(0rem)',
							rotate: 380,
						}) as GSAPAnimation,
						'1',
					);
				});
				beans.forEach((bean) => {
					flipTimeline.add(
						Flip.fit(bean, '.bean--stopper-tree', {
							...config,
							filter: 'blur(0rem)',
						}) as GSAPAnimation,
						'2',
					);
				});
			},
			{ scope },
		);

		return <Component {...{ ...props, scope }} />;
	};
}
const resources = {
	title: 'Who are we?',
	texts: [
		`Pondok Kopi was established by A.A Gde Joyti Rahadian and A.A Gde Krisna Adita in June 2017. This business is located in Penglipuran Tourism Village, specifically behind Karang Memadu. The name of the cafe is inspired by the name of Penglipuran Village, with the aim of attracting tourist visiting the village.`,
		`In addition to supporting economic development and increasing tourist interest in visiting Penglipuran Village, Pondok Kopi also supports local farmers. The coffee beans produced by this cafe are sourced from local farmers, purchased in the form of green beans. These coffee beans are then processed at Pondok Kopi using traditional roasting methods`,
	],
	seed: {
		alt: 'coffee seed',
		src: 'https://ucarecdn.com/22a5b518-574d-4838-8fde-0d9d3220c0b2/-/preview/1000x696/',
	},
	beans: [
		{
			x: '50%',
			y: '5%',
		},
		{
			y: '15%',
			x: '15%',
		},
		{
			y: '25%',
			x: '35%',
		},
		{
			y: '0%',
			x: '5%',
		},
		{
			y: '0%',
			x: '60%',
		},
	] satisfies Array<{
		x: string;
		y: string;
	}>,
};
