import { getCookie } from '../lib/cookies';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import Image from 'next/image';
interface Session {
  username: string;
}

export default async function Profile() {
  const sessionCookie = getCookie(await headers(), 'session');

  // If no session cookie is found, redirect to login page
  if (!sessionCookie) {
    redirect('auth/login');
  }

  // Directly use the session object without JSON.parse since getCookie already handles the parsing
  //   const session: Session = typeof sessionCookie === 'object' ? sessionCookie : { username: '' };
  const session = sessionCookie as Session;

  return (<div className="w-2/3 flex flex-wrap m-4  bg-[#ffffff99] rounded-md shadow-lg p-4 ">
    <h1 className='text-[300%]'>Konto {session.username}</h1>
    <p><br />Dodawanie wizyt można zrealizować przez menu nawigacyjne po lewej stronie</p>
  </div>
  );
}


