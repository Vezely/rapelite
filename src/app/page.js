'use client';
import Head from 'next/head';
import Card from '../components/card/Card';
import styles from './Home.module.css';
import ViewArtist from '../components/viewArtist/ViewArtist';
import { useEffect, useState } from 'react';
import Loader from '../components/loader/Loader';
import { textHomePage } from './textHomePage';

export default function Home({}) {
	const [view, setView] = useState(false);
	const [viewData, setViewData] = useState({});
	const [artists, setArtists] = useState([]);
	const [reponseApi, setReponseApi] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setReponseApi(true);
			try {
				let response = await fetch(`/api/getTeams`, {
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
				});
				const data = await response.json();
				if (response.ok) {
					setArtists(data);
				}
			} catch (error) {
				console.error('Erreur lors de la recuperation des données');
			} finally {
				setReponseApi(false);
			}
		}

		fetchData();
	}, []);
	// console.log(artists);
	return (
		<>
			<Head>
				<title>home</title>
				<meta name='description' content="Page d'accueil du projet ." />

				<meta property='og:title' content='Laboratoire - Accueil' />
				<meta property='og:description' content="Page d'accuei du projet ." />
				<meta property='og:image' content='http://localhost:3000/logo.png' />
			</Head>

			<main>
				<div className={styles.container}>
					<h1 className={styles.title}>Découvrez les artistes phares de la scène rap française</h1>
					<h2 className={styles.description}>{textHomePage}</h2>

					<div className={styles.cardContainer}>
						{reponseApi ? (
							<>
								<Loader />
								<Loader />
								<Loader />
								<Loader />
							</>
						) : (
							<>
								{artists?.map((data, index) => (
									<Card setView={setView} setViewData={setViewData} data={data} buttonText='Plus de details' key={index} isProfile />
								))}
							</>
						)}
					</div>
				</div>
				{view && <ViewArtist viewData={viewData} setView={setView} />}
			</main>
		</>
	);
}
