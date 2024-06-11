import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authanticationPage = "/admin"


export async function middleware(request: NextRequest) {
  const token = await getToken({ req:request });

  if(request.nextUrl.pathname.startsWith("/api")){
    return NextResponse.next()
  }

  if(!token && request.nextUrl.pathname !== authanticationPage && request.nextUrl.pathname.startsWith("/admin")){
    return NextResponse.redirect(new URL(authanticationPage, request.url))
  }

  return NextResponse.next()
}


export const config = {
    matcher:["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}