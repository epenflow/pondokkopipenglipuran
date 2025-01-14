const flags = {
	border: process.env.NODE_ENV === 'production',
	marker: process.env.NODE_ENV === 'development',
};
export default flags;
