import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ClassValue[]) {
	return twMerge(clsx(args));
}

export function getPropertyValue(property: string) {
	return getComputedStyle(document.documentElement).getPropertyValue(property);
}

export function splitText(text: string, type: 'char' | 'word') {
	const separator = type === 'char' ? '' : /(?=\s)|(?<=\s)/;
	return text.split(separator);
}

export function getComputeGridDimensions(size: number) {
	const row = Math.ceil(window.innerWidth / size);
	const column = Math.ceil(window.innerHeight / size);
	const total = row * column;
	const width = row * size;
	const height = column * size;

	return { row, column, total, width, height };
}
