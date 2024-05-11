import { connectToDatabase } from '../../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
	// Connectez-vous à la base de données
	const db = await connectToDatabase();

	// Obtenez une référence à la collection que vous souhaitez utiliser
	const collection = db.collection('events');

	// Récupérez l'événement correspondant à l'ID spécifié
	const events = await collection.find({}).toArray();
	return NextResponse.json(events);
}
