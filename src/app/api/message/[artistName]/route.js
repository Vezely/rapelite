import { connectToDatabase } from '../../../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request, contex) {
	const { params } = contex;

	const db = await connectToDatabase();

	const collectionMessages = db.collection('messages');

	const messages = await collectionMessages.find({ artist: params.artistName }).toArray();

	return NextResponse.json(messages);
}
