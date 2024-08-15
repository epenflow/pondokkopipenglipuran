import React from 'react';

interface MappingWrapperProps<T> {
	array?: Array<T>;
	render: (item: T, index: number) => React.ReactNode;
}
export function MappingWrapper<T>({ array, render }: MappingWrapperProps<T>) {
	return React.Children.toArray(
		array?.map((item, index) => render(item, index)),
	);
}
