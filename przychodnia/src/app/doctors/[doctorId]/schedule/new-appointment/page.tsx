import { GetDBSettings, IDBSettings } from "@app/app/shared/common";
import Link from "next/link";
import { getCookie } from "@app/app/lib/cookies";
import { headers } from "next/headers";

import mysql from "mysql2/promise";
import { Session } from "@app/app/components/header";
import { redirect } from "next/navigation";
import { Lekarz, Pacjent } from "@app/app/shared/types";
import { createNewAppointmentAction } from "./action";
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


  const [lekarze, _l] = await connection.execute(`SELECT * FROM lekarz;`) as unknown as [Lekarz[], never];
  const [pacjent, _p] = await connection.execute(`SELECT * FROM pacjent WHERE email=?;`, [session.username]) as unknown as [Pacjent[], never];
  const uid = pacjent[0].id_pacjenta // id użytkownika za którego jestem zalogowany



  return <main className="mt-[104px] min-h-[80vh] w-full flex flex-col justify-center items-center"><form className="basis-1/2 w-[60%] p-4 rounded-md shadow-md bg-white mb-4 flex flex-col justify-evenly gap-4" action={createNewAppointmentAction(uid)}>
    <h1 className="text-2xl p-2">Umów wizytę</h1>
    <input type="date" name="data_wizyty" className="p-2 border-2 rounded-md" />
    <input type="text" name="powod_wizyty" placeholder="powód wizyty?" className="p-2 border-2 rounded-md" />
    <select name="status_wizyty" className="p-2 border-2 rounded-md">
      <option value="zaplanowana">zaplanowana</option>
      <option value="odwolana">odwołana</option>
      <option value="zakonczona">zakończona</option>
    </select>
    Lekarz:
    <select name="id_lekarza" className="p-2 border-2 rounded-md">
      {
        lekarze.map(lekarz =>
          <option key={lekarz.id_lekarza} value={lekarz.id_lekarza}>{lekarz.imie} {lekarz.nazwisko}</option>
        )
      }
    </select>


    <input type="submit" className="p-2 border-2 rounded-md hover:bg-gray-200 hover:text-xl hover:underline" />
  </form>
    <Link href="/profile" className="text-sky-600 hover:text-xl hover:underline">Wróć</Link>

  </main>
}
