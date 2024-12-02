import { getCookie } from '../lib/cookies';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

interface Session {
  username: string;
}

export default async function Profile() {
  const sessionCookie = getCookie(headers(), 'session');

  // If no session cookie is found, redirect to login page
  if (!sessionCookie) {
    redirect('auth/login');
    return null;
  }

  // Directly use the session object without JSON.parse since getCookie already handles the parsing
    //   const session: Session = typeof sessionCookie === 'object' ? sessionCookie : { username: '' };
    const session = sessionCookie as Session;

  return (<main className="w-2/3 flex flex-wrap m-4 min-h-[90vh]">
    <h1>Welcome, {session.username}</h1> 
    
    <p><br />Here will be user data probably</p>
    </main>
  );
}


