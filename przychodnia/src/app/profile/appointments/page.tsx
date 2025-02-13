import { GetDBSettings, IDBSettings } from "@app/app/shared/common";
import Link from "next/link";
import { getCookie } from "@app/app/lib/cookies";
import { headers } from "next/headers";

import mysql from "mysql2/promise";
import { Session } from "@app/app/components/header";
import { redirect } from "next/navigation";
import { Pacjent, WizytaPremium } from "@app/app/shared/types";

export default async function Page() {
  const sessionCookie = getCookie(await headers(), 'session');
  let session: Session; // zamorduje cię za te sesje
  const doesntExistCookie: boolean = !sessionCookie;
  if (doesntExistCookie) {
    console.log("no cookie");
    redirect("/auth/login")
  } else {
    session = sessionCookie as Session;

  }
  const db_settings: IDBSettings = GetDBSettings();
  const connection = await mysql.createConnection(db_settings);


  const [pacjenty, _p] = await connection.execute(`SELECT * FROM pacjent WHERE email=?;`, [session.username]) as unknown as [Pacjent[], never];

  const pacjent = pacjenty[0]

  const [wizyty, _w] = await connection.execute(
    `SELECT wizyta.*, lekarz.imie AS l_imie, lekarz.nazwisko AS l_nazwisko 
          FROM wizyta 
          INNER JOIN lekarz 
            ON wizyta.id_lekarza = lekarz.id_lekarza 
          WHERE wizyta.id_pacjenta = ?;`, [pacjent.id_pacjenta]) as unknown as [WizytaPremium[], never]

  return (<main className=" w-full grid grid-cols-[1fr_1fr] gap-x-[2rem]">
    {
      wizyty.length ?
        wizyty.map(
          (wizyta: WizytaPremium) => <div key={wizyta.id_wizyty} className="bg-[#ffffff99] rounded-md shadow-md p-4 m-2 w-full"><h2 className="text-2xl p-2 mb-4">{wizyta.powod_wizyty}</h2> <div className="flex justify-between"> <p className="text-gray-800 basis-[40%]">({wizyta.status_wizyty}) - {wizyta.l_imie} {wizyta.l_nazwisko}</p><Link href={`/profile/appointments/${wizyta.id_wizyty}`} className="w-[100%] text-right text-sky-800 hover:text-lg hover:underline">Idź do wizyty</Link> </div></div>
        ) : <div className="bg-[#ffffff66] rounded-md shadow-md p-4 m-2 w-full text-red-500">ni ma wizytuf</div>
    }

    <Link href="/profile" className="m-4 text-sky-600 hover:text-xl hover:underline">Wróć</Link>
  </main>)
}
