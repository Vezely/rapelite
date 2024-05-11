'use client';
import React, { useEffect, useState } from 'react';
import TemplatePage from '../../../components/templatePage/TemplatePage';
import Link from 'next/link';
import styles from './eventDetails.module.css';
import Loader from '../../../components/loader/Loader';
import Head from 'next/head';

const EventDetails = (eventId) => {
	const [reponseApi, setReponseApi] = useState(false);
	const [event, setEvent] = useState();

	// console.log(event);
	useEffect(() => {
		try {
			setReponseApi(true);
			if (eventId.params) {
				async function fetchData() {
					let response = await fetch(`/api/events/${eventId.params.eventId}`, {
						method: 'GET',
						headers: { 'Content-Type': 'application/json' },
					});
					const data = await response.json();
					if (response.ok) {
						setEvent(data);
					}
				}
				fetchData();
			}
		} catch (error) {
			console.error('Erreur lors de la recuperation des données');
		} finally {
			setReponseApi(false);
		}
	}, [eventId.params]);
	return (
		<>
			<Head>
				<title>Evènement</title>
				<meta name='description' content='Page events du projet .' />

				<meta property='og:title' content='Laboratoire - Accueil' />
				<meta property='og:description' content='Page event du projet .' />
				<meta property='og:image' content='http://localhost:3000/logo.png' />
			</Head>
			<div>
				{reponseApi ? (
					<>
						<Loader />
					</>
				) : (
					<>
						<div className={styles.container}>
							<Link className={styles.link} href='/events'>
								<svg className={styles.back} width='32' height='32' viewBox='0 0 256 256'>
									<path d='M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z'></path>
								</svg>
								{' Retourner'}
							</Link>
							<TemplatePage event={event} textButton1='BILLETS' />
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default EventDetails;
