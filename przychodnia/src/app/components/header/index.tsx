import Link from "next/link";
import { getCookie } from "@app/app/lib/cookies";
import { headers } from "next/headers";
// import { useEffect } from "react";

// export interface registrationGETResponseInterface {
//   userExists: string
// }
export interface Session {
  username: string;
}

export const Header = async () => {

  //  Access cookies from the request headers (server-side)
  const sessionCookie = getCookie(await headers(), 'session');
  let session;
  const doesntExistCookie: boolean = !sessionCookie;
  if (doesntExistCookie) {
    console.log("no cookie");
    session = {};
  } else {
    session = sessionCookie as Session;

  }
  // Check if the session exists and extract the username


  return (
    <header className="basis-[100%] w-full fixed top-0 flex flex-row items-center p-6 gap-2 bg-[#ffffff55] shadow-md rounded-md z-1000" id="header">
      <Link href="/" className="font-xl text-2xl font-semibold text-slate-950 hover:underline mr-auto tracking-wide p-3">
        Przychodnia
      </Link>
      {!doesntExistCookie ? (
        <>
          <Link
            href="/profile"
            className=" p-1 rounded-md"
          >
            Twoja tablica
          </Link>
          <div className="">
            Zalogowano jako{" "}
            <span className="text-black font-bold">{session.username}</span>
          </div>
          <Link
            href="/auth/logout"
            className=" p-1 rounded-md"
          >
            Wyloguj się
          </Link>

        </>
      ) : (
        <>
          <Link
            href="/auth/login"
            className="rounded-md p-3"
          >
            Zaloguj się
          </Link>
          <Link
            href="/auth/register"
            className="rounded-md p-3"
          >
            Zarejestruj się
          </Link>
        </>
      )}
    </header>
  );
};
