import { NextResponse } from 'next/server';
import { removeCookie } from '../../lib/cookies';

export async function POST() {
  const res = NextResponse.json({ message: 'Logout successful' });
  removeCookie(res, 'session');
  return res;
}
