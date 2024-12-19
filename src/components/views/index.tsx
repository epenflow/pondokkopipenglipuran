import dynamic from "next/dynamic";
import React from "react";

const MAIN_VIEW_LIST: Record<string, React.ComponentType<{}>> = {
	HeroView: dynamic(() => import("@/components/views/hero.view")),
	WhoWeAre: dynamic(() => import("@/components/views/who-we-are.view")),
};
export default MAIN_VIEW_LIST;
