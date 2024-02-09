import Image from 'next/image';
import Navbar from './components/header/Navbar';
import Hero from './components/sections/Hero';
import Video from './components/sections/Video';
import RegisterGsap from './utils/components/RegisterGsap';
import LenisScroll from './utils/components/LenisScroll';
import Gallery from './components/sections/Gallery';

export default function Home() {
	return (
		<>
			<RegisterGsap>
				<LenisScroll>
					<Navbar />
					<main className='overflow-hidden'>
						<Hero />
						<Video />
						<Gallery />
						{Array.from({ length: 2 }).map((_, item) => (
							<section
								className='h-screen w-screen'
								key={item}
								style={{
									backgroundColor: `${
										item % 2 === 0 ? 'black' : 'white'
									}`,
								}}></section>
						))}
					</main>
				</LenisScroll>
			</RegisterGsap>
		</>
	);
}
