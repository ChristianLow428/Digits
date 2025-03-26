import { NextRequest, NextResponse } from 'next/server';

export default async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const error = searchParams.get('error');

  // Redirect to error page with error query parameter
  return NextResponse.redirect(new URL(`/auth/error?error=${error || 'Unknown'}`, request.url));
}
