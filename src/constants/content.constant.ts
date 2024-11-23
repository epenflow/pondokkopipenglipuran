import { LIST_NAVIGATION, PREFIX_ROUTE } from "@/constants/route.constant";

export const HERO_CONTENT = {
	TITLE: "THE STORY",
	DESCRIPTIONS_TEXT_LIST: [
		"UNTOLD STORY",
		"BEGINS WITH",
		"A SINGLE CUP",
		"OF COFFEE",
	],
	LINK_LABEL: "Who We Are",
};

export const WHO_WE_ARE_CONTENT: {
	TITLE: string;
	LISTS: Array<string>;
} = {
	TITLE: "Who are we?",
	LISTS: [
		"Pondok Kopi was established by A.A Gde Joyti Rahadian and A.A Gde Krisna Adita in June 2017. This business is located in Penglipuran Tourism Village, specifically behind Karang Memadu. The name of the cafe is inspired by the name of Penglipuran Village, with the aim of attracting tourist visiting the village.",
		"In addition to supporting economic development and increasing tourist interest in visiting Penglipuran Village, Pondok Kopi also supports local farmers. The coffee beans produced by this cafe are sourced from local farmers, purchased in the form of green beans. These coffee beans are then processed at Pondok Kopi using traditional roasting methods",
	],
};

export const VIDEO_CONTENT: {
	TEXT: string;
	HREF: string;
} = {
	TEXT: "Nestled in the heart of the serene Penglipuran Village, Pondok Kopi offers more than just a cup of coffee – it provides an immersive experience into the rich cultural heritage of Bali.",
	HREF: "url",
};
export const NAVBAR_CONTENT: {
	LABEL: string;
	MENU: Array<string>;
	NAVIGATION: typeof LIST_NAVIGATION;
	SOCIALS: Array<{ LABEL: string; HREF: string }>;
} = {
	LABEL: "TESTING",
	MENU: ["Menu", "Close"],
	NAVIGATION: LIST_NAVIGATION,
	SOCIALS: [
		{
			LABEL: "Facebook",
			HREF: PREFIX_ROUTE.FACEBOOK,
		},
		{
			LABEL: "Instagram",
			HREF: PREFIX_ROUTE.INSTAGRAM,
		},
	],
};
