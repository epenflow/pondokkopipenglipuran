export const HeroVideo = () => {
	return (
		<div className="h-1/2 border-b">
			<video
				className="h-full w-full object-cover grayscale"
				autoPlay
				loop
				muted>
				<source src="https://ucarecdn.com/6f53fbbc-21d6-4124-b8ab-6ce746212650/" />
			</video>
		</div>
	);
};
