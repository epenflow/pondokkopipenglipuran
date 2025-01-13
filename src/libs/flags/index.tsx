const flags = {
	border: process.env.NODE_ENV === 'development',
	marker: process.env.NODE_ENV === 'production',
};
export default flags;
