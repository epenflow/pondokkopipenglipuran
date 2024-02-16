'use client';
import React from 'react';
import ScrollProgress from '../ScrollProgress';
import ButtonFooter from './ButtonFooter';
const CONTENT_TEXT = {
	heading: 'follow us on social media',
	pone: 'Stay connected with us on social media and get to know more about Pondok Kopi Penglipuran.',
	ptwo: 'Pondok Kopi Penglipuran was founded with a mission to bring the finest Indonesian coffee to the world. We source our beans directly from local farmers, ensuring the highest quality and supporting sustainable farming practices.',
};
const Footer = () => {
	const [header, setHeader] = React.useState<number>(0);
	React.useEffect(() => {
		const headerHeight =
			document.querySelector('#header__wrapper')?.clientHeight || 0;
		setHeader(headerHeight);
	}, [header]);
	return (
		<footer
			className='overflow-x-hidden bg-default-200 font-medium'
			id='footer-sections'>
			<div
				className='w-screen text-black p-4 gap-5 flex lg:flex-row flex-col items-center justify-center'
				style={{
					marginBottom: `${header}px`,
				}}>
				<p className='text-justify lg:w-1/2 w-full p-2'>
					{CONTENT_TEXT.ptwo}
				</p>
				<div className='flex flex-col gap-5 p-2'>
					<h1 className='uppercase text-5xl text-justify lg:text-start'>
						{CONTENT_TEXT.heading}
					</h1>
					<p className='text-justify lg:text-start'>
						{CONTENT_TEXT.pone}
					</p>
					<div className='flex flex-row justify-between'>
						<ButtonFooter>facebook</ButtonFooter>
						<ButtonFooter>instagram</ButtonFooter>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
