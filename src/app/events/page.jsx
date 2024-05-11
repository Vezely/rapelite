'use client';
import React, { useEffect, useState } from 'react';
import Styles from './events.module.css';
import EventCard from '../../components/eventCard/EventCard';
import Loader from '../../components/loader/Loader';
import Head from 'next/head';

const Events = ({}) => {
	const [reponseApi, setReponseApi] = useState(false);
	const [events, setEvents] = useState([]);
	useEffect(() => {
		async function fetchData() {
			setReponseApi(true);
			try {
				let response = await fetch(`/api/getEvents`, {
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
				});
				const data = await response.json();
				if (response.ok) {
					setEvents(data);
				}
			} catch (error) {
				console.error('Erreur lors de la recuperation des données');
			} finally {
				setReponseApi(false);
			}
		}

		fetchData();
	}, []);
	return (
		<>
			<Head>
				<title>Evènements</title>
				<meta name='description' content='Page events du projet .' />

				<meta property='og:title' content='Laboratoire - Accueil' />
				<meta property='og:description' content='Page events du projet .' />
				<meta property='og:image' content='http://localhost:3000/logo.png' />
			</Head>
			<div className={Styles.container}>
				<h1 className={Styles.title}>BILLETS JOURNALIERS EN VENTE MAINTENANT</h1>
				<h2 className={Styles.description}>Événements à ne pas manquer : découvrez les moments marquants de la scène rap française</h2>

				<div className={Styles.cardContainer}>
					{reponseApi ? (
						<>
							<Loader />
							<Loader />
							<Loader />
							<Loader />
						</>
					) : (
						<>
							{events?.map((item, index) => (
								<EventCard key={index} data={item} />
							))}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Events;
