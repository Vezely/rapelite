import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request, contex) {
	const { params } = contex;

	const db = await connectToDatabase();

	const collection = db.collection('artists');

	let artist = null;
	if (params.artistId.length >= 20) {
		artist = await collection.findOne({ _id: new ObjectId(params.artistId) });
	}

	return NextResponse.json(artist);
}
