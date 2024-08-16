import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { MappingWrapper } from "@/lib/mapping-wrapper";
import Image from "next/image";
const images = [
	"2f9ea7c3-0cc1-43e1-b26d-8ea9dfd855c8",
	"a11d3915-f77a-4445-9b70-a2d218a1c9d2",
	"865a25f0-234f-477b-beff-1a026afb6904",
	"23eebf2e-dbcc-4454-a88f-a08e283c0b96",
	"43f772ae-033d-45c5-8063-5b763278bd7f",
	"e7b26bd4-1aa4-4ab0-b3ff-dedd854e612f",
	"376e46df-3d32-4685-9cde-98a823048534",
	"fc8e0447-b7cf-4cd1-876f-c3464f6ba6b4",
	"b645d9df-5b71-42e4-9775-1bf23bc8f38f",
	"c90d9d45-b333-45fd-9077-cd0c466b51da",
	"180b8bea-b6f9-4ed1-a44d-8ad5cc97d502",
	"367d507f-f79c-47fc-adb4-4e5c342beb5d",
	"31228eb2-3ada-4e92-a387-9325d82551ed",
	"c8685264-7b5d-47e7-af39-3db3d71d15fd",
	"cf87408c-dc75-4151-99db-91c180b83ae8",
	"213daea4-c571-4cf5-98a0-54435e40770c",
	"918c7167-1cee-46bf-bf01-b1acad0a78af",
	"ab3bcc3a-bc76-4df7-ac7a-ea52aa6a7d4f",
	"b7335594-1bb7-49ac-9b6a-91e859a9073c",
	"d6b0f548-3eb9-472b-b5e1-8ab0ca403184",
];
export const Gallery = () => {
	return (
		<section
			id="gallery"
			className="flex h-screen w-full flex-col items-center justify-evenly bg-foreground/95">
			<Carousel className="mx-auto mt-5 w-4/5 space-y-5">
				<h1 className="text-6xl text-lush-white lg:text-9xl">Gallery</h1>
				<CarouselContent>
					<MappingWrapper
						array={images}
						render={(image, index) => (
							<CarouselItem key={index} className="h-full w-full lg:basis-1/2">
								<Image
									src={`https://ucarecdn.com/${image}/IMG-${index}.JPG`}
									alt="pondok kopi"
									width={0}
									height={0}
									sizes="100vh"
									className="h-full w-full rounded-xl object-contain"
								/>
							</CarouselItem>
						)}
					/>
				</CarouselContent>
				<h1 className="text-center text-lush-white">(swipe to scroll)</h1>
			</Carousel>
		</section>
	);
};
