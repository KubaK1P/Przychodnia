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
        <main className="w-full flex flex-wrap h-[90vh] shadow-md">
            <p>Na pewno się wologować</p>
            <Link
                href="/"
                className="p-2"
                onClick={handleLogout}
            >
                Wyloguj
            </Link>
      </main>
    );
  }