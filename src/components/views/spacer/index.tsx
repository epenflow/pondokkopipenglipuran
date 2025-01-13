const Spacer = () => {
	if (process.env.NODE_ENV === 'production') {
		return null;
	}

	return (
		<section className="h-svh bg-black w-full text-white flex items-center justify-center text-4xl">
			<h1>Spacer</h1>
		</section>
	);
};
export default Spacer;
