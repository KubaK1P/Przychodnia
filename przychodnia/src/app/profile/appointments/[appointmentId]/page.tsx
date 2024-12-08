import { GetDBSettings, IDBSettings } from "@app/app/shared/common";
import Link from "next/link";
import { getCookie } from "@app/app/lib/cookies";
import { headers } from "next/headers";

import mysql from "mysql2/promise";
import { Session } from "@app/app/components/header";
import { notFound, redirect } from "next/navigation";
import { Wizyta } from "@app/app/shared/types";

interface WizytaPremium extends Wizyta {
  // po inner joinie
  l_imie: string;
  l_nazwisko: string;
}

export default async function Page({ params }: { params: Promise<{ appointmentId: string }> }) {
  const sessionCookie = getCookie(await headers(), 'session');
  let session: Session; // zamorduje cię za te sesje
  const doesntExistCookie: boolean = !sessionCookie;
  if (doesntExistCookie) {
    console.log("no cookie");
    redirect("/auth/login")
  } else {
    session = sessionCookie as Session;

  }
  const appointment_id = (await params).appointmentId
  const db_settings: IDBSettings = GetDBSettings();
  const connection = await mysql.createConnection(db_settings);


  const [pacjenty, _p] = await connection.execute(`SELECT * FROM pacjent WHERE email=?;`, [session.username]);
  //@ts-ignorefor
  const pacjent = pacjenty[0]

  // two WHERE checks for security - user cannot view not own appointment
  const [wizyty, _w] = await connection.execute(`SELECT wizyta.*, lekarz.imie AS l_imie, lekarz.nazwisko AS l_nazwisko FROM wizyta INNER JOIN lekarz ON wizyta.id_lekarza = lekarz.id_lekarza WHERE wizyta.id_pacjenta = ? AND wizyta.id_wizyty = ?;`, [pacjent.id_pacjenta, appointment_id])

  //@ts-ignore
  if (!wizyty.length) {
    notFound();
    // zwróci 404 i dokument not-found.tsx
  }
  //@ts-ignore
  const wizyta = wizyty[0];


  //@ts-ignore
  return <main className="min-h-[80vh] w-full flex flex-col justify-center items-center">
    <div key={wizyta.id_wizyty} className="flex flex-col gap-2 justify-between bg-white rounded-md shadow-md p-4 m-2 w-full"><h2 className="text-2xl p-2 mb-4">{wizyta.powod_wizyty} </h2><form className="flex flex-col gap-2"><label htmlFor="notes">Notatki:</label><textarea className="border-2 border-sky-600 rounded-md" cols="30" rows="5" id="notes" /></form>({wizyta.status_wizyty}) - {wizyta.l_imie} {wizyta.l_nazwisko} </div>
    <form action={async () => {
      "use server"

      const connection = await mysql.createConnection(db_settings);
      await connection.execute("UPDATE wizyta SET wizyta.status_wizyty = 'odwolana' WHERE wizyta.id_wizyty = ? ;", [appointment_id])
    }}>
      <input type="submit" id="delete" className="sr-only" />
      <label htmlFor="delete">
        <button className="text-lg text-sky-600 hover:text-xl hover:underline">Odwołaj wizytę</button>
      </label>
    </form>

  </main >
}
