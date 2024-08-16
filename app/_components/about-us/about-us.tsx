import { MappingWrapper } from "@/lib/mapping-wrapper";

const _Text = {
	heading: `Who are we?`,
	main: [
		`Pondok Kopi was established by A.A Gde Joyti Rahadian and A.A Gde Krisna Adita in June 2017. This business is located in Penglipuran Tourism Village, specifically behind Karang Memadu. The name of the cafe is inspired by the name of Penglipuran Village, with the aim of attracting tourist visiting the village.`,
		`In addition to supporting economic development and increasing tourist interest in visiting Penglipuran Village, Pondok Kopi also supports local farmers. The coffee beans produced by this cafe are sourced from local farmers, purchased in the form of green beans. These coffee beans are then processed at Pondok Kopi using traditional roasting methods`,
	],
	footer: "coffee journey",
};
export const AboutUs = () => {
	return (
		<section
			id="about-us"
			className="h-fit w-full border-b border-t bg-lush-white pb-5 pt-32 lg:h-screen lg:pt-24">
			<div className="mx-auto w-4/5 space-y-2 lg:w-1/2">
				<h1 className="text-lg lg:text-2xl">{_Text.heading}</h1>
				<MappingWrapper
					array={_Text.main}
					render={(text, index) => (
						<p
							key={index}
							className="text-justify text-xl text-foreground/90 lg:text-3xl">
							{text}
						</p>
					)}
				/>
			</div>
		</section>
	);
};
