import Image from 'next/image';
import Navbar from './components/header/Navbar';
import Hero from './components/sections/Hero';
import Video from './components/sections/Video';
import RegisterGsap from './utils/components/RegisterGsap';
import LenisScroll from './utils/components/LenisScroll';
import Gallery from './components/sections/Gallery';
import Footer from './components/Footer';
import VideoSections from './components/sections/VideoSections';

export default function Home() {
	return (
		<>
			<RegisterGsap>
				<Navbar />
				<main className='overflow-hidden'>
					<LenisScroll>
						<Hero />
						<VideoSections />
						{/* <Video /> */}
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
					</LenisScroll>
				</main>
				<Footer />
			</RegisterGsap>
		</>
	);
}
