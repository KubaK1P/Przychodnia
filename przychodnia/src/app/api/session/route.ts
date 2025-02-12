import { NextResponse } from 'next/server';
import { getCookie } from '../../lib/cookies';
import { headers } from 'next/headers';

// export async function GET(req: Request) {
//   const session = getCookie(req.headers, 'session');

//   if (session) {
//     return NextResponse.json({ session: JSON.parse(session) });
//   }

//   return NextResponse.json({ message: 'No active session' }, { status: 401 });
// }

export async function GET() {
  const requestHeaders = await headers();
  const session = getCookie(requestHeaders, 'session');

  if (session && typeof session === 'object') {
    return NextResponse.json({ session }); // Already an object
  }

  return NextResponse.json({ message: 'No active session' }, { status: 401 });
}
