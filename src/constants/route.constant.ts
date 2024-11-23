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
