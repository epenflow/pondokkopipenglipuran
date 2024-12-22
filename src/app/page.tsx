import List from "@/components/base/list";
import VIEW from "@/components/views";

export default function Home() {
	return (
		<main>
			<List lists={Object.entries(VIEW)}>
				{([key, Component]) => <Component key={key} />}
			</List>
		</main>
	);
}
