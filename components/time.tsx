'use client';

import dynamic from 'next/dynamic';
import React from 'react';

function formatDate(date: Date) {
	const formatedDate = new Intl.DateTimeFormat('en-ID', {
		minute: '2-digit',
		hour: '2-digit',
		second: '2-digit',
		hour12: true,
	}).format(date);

	return formatedDate;
}
const Time = () => {
	const [date, setDate] = React.useState<Date>(new Date());
	React.useEffect(() => {
		const time = setTimeout(() => {
			const newDate = new Date();
			setDate((prev) => {
				prev = newDate;
				return prev;
			});
		}, 1000);
		return () => {
			clearInterval(time);
		};
	});
	return <div>{formatDate(date)}</div>;
};
export default dynamic(() => Promise.resolve(Time), {
	ssr: false,
});
