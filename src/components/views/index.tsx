import React from "react";
import { PREFIX_ROUTE_ID } from "@/constants";

/**
 *
 * ----------------------------------------------------------
 * Base View Components
 * ----------------------------------------------------------
 *
 */
import { HeroView } from "@/components/views/hero.view";
import { WhoWeAreView } from "@/components/views/who-we-are.view";
import { GalleryView } from "@/components/views/gallery.view";
import { VideoView } from "@/components/views/video.view";
import { CoffeeStoryView } from "@/components/views/coffee-story.view";
import { LocationView } from "@/components/views/location.view";

type Component = () => React.ReactNode;
export const MAIN_VIEW_LIST: Array<Component> = [
	() => (
		<HeroView
			{...{
				"aria-label": PREFIX_ROUTE_ID.MAIN,
				id: PREFIX_ROUTE_ID.MAIN,
			}}
		/>
	),
	() => (
		<WhoWeAreView
			{...{
				"aria-label": PREFIX_ROUTE_ID.WHO_WE_ARE,
				id: PREFIX_ROUTE_ID.WHO_WE_ARE,
			}}
		/>
	),
	() => (
		<GalleryView
			{...{
				"aria-label": PREFIX_ROUTE_ID.GALLERY,
				id: PREFIX_ROUTE_ID.GALLERY,
			}}
		/>
	),
	() => (
		<VideoView
			{...{
				"aria-label": PREFIX_ROUTE_ID.VIDEO,
				id: PREFIX_ROUTE_ID.VIDEO,
			}}
		/>
	),
	() => (
		<CoffeeStoryView
			{...{
				"aria-label": PREFIX_ROUTE_ID.COFFEE_STORY,
				id: PREFIX_ROUTE_ID.COFFEE_STORY,
			}}
		/>
	),
	() => (
		<LocationView
			{...{
				"aria-label": PREFIX_ROUTE_ID.LOCATION,
				id: PREFIX_ROUTE_ID.LOCATION,
			}}
		/>
	),
];
