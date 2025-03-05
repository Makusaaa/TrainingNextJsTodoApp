import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const res = NextResponse;
    console.log('test')
    // Ambil token
    const token = (await cookies()).get("token")?.value;

    // Periksa token
    if(token != "supersecrettoken" || token == null)
        return res.rewrite(new URL('/',req.url))
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/home',
        '/api/task'
    ]
}