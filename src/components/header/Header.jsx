'use client';
import React from 'react';
import styles from './header.module.css';
import Links from './links/Links';

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>OSHEAGA</div>
			<div className={styles.linkContainer}>
				<Links />
			</div>
		</div>
	);
};

export default Header;
