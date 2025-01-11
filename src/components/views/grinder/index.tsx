'use client';
import React from 'react';
import styles from './base.module.scss';
const Grinder = () => {
	const { CSSVariables } = resoureces;

	return (
		<section
			style={CSSVariables}
			className={styles['content--outer']}>
			<div className={styles['content--container']}>
				<div className={styles['content--image']} />
				<div className={styles['coffee--seed-step']} />
				<div className={styles['spoon--step']} />
			</div>
		</section>
	);
};
const resoureces = {
	CSSVariables: {
		'--content-image': `url('https://ucarecdn.com/3a45b0ab-1c1a-44f3-8024-871127da05c3/-/preview/970x999/')`,
	} as React.CSSProperties,
};
export default Grinder;
