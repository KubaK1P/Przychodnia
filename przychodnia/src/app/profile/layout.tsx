import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (<div className="w-full mt-[104px] flex justify-evenly px-6">
    <aside className="basis-[27%] self-start p-4">

      <nav className="bg-white rounded-md shadow-md p-4 m-2 ">
        <ul className="flex flex-col justify-evenly gap-4 text-lg text-sky-600">
          <li className="hover:text-xl hover:underline"><Link href="/profile/appointments">Wizyty</Link></li>
          <li className="hover:text-xl hover:underline"><Link href="/doctors/greg/schedule/new-appointment">Dodaj wizytę</Link></li>
          <li className="hover:text-xl hover:underline"><Link href="/profile/settings">Ustawienia</Link></li>
        </ul>
      </nav>
    </aside>
    <main className="basis-[73%] p-4">
      {children}
    </main>
  </div>
  )
}
