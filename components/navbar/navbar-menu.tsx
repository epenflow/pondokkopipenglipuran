import { MappingWrapper } from '@/lib/mapping-wrapper';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
type Navigation = {
	href: string;
	label: string;
};
const Navigation: Array<Navigation> = [
	{
		href: '#hero',
		label: 'Main',
	},
	{
		href: '#about-us',
		label: 'About Us',
	},
	{
		href: '#gallery',
		label: 'Gallery',
	},
	{
		href: '#coffee-story',
		label: 'coffee story',
	},
	{
		href: '#location',
		label: 'location',
	},
];
interface NavbarMenuProps extends React.HTMLAttributes<HTMLDivElement> {
	handleToggle: () => void;
}
export const NavbarMenu = React.forwardRef<HTMLDivElement, NavbarMenuProps>(
	({ className, handleToggle, ...rest }, ref) => {
		return (
			<div {...rest} ref={ref} className={cn('header--menu', className)}>
				<ul className="menu--wrapper">
					<MappingWrapper
						array={Navigation}
						render={({ href, label }, index) => (
							<li className="menu--item">
								<Link
									onClick={handleToggle}
									href={href}
									className="menu--link">
									{label}
								</Link>
							</li>
						)}
					/>
				</ul>
			</div>
		);
	},
);
