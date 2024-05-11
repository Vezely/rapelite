'use client';
import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';

const Card = ({ data, buttonText = 'Reserver', isProfile = false, setView, setViewData }) => {
	const handleClick = (e) => {};
	// console.log(data);
	return (
		<div className={styles.cardContainer}>
			<div className={styles.photo}>
				<Image
					onClick={() => {
						setView(true);
						setViewData(data);
					}}
					src={`/team/${data.src}`}
					alt={data.alt}
					width={data.width}
					height={data.height}
					className={styles.avatar}
				/>
			</div>

			<h3 className={styles.cardTitle}>{data.title}</h3>
			<p className={styles.cardDescription}>{data.description}</p>
			<button
				onClick={() => {
					setView(true);
					setViewData(data);
				}}
				className={styles.button}>
				{buttonText}
			</button>
		</div>
	);
};

export default Card;
