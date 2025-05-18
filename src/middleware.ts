// Author: Thinh Nguyen
// Repo: https://github.com/hungtrungthinh/nextjs-file-server
// Project: Simple Nextjs File Server
// https://github.com/thinhnguyenvan/simple-nextjs-file-server

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Cho phép truy cập các file tĩnh (có phần mở rộng)
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return NextResponse.next();
  }

  // Chặn các route không có phần mở rộng (trang động, trang chủ, ...)
  return NextResponse.rewrite(new URL('/access-forbidden', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 