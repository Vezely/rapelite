import React from 'react';
import styles from './templatePage.module.css';
import Image from 'next/image';

const TemplatePage = ({ textButton1 = ' READ MORE', textButton2 = 'CONTACT', event }) => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>{event?.title}</h1>
				<p className={styles.description}>{event?.description}</p>
				<div className={styles.date}>
					<svg className={styles.svg} viewBox='0 0 256 256'>
						<path d='M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z'></path>
					</svg>
					{event?.date}
				</div>
				<div className={styles.place}>
					<svg className={styles.svg} viewBox='0 0 256 256'>
						<path d='M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z'></path>
					</svg>
					{event?.place}
				</div>
				<div className={styles.buttons}>
					<button className={styles.button}>{textButton1}</button>
					<button className={styles.button}>{textButton2}</button>
				</div>
			</div>

			<div className={styles.imgContainer}>
				{event && <Image src={`/events/${event.src}`} alt={event.alt} width={event.width} height={event.height} priority={true} />}
			</div>
		</div>
	);
};

export default TemplatePage;
