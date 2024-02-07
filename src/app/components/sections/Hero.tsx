import React from 'react';

const Hero = () => {
	return (
		<section className='h-screen w-screen flex justify-center'>
			<div className='flex flex-col w-[460px] gap-2 relative p-4'>
				<div className='h-[340px] w-full bg-black rounded-md border-primary'></div>
				<h1 className='capitalize text-justify text-5xl'>
					Pondok Kopi Penglipuran
				</h1>
				<p className='py-4 text-justify'>
					Pondok Kopi Penglipuran is a cozy coffee shop located in the
					heart of Desa Penglipuran, Bali. Our coffee shop is the
					perfect place to relax and unwind while enjoying a cup of
					freshly brewed coffee.
				</p>
				<p className='text-center py-10'>
					We brew fresh, delicious coffee in-house every day.☕
				</p>
			</div>
		</section>
	);
};

export default Hero;
