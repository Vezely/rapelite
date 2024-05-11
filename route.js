import connectToDb from "@/lib/connectToDb";
import Event from "@/lib/models";
import { NextResponse } from "next/server";

export async function POST(resquest) {
	const { title, description, date, place, img, alt } = await request.json();
	await connectToDb();
	await Event.create({ title, description, date, place, img, alt });
	return NextResponse.json({ message: "Event Created" }, { status: 201 });
}

export async function GET() {
	await connectToDb();
	const events = await Event.find();
	return NextResponse.json({ events });
}
