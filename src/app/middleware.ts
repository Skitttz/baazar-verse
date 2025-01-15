import { STORAGE_KEYS } from '@/constants/storageKeys';
import { APP_ROUTES } from '@/shared/route';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(STORAGE_KEYS.AUTH)?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith(APP_ROUTES.PUBLIC.SIGN_IN) || request.nextUrl.pathname.startsWith(APP_ROUTES.PUBLIC.SIGN_UP);


  if (!accessToken && !isAuthPage) {
    return NextResponse.redirect(new URL(APP_ROUTES.PUBLIC.SIGN_IN, request.url));
  }

  else if (accessToken && isAuthPage) {
    return NextResponse.redirect(new URL(APP_ROUTES.PRIVATE.HOME, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    APP_ROUTES.UNAUTHORIZED,
    `${APP_ROUTES.PUBLIC.SIGN_IN}/:path*`,
    `${APP_ROUTES.PUBLIC.SIGN_UP}/:path*`,
    `${APP_ROUTES.PRIVATE.HOME}/:path*`,
    `${APP_ROUTES.PRIVATE.PRODUCTS}/:path*`,
  ], 
};
