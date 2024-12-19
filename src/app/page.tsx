import { List } from "@/components/base";
import VIEW from "@/components/views";

export default function Home() {
	return (
		<main className="mt-[56.8px]">
			<List lists={Object.entries(VIEW)}>
				{([key, Component]) => <Component key={key} />}
			</List>
		</main>
	);
}
