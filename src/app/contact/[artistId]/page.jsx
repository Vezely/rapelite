'use client';
import Image from 'next/image';
import styles from './contact.module.css';
import FormulaireContact from '../../../components/formulaireContact/FormulaireContact';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Loader from '../../../components/loader/Loader';

const Contact = (artistId) => {
	const [artist, setArtist] = useState();
	const [artistName, setArtistName] = useState('');
	const [messages, setMessages] = useState([]);
	const [attendre, setAttendre] = useState(false);

	useEffect(() => {
		setAttendre(true);
		if (artistId.params.artistId) {
			async function fetchData() {
				try {
					let response = await fetch(`/api/contact/${artistId.params.artistId}`, {
						method: 'GET',
						headers: { 'Content-Type': 'application/json' },
					});
					const data = await response.json();
					if (response.ok) {
						setArtist(data);
					}
				} catch (error) {
					console.error(error);
				} finally {
					setAttendre(false);
				}
			}
			fetchData();
		}
	}, [artistId.params]);
	useEffect(() => {
		setArtistName(artist?.title);
		if (artist && artistName) {
			async function fetchData() {
				let response = await fetch(`/api/message/${artistName}`, {
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
				});
				const data = await response.json();
				if (response.ok) {
					setMessages(data);
				}
			}
			fetchData();
		}
	}, [artist, artistName]);
	const updateMessages = async () => {
		let response = await fetch(`/api/message/${artistName}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		});
		const data = await response.json();
		if (response.ok) {
			setMessages(data);
		}
	};
	// console.log(messages);
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta name='description' content='Page contact du projet .' />

				<meta property='og:title' content='Laboratoire' />
				<meta property='og:description' content='Page contact du projet .' />
				<meta property='og:image' content='http://localhost:3000/logo.png' />
			</Head>
			<div className={styles.contenaire}>
				<h1 className={styles.h1}>Nous sommes là pour vous aider ! Contactez-nous aujourd&apos;hui.</h1>
				<div className={styles.flexContenu}>
					<div className={styles.photo}>
						{artist ? (
							<Image src={`/team/${artist.src}`} width={artist.width} height={artist.height} priority={true} alt={artist.alt} />
						) : (
							<Image src='/concert.jpg' width={240} height={240} priority={true} alt='artist' />
						)}
					</div>
					<div className={styles.card}>
						<span className={styles.title}>Envoyez des messages avos rappeurs préférés a partir de notre site web</span>

						<>
							<FormulaireContact updateMessages={updateMessages} artistName={artistName} setMessages={setMessages} />
							<div className={styles.ouAutre}>
								<span>ou</span>
							</div>
						</>

						<a target='blank' href='mailto:exemple@gmail.com' className={styles.cssbuttons_io_button}>
							<svg width='32' height='32' fill='#000000' viewBox='0 0 256 256'>
								<path d='M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z'></path>
							</svg>
							Envoyer un email
							<div className={styles.icon}>
								<svg height='24' width='24' viewBox='0 0 24 24'>
									<path d='M0 0h24v24H0z' fill='none'></path>
									<path d='M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z' fill='currentColor'></path>
								</svg>
							</div>
						</a>
					</div>
				</div>

				{/* {messages.length > 0 && ( */}
				<>
					<h2 className={styles.h2}>Réactions des followers</h2>
					<div className={styles.messageContainer}>
						<div className={styles.boxContenair}>
							{attendre ? (
								<>
									<div className={styles.box}>
										<Loader />
									</div>
									<div className={styles.box}>
										<Loader />
									</div>
									<div className={styles.box}>
										<Loader />
									</div>
								</>
							) : (
								<>
									{messages?.map((message, index) => (
										<div className={styles.box} key={index}>
											<div>
												<div className={styles.nom_commentataire}>{message.user}</div>
												<div className={styles.date_ajout}>
													{message.timestamp
														? new Date(message.timestamp).toLocaleDateString('fr-FR')
														: new Date().toLocaleDateString('fr-FR')}
												</div>
											</div>
											<p>{message.message}</p>
										</div>
									))}
								</>
							)}
						</div>
					</div>
				</>
				{/* )} */}
			</div>
		</>
	);
};

export default Contact;
