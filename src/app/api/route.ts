import { NextRequest } from "next/server";

const UserList: string[] = ["max","darren","julian","adrian"];

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams
	const id = Number(searchParams.get('id'))
	return Response.json(UserList[id])
}

export async function POST(request: Request) {
    const res = await request.json();
    const message = res["message"];
    return Response.json(`got your message! its: ${message}`);
}