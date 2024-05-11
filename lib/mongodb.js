import { MongoClient } from 'mongodb';

const uri = process.env.DB_CHAINE_CONNEXION;
const client = new MongoClient(uri);

async function connectToDatabase() {
	try {
		await client.connect();
		// console.log('Connexion à la base de données réussie');
		return client.db('musics');
	} catch (error) {
		console.error('Erreur de connexion à la base de données :', error);
		return null;
	}
}

export { connectToDatabase };
