"use client"
import Link from "next/link";
export default function Logout() {
  const handleLogout = async () => {
    const res = await fetch('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      window.location.href = '/';
    } else {
      alert('Logout failed');
    }
  };
  return (
    <main className="w-full flex flex-wrap justify-center items-center gap-[2.3rem] h-[90vh] shadow-md px-[3rem]">
      <p className="text-red-500 text-5xl ">Na pewno się wologować?</p>
      <Link
        href="/"
        className="p-2 hover:text-red-500 hover:underline hover:text-2xl"
        onClick={handleLogout}
      >
        Wyloguj
      </Link>
    </main>
  );
}
