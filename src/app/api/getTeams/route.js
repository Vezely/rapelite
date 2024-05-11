import { connectToDatabase } from '../../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
	const db = await connectToDatabase();

	// Obtenez une référence à la collection que vous souhaitez utiliser
	const collection = db.collection('artists');
	const artists = await collection.find({}).toArray();
	return NextResponse.json(artists);
}
