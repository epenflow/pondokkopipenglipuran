import React from "react";

interface ListProps<T> {
	lists?: Array<T>;
	children?: (list: T, index: number) => React.ReactNode;
	render?: (list: T, index: number) => React.ReactNode;
}
function List<T>({ lists, children, render }: ListProps<T>) {
	if (children) {
		return React.Children.toArray(
			lists?.map((list, index) => children(list, index)),
		);
	}

	if (render) {
		return lists?.map((list, index) => render(list, index));
	}

	return null;
}
export default List;
