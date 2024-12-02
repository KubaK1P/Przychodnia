import Link from "next/link";

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return ( <>
      <aside className="basis-[27%] self-start h-full p-4">
        
            <nav>
                <ul>
                    <li><Link href="/profile/appointments">Wizyty</Link></li>
                    <li><Link href="/doctors/greg/schedule/new-appointment">Dodaj wizytę</Link></li>
                    <li><Link href="/profile/settings">Ustawienia</Link></li>
                </ul>
            </nav>
        </aside>
        <main className="basis-[73%] p-4">
            {children}
        </main>
        </>
    )
  }