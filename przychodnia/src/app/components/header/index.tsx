"use client";

import Link from "next/link";

export const Header = (props: { user: string | null }) => {
  return (
    <div className="w-screen h-10 sticky top-0 flex flex-row items-center px-2 gap-2">
      <Link href="/" className="font-xl hover:underline mr-auto">
        Cukiernia 3P
      </Link>
      {props.user ? (
        <>
          <div className="">
            Zalogowano jako{" "}
            <span className="text-black font-bold">{props.user}</span>
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
            className=" p-1 rounded-md"
          >
            Zaloguj się
          </Link>
          <Link
            href="/auth/signup"
            className=" p-1 rounded-md"
          >
            Zarejestruj się
          </Link>
        </>
      )}
    </div>
  );
};