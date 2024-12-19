import dynamic from "next/dynamic";
import React from "react";

const MAIN_VIEW_LIST: Record<string, React.ComponentType<object>> = {
	HeroView: dynamic(() => import("@/components/views/hero.view")),
	WhoWeAre: dynamic(() => import("@/components/views/who-we-are.view")),
	Video: dynamic(() => import("@/components/views/video.view")),
};
export default MAIN_VIEW_LIST;
