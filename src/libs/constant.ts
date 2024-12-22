import type { Metadata } from "next";

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
	IMG_ONE: {
		HREF: `https://ucarecdn.com/d6b0f548-3eb9-472b-b5e1-8ab0ca403184/-/preview/1000x666/`,
		ALT: `Pemandangan Pondok Kopi Penglipuran dengan arsitektur tradisional Bali dan pepohonan hijau.`,
	},
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

export const GALLERY_CONTENT: {
	LABEL: string;
	GALLERY: ImageInfo[];
} = {
	LABEL: "Gallery",
	GALLERY: [
		{
			HREF: "https://ucarecdn.com/d6b0f548-3eb9-472b-b5e1-8ab0ca403184/-/preview/1000x666/",
			ALT: "Pemandangan Pondok Kopi Penglipuran dengan arsitektur tradisional Bali dan pepohonan hijau.",
		},
		{
			HREF: "https://ucarecdn.com/918c7167-1cee-46bf-bf01-b1acad0a78af/-/preview/1000x666/",
			ALT: "Area tempat duduk outdoor yang nyaman di Pondok Kopi, ideal untuk menikmati kopi dan suasana Penglipuran.",
		},
		{
			HREF: "https://ucarecdn.com/b7335594-1bb7-49ac-9b6a-91e859a9073c/-/preview/1000x666/",
			ALT: "Pondok Kopi Penglipuran, tempat ideal untuk bersantai dan menikmati kopi di tengah desa wisata.",
		},
		{
			HREF: "https://ucarecdn.com/ab3bcc3a-bc76-4df7-ac7a-ea52aa6a7d4f/-/preview/1000x666/",
			ALT: "Secangkir kopi hangat di meja kayu Pondok Kopi, menciptakan suasana yang hangat dan akrab.",
		},
		{
			HREF: "https://ucarecdn.com/213daea4-c571-4cf5-98a0-54435e40770c/-/preview/1000x666/",
			ALT: "Interior Pondok Kopi dengan dekorasi tradisional Bali, memberikan pengalaman ngopi yang autentik.",
		},
		{
			HREF: "https://ucarecdn.com/c8685264-7b5d-47e7-af39-3db3d71d15fd/-/preview/1000x666/",
			ALT: "Suasana santai di Pondok Kopi Penglipuran, cocok untuk melepaskan penat setelah berkeliling desa.",
		},
		{
			HREF: "https://ucarecdn.com/cf87408c-dc75-4151-99db-91c180b83ae8/-/preview/1000x666/",
			ALT: "Pengunjung menikmati kopi dan alunan musik di Pondok Kopi Penglipuran.",
		},
		{
			HREF: "https://ucarecdn.com/31228eb2-3ada-4e92-a387-9325d82551ed/-/preview/1000x666/",
			ALT: "Detail meja dan kursi kayu di Pondok Kopi, menciptakan suasana yang nyaman dan natural.",
		},
		{
			HREF: "https://ucarecdn.com/b0ac6fe8-a7a7-475c-8d48-b6c80e6184df/-/preview/1000x666/",
			ALT: "Secangkir kopi hangat mengepul di Pondok Kopi Penglipuran.",
		},
		{
			HREF: "https://ucarecdn.com/cf07b13d-7f8b-48e9-b1b5-c3f830033311/-/preview/1000x666/",
			ALT: "Kopi spesial disajikan di Pondok Kopi Penglipuran.",
		},
		{
			HREF: "https://ucarecdn.com/180b8bea-b6f9-4ed1-a44d-8ad5cc97d502/-/preview/1000x666/",
			ALT: "Barista profesional Pondok Kopi sedang menyiapkan pesanan kopi.",
		},
		{
			HREF: "https://ucarecdn.com/367d507f-f79c-47fc-adb4-4e5c342beb5d/-/preview/1000x666/",
			ALT: "Barista Pondok Kopi dengan terampil meracik kopi untuk pengunjung.",
		},
		{
			HREF: "https://ucarecdn.com/b645d9df-5b71-42e4-9775-1bf23bc8f38f/-/preview/1000x666/",
			ALT: "Close-up barista Pondok Kopi sedang menuangkan susu untuk latte art.",
		},
		{
			HREF: "https://ucarecdn.com/376e46df-3d32-4685-9cde-98a823048534/-/preview/1000x666/",
			ALT: "Suasana hangat dan akrab di Pondok Kopi Penglipuran.",
		},
		{
			HREF: "https://ucarecdn.com/c90d9d45-b333-45fd-9077-cd0c466b51da/-/preview/1000x666/",
			ALT: "Tempat yang nyaman untuk bersantai dan menikmati pemandangan di Pondok Kopi.",
		},
		{
			HREF: "https://ucarecdn.com/fc8e0447-b7cf-4cd1-876f-c3464f6ba6b4/-/preview/1000x666/",
			ALT: "Suasana tenang dan damai di Pondok Kopi Penglipuran.",
		},
		{
			HREF: "https://ucarecdn.com/e7b26bd4-1aa4-4ab0-b3ff-dedd854e612f/-/preview/1000x666/",
			ALT: "Pondok Kopi Penglipuran dengan latar belakang rumah adat Bali yang khas.",
		},
		{
			HREF: "https://ucarecdn.com/43f772ae-033d-45c5-8063-5b763278bd7f/-/preview/1000x666/",
			ALT: "Pondok Kopi Penglipuran, destinasi kopi yang wajib dikunjungi di Bangli.",
		},
		{
			HREF: "https://ucarecdn.com/2f9ea7c3-0cc1-43e1-b26d-8ea9dfd855c8/-/preview/1000x666/",
			ALT: "Pondok Kopi Penglipuran, hidden gem di Bali yang menawarkan kopi nikmat dan suasana pedesaan yang asri.",
		},
		{
			HREF: "https://ucarecdn.com/a11d3915-f77a-4445-9b70-a2d218a1c9d2/-/preview/1000x666/",
			ALT: "Menikmati kopi di Pondok Kopi, hidden gem di Penglipuran, Bangli.",
		},
		{
			HREF: "https://ucarecdn.com/23eebf2e-dbcc-4454-a88f-a08e283c0b96/-/preview/1000x666/",
			ALT: "Pondok Kopi Penglipuran terletak di Karang Memadu, menawarkan suasana yang tenang dan alami.",
		},
		{
			HREF: "https://ucarecdn.com/865a25f0-234f-477b-beff-1a026afb6904/-/preview/1000x666/",
			ALT: "Pondok Kopi, hidden gem di Penglipuran, Bangli, Bali dengan suasana pedesaan yang otentik.",
		},
	],
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
export const METADATA: Metadata = {
	title: "Pondok Kopi - Experience Balinese Coffee in Penglipuran Village",
	description: `Discover the unique charm of Pondok Kopi, a coffee sanctuary nestled in the heart of Karang Memadu, Penglipuran Village, Bali. Immerse yourself in the rich cultural heritage of Bali while enjoying our meticulously crafted coffee offerings. Explore our story, savor our flavors, and experience the tradition and innovation that make Pondok Kopi truly special.`,
	openGraph: {
		type: "website",
		siteName: "Pondok Kopi Penglipuran",
		title: "Pondok Kopi - Experience Balinese Coffee in Penglipuran Village",
		countryName: "Indonesia",
		description: `Discover the unique charm of Pondok Kopi, a coffee sanctuary nestled in the heart of Karang Memadu, Penglipuran Village, Bali. Immerse yourself in the rich cultural heritage of Bali while enjoying our meticulously crafted coffee offerings. Explore our story, savor our flavors, and experience the tradition and innovation that make Pondok Kopi truly special.`,
		images: [
			"https://ucarecdn.com/d6b0f548-3eb9-472b-b5e1-8ab0ca403184/-/preview/1000x666/",
		],
	},
	keywords:
		"coffee shop, penglipuran village, balinese coffee, karang memadu, coffee experience, bali culture, coffee shop bali, traditional coffee",
	applicationName: "Pondok Kopi Penglipuran",
	publisher: "Pondok Kopi",
};
