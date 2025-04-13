import { NextResponse } from 'next/server';

export function middleware(request) {
  const isAuth = request.cookies.get('token')?.value;
const isRedirect=request.nextUrl.pathname.startsWith('/admin');
  
  if (!isAuth && isRedirect) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next();
}
