import Image from 'next/image';
import Navbar from './components/header/Navbar';
import Hero from './components/sections/Hero';
import Video from './components/sections/Video';
import RegisterGsap from './utils/components/RegisterGsap';
import LenisScroll from './utils/components/LenisScroll';
import Gallery from './components/sections/Gallery';
import Footer from './components/Footer';
import VideoSections from './components/sections/VideoSections';
import HeroSections from './components/sections/HeroSections';

export default function Home() {
	return (
		<>
			<RegisterGsap>
				<main className='overflow-x-hidden'>
					<LenisScroll>
						<HeroSections />
						<VideoSections />
						<Gallery />
					</LenisScroll>
				</main>
				<Footer />
			</RegisterGsap>
		</>
	);
}
