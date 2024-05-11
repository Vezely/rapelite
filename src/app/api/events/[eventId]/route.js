import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request, contex) {
	const { params } = contex;

	const db = await connectToDatabase();

	const collection = db.collection('events');

	const event = await collection.findOne({ _id: new ObjectId(params.eventId) });

	return NextResponse.json(event);
}
