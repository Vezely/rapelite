import React, { useState } from 'react';
import styles from './formulaireContact.module.css';
import { useForm } from 'react-hook-form';

const FormulaireContact = ({ updateMessages, artistName, setMessages }) => {
	const [attendre, setAttendre] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const envoyerMessage = async (data) => {
		if (artistName) {
			setAttendre(true);
			try {
				let response = await fetch(`/api/envoyerMessage/${artistName}`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(data),
				});
				if (response.ok) {
					updateMessages();
					reset();
				}
			} catch (error) {
				console.error('An error occurred:', error);
			} finally {
				setAttendre(false);
			}
		} else {
			setMessages([data]);
		}
	};
	return (
		<form className={styles.form} onSubmit={handleSubmit(envoyerMessage)}>
			<div className={styles.group}>
				<input type='text' {...register('user', { required: 'le champ nom est requis' })} />
				<label>Nom</label>
				{errors.user && <p className={styles.erreur}>{errors.user.message} </p>}
			</div>
			<div className={styles.group}>
				<input type='email' {...register('email', { required: 'le champ email est requis' })} />
				<label>Email</label>
				{errors.email && <p className={styles.erreur}>{errors.email.message} </p>}
			</div>
			<div className={styles.group}>
				<textarea rows='3' {...register('message', { required: 'le champ message est requis' })}></textarea>
				<label>Message</label>
				{errors.message && <p className={styles.erreur}>{errors.message.message} </p>}
			</div>
			<button type='submit'>Envoyer</button>
		</form>
	);
};

export default FormulaireContact;
