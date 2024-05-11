import React from 'react';
import Styles from './eventCard.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const EventCard = ({ buttonText = 'BILLETS', data }) => {
	const router = useRouter();

	const eventHref = `/events/${data._id}`;

	const handleClick = (e) => {
		e.preventDefault();

		router.push(eventHref);
	};
	// console.log(data);
	return (
		<div className={Styles.eventCardContainer}>
			<div className={Styles.container}>
				<div className={Styles.fielDetails}>
					<div className={Styles.title}>{data.title?.toUpperCase()}</div>
					<div className={Styles.date}>{data.place}</div>
					<div className={Styles.description}>{data.description}</div>
				</div>
				<div className={Styles.fieldImg}>
					<Image src={`/events/${data.src}`} alt={data.alt} width={data.width} height={data.height} />
				</div>
			</div>
			<div className={Styles.fieldButton}>
				<div className={Styles.fieldDay}>{data.date}</div>
				<button className={Styles.button} onClick={handleClick}>
					{buttonText}
				</button>
			</div>
		</div>
	);
};

export default EventCard;
