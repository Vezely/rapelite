'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import styles from './links.module.css';
import { useTheme } from '../../themeProvider/ThemeProvider';
import Image from 'next/image';

const links = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'Evènements',
		path: '/events',
	},
	{
		title: 'Contact',
		path: '/contact/artist',
	},
];

const Links = () => {
	const pathName = usePathname();
	const [open, setOpen] = useState(false);
	const [theme, setTheme] = useTheme();
	const handleThemeChange = (event) => {
		setTheme(event.target.checked ? 'Sombre' : 'Lumière');
	};
	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((link, index) => (
					<Link className={pathName === link.path ? `${styles.active}` : ''} href={link.path} key={index}>
						{link.title}
					</Link>
				))}
			</div>
			<div className={styles.toggle_switch}>
				<input type='checkbox' id='toggle' className={styles.toggle_input} checked={theme === 'Sombre'} onChange={handleThemeChange} />
				<label htmlFor='toggle' data_theme={theme} className={styles.toggle_label}></label>
			</div>
			<svg className={styles.menuButton} onClick={() => setOpen(!open)} width='32' height='32' fill='#000000' viewBox='0 0 256 256'>
				<path d='M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z'></path>
			</svg>
			{open && (
				<div className={styles.mobileLinks}>
					{links.map((link, index) => (
						<Link className={pathName === link.path ? `${styles.active}` : ''} href={link.path} key={index} onClick={() => setOpen(!open)}>
							{link.title}
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default Links;
