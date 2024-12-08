import { GetDBSettings, IDBSettings } from "@app/app/shared/common";
import Link from "next/link";
import { getCookie } from "@app/app/lib/cookies";
import { headers } from "next/headers";

import mysql from "mysql2/promise";
import { Session } from "@app/app/components/header";
import { redirect } from "next/navigation";
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


  const [lekarze, _l] = await connection.execute(`SELECT * FROM lekarz;`);
  const [pacjent, _p] = await connection.execute(`SELECT * FROM pacjent WHERE email=?;`, [session.username]);
  const uid = pacjent[0].id_pacjenta // id użytkownika za którego jestem zalogowany



  return <form action={async (d: FormData) => {
    "use server"
    const db_settings: IDBSettings = GetDBSettings();
    const connection = await mysql.createConnection(db_settings);

    await connection.execute(`INSERT INTO wizyta VALUES(null, ?, ?, ?, ?, ?) ;`, [d.get("data_wizyty")?.toString(), uid, d.get("id_lekarza")?.toString(), d.get("powod_wizyty")?.toString(), d.get("status_wizyty")?.toString()]);


  }}>
    <input type="date" name="data_wizyty" />
    <input type="text" name="powod_wizyty" placeholder="powód wizyty?" />
    <select name="status_wizyty">
      <option value="zaplanowana">zaplanowana</option>
      <option value="odwolana">odwołana</option>
      <option value="zakonczona">zakończona</option>
    </select>
    lekasz
    <select name="id_lekarza">
      {
        lekarze.map(lekarz =>
          <option key={lekarz.id_lekarza} value={lekarz.id_lekarza}>{lekarz.imie} {lekarz.nazwisko}</option>
        )
      }
    </select>


    <input type="submit" />
  </form>
}
