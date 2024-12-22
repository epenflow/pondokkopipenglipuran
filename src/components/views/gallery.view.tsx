import { GALLERY_CONTENT } from "@/libs/constant";
import React from "react";

const GalleryView: React.FC = () => {
	return (
		<article className="h-svh w-full">
			<h1 className="text-background mix-blend-difference">
				{GALLERY_CONTENT.LABEL}
			</h1>
		</article>
	);
};
GalleryView.displayName = "GalleryView";
export default GalleryView;
