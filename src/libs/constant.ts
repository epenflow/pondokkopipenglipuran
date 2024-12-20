export const PREFIX_ROUTE_ID = {
	MAIN: "hero",
	WHO_WE_ARE: "who-we-are",
	GALLERY: "gallery",
	VIDEO: "video",
	COFFEE_STORY: "coffee-story",
	LOCATION: "location",
};
export const PREFIX_ROUTE = {
	MAIN: `#${PREFIX_ROUTE_ID.MAIN}`,
	WHO_WE_ARE: `#${PREFIX_ROUTE_ID.WHO_WE_ARE}`,
	GALLERY: `#${PREFIX_ROUTE_ID.GALLERY}`,
	VIDEO: `#${PREFIX_ROUTE_ID.VIDEO}`,
	COFFEE_STORY: `#${PREFIX_ROUTE_ID.COFFEE_STORY}`,
	LOCATION: `#${PREFIX_ROUTE_ID.LOCATION}`,
	FACEBOOK:
		"https://web.facebook.com/p/Pondok-Kopi-Penglipuran-100033954373349/?_rdc=1&_rdr&checkpoint_src=any",
	INSTAGRAM: "https://www.instagram.com/pondokkopipenglipuran/",
} satisfies Record<string, string>;

export const LIST_NAVIGATION: Array<{
	LABEL: string;
	HREF: string;
}> = [
	{
		LABEL: "Main",
		HREF: PREFIX_ROUTE.MAIN,
	},
	{
		LABEL: "Who We Are",
		HREF: PREFIX_ROUTE.WHO_WE_ARE,
	},
	{
		LABEL: "Gallery",
		HREF: PREFIX_ROUTE.GALLERY,
	},
	{
		LABEL: "Coffee Story",
		HREF: PREFIX_ROUTE.COFFEE_STORY,
	},
	{
		LABEL: "Location",
		HREF: PREFIX_ROUTE.LOCATION,
	},
];

export const TIME_FH_MM_SS_12H = "hh:mm:s aa"; /// 01:00:00 AM
export const TIME_SH_MM_SS_12H = "h:mm:ss aa"; /// 1:00:00 AM
export const TIME_FS = "ss";
export const TIME_SS = "s";

const TIME_UNITS = 60;
export const ONE_SECOND_IN_MS = 1_000;
export const ONE_MINUTE_IN_MS = ONE_SECOND_IN_MS * TIME_UNITS;
export const ONE_HOUR_IN_MS = ONE_MINUTE_IN_MS * TIME_UNITS;

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
	HREF: "https://www.youtube.com/embed/H9Ledm14Nw0?si=Whlqcg04CbItzT0W",
};
type ImageInfo = {
	HREF: string;
	ALT: string;
};
export const COFFEE_STORY_CONTENT: {
	COFFEE_BEAN: ImageInfo;
	COFFEE_CUP: ImageInfo;
	LATTE_ART: ImageInfo;
	GRINDER: ImageInfo;
	SPOON: ImageInfo;
	CULTURE: string;
	JOURNEY: string;
	STORY: string;
} = {
	CULTURE: `Shaping the Coffee Culture`,
	JOURNEY: `A Journey of a Thousand Miles Begins with a Single Cup of Coffee.`,
	STORY: `A cup of coffee, rich and bold, A Story, beautifully told.`,
	COFFEE_BEAN: {
		HREF: `https://ucarecdn.com/6bc9a575-c48c-409d-9351-53947c26c61c/-/preview/600x414/`,
		ALT: "Coffee Bean",
	},
	COFFEE_CUP: {
		HREF: `https://ucarecdn.com/b01b96fd-572a-46ec-8a66-7723fdb6802d/-/preview/1000x494/`,
		ALT: "Coffee Cup",
	},
	LATTE_ART: {
		HREF: `https://ucarecdn.com/f0f7d5a5-bede-4db2-86ce-db9ebcc7c383/-/preview/1000x1000/`,
		ALT: "Latte Cup",
	},
	GRINDER: {
		HREF: `https://ucarecdn.com/8dba19f5-fae2-4b1b-8f73-336aac5a96a9/-/preview/965x1000/`,
		ALT: `Coffee Grinder`,
	},
	SPOON: {
		HREF: `https://ucarecdn.com/d4d63d57-b9eb-4f89-a861-ffbb9ee43090/-/preview/990x437/`,
		ALT: `Spoon`,
	},
};
export const NAVBAR_CONTENT: {
	LABEL: string;
	MENU: Array<string>;
	NAVIGATION: typeof LIST_NAVIGATION;
	SOCIALS: Array<{ LABEL: string; HREF: string }>;
} = {
	LABEL: "Pondok Kopi",
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
