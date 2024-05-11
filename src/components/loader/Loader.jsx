'use client';
import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
	return (
		<div className={styles.card}>
			<div className={`${styles.card__skeleton} ${styles.card__description}`}> </div>

			<div className={styles.contenu}>
				<div className={`${styles.card__skeleton} ${styles.card__title}`}></div>
				<div className={`${styles.card__skeleton} ${styles.card__title}`}></div>
				<div className={`${styles.card__skeleton} ${styles.card__title}`}></div>
				<div className={`${styles.card__skeleton} ${styles.card__title}`}></div>
			</div>
		</div>
	);
};

export default Loader;
