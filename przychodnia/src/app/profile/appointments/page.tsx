import { GetDBSettings, IDBSettings } from "@app/app/shared/common";
import Link from "next/link";
import { getCookie } from "@app/app/lib/cookies";
import { headers } from "next/headers";

import mysql from "mysql2/promise";
import { Session } from "@app/app/components/header";
import { redirect } from "next/navigation";
import { Wizyta } from "@app/app/shared/types";

interface WizytaPremium extends Wizyta {
  // po inner joinie
  l_imie: string;
  l_nazwisko: string;
}

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


  const [pacjenty, _p] = await connection.execute(`SELECT * FROM pacjent WHERE email=?;`, [session.username]);
  //@ts-ignore
  const pacjent = pacjenty[0]

  const [wizyty, _w] = await connection.execute(`SELECT wizyta.*, lekarz.imie AS l_imie, lekarz.nazwisko AS l_nazwisko FROM wizyta INNER JOIN lekarz ON wizyta.id_lekarza = lekarz.id_lekarza WHERE wizyta.id_pacjenta = ?;`, [pacjent.id_pacjenta])


  return (<main className="min-h-[80vh] w-full flex flex-col justify-center items-center">
    {
      //@ts-ignore
      wizyty.map(
        (wizyta: WizytaPremium) => <div key={wizyta.id_wizyty} className="bg-white rounded-md shadow-md p-4 m-2 w-full"><h2 className="text-2xl p-2 mb-4">{wizyta.powod_wizyty}</h2> <div className="flex justify-between"> <p className="text-gray-600 basis-[40%]">({wizyta.status_wizyty}) - {wizyta.l_imie} {wizyta.l_nazwisko}</p><Link href={`/profile/appointments/${wizyta.id_wizyty}`} className="w-[100%] text-right text-sky-600 hover:text-lg hover:underline">Idź do wizyty</Link> </div></div>
      )
    }

    <Link href="/profile" className="m-4 text-sky-600 hover:text-xl hover:underline">Wróć</Link>
  </main>)
}
