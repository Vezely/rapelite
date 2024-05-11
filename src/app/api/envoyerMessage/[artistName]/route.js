import { connectToDatabase } from '../../../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(request, contex) {
	const { params } = contex;

	const { user, email, message } = await request.json();

	const artistName = params.artistName;

	const db = await connectToDatabase();

	const collection = db.collection('messages');

	// Créez un nouveau message
	const newMessage = {
		user: user,
		email: email,
		message: message,
		artist: artistName,
		timestamp: new Date(), // Convertir le timestamp en objet Date
	};
	// Insérez le nouveau message dans la collection
	const result = await collection.insertOne(newMessage);

	return NextResponse.json({});
}
