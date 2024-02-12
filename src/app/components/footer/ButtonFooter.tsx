import React from 'react';
interface Props {
	children: React.ReactNode;
}
const ButtonFooter: React.FC<Props> = ({ children }) => {
	return (
		<button className='p-2 border-[1px] border-solid border-default-200 uppercase font-medium hover:italic hover:underline'>
			{children}
		</button>
	);
};

export default ButtonFooter;
