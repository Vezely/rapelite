'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './admin.module.css';

const Admin = () => {
	const [imageSrc, setImageSrc] = useState(null);
	const [attendre, setAttendre] = useState(false);

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setImageSrc(e.target.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		setAttendre(true);
		const formData = new FormData(event.target);
		formData.append('idImage', 'imageProduit');
		// formData.append('idCouleur', idCouleur);
		console.log(formData);
		try {
			const response = await fetch(`/api/admin?chemin=${'images/test'}`, {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				const result = await response.json();
				console.log('image telecharger avec succes');
			} else {
				const errorData = await response.json();
				console.error('Error:', errorData.error);
			}
		} catch (error) {
			console.error('An error occurred:', error);
			// Ajoutez ici la logique à exécuter en cas d'erreur inattendue
		} finally {
			setAttendre(false);
		}
	};
	return (
		<div className={styles.editerStockage}>
			<svg className={styles.close} viewBox='0 0 256 256'>
				<path d='M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z'></path>
			</svg>

			<form className={styles.form} onSubmit={onSubmit}>
				<label>
					<input accept='image/*' type='file' name='photo' onChange={handleImageChange} className={styles.input} />
					<span>Changer la photo</span>
				</label>

				{imageSrc && (
					<div className={styles.photoProfile}>
						<Image width={3437} height={4344} src={imageSrc} alt={'image du produit'} />
					</div>
				)}

				{attendre ? (
					<div className={styles.submit}>
						{/* <Spinner /> */}
						Spinner
					</div>
				) : (
					<button className={styles.submit}>Modifier</button>
				)}
			</form>
		</div>
	);
};

export default Admin;
