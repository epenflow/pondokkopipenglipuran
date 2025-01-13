export function isObject(data: unknown) {
	const type = typeof data;
	return type === 'function' || (type === 'object' && !!data);
}
export function hasWindowObject() {
	return typeof window !== 'undefined' && window.document;
}
export function isFunction(data: unknown) {
	return typeof data === 'function';
}
