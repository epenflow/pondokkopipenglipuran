/**
 * Components
 */
import { AboutUs } from "@/app/_components/about-us/about-us";
import CoffeeStory from "@/app/_components/coffee-story/coffee-story";
import { Gallery } from "@/app/_components/gallery";
import { Hero } from "@/app/_components/hero/hero";
import Locations from "@/app/_components/locations/locations";
import VideoProfile from "@/app/_components/video-profile";

export default function Home() {
	return (
		<main>
			<Hero />
			<AboutUs />
			<Gallery />
			<VideoProfile />
			<CoffeeStory />
			<Locations />
		</main>
	);
}
