import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase() ?? '';
  const proto = (
    request.headers.get('x-forwarded-proto') ??
    request.nextUrl.protocol.replace(':', '')
  )
    .split(',')[0]
    .trim()
    .toLowerCase();

  const { pathname, search } = request.nextUrl;
  const pathWithQuery = `${pathname}${search}`;

  if (host === 'www.dawid-developer.pl') {
    return NextResponse.redirect(
      new URL(`https://dawid-developer.pl${pathWithQuery}`),
      301,
    );
  }

  if (proto === 'http' && host === 'dawid-developer.pl') {
    return NextResponse.redirect(
      new URL(`https://dawid-developer.pl${pathWithQuery}`),
      301,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/|.*\\..*).*)'],
};
