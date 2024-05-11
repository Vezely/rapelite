'use client';
import React, { useState } from 'react';
import styles from './viewArtist.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ViewArtist = ({ setView, viewData }) => {
	const router = useRouter();
	// console.log(viewData);
	return (
		<>
			<span onClick={() => setView(false)} className={styles.maske}></span>

			<div className={styles.viewContainer}>
				<svg onClick={() => setView(false)} className={styles.close} viewBox='0 0 256 256'>
					<path d='M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z'></path>
				</svg>
				<div className={styles.flex}>
					<div className={styles.gauche}>
						<h2>{viewData.title}</h2>
						<div className={styles.photo}>
							<Image src={`/team/${viewData.src}`} width={viewData.width} height={viewData.height} alt={viewData.alt} />
						</div>
					</div>
					<div className={styles.droite}>
						<div className={styles.description}>
							<span style={{ textAlign: 'end' }}>{viewData.date} </span>
							<p>{viewData.description}</p>
						</div>
						<div className={styles.action}>
							<div className={styles.place}>
								<svg className={styles.svg} viewBox='0 0 256 256'>
									<path d='M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z'></path>
								</svg>
								<span>{viewData.place} </span>
							</div>
							<button onClick={() => router.push(`/contact/${viewData._id}`)} className={styles.button}>
								Contacter
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ViewArtist;
