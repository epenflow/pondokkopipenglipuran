import React from "react";
import { MAIN_VIEW_LIST } from "@/components/views";
import { List } from "@/components/base";

export default function Home() {
	return (
		<main className="mt-[56.8px]">
			<List lists={MAIN_VIEW_LIST}>
				{(Component, key) => <Component key={key} />}
			</List>
		</main>
	);
}
