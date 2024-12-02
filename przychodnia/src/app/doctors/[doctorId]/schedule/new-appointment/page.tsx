import { GetDBSettings, IDBSettings } from "@app/app/shared/common";

import mysql from "mysql2/promise";
export default async function Page() {

  const db_settings: IDBSettings = GetDBSettings();
  const connection = await mysql.createConnection(db_settings);


  const [_l, lekarze] = await connection.execute(`SELECT * FROM lekarz;`);
  const [_p, pacjenty] = await connection.execute(`SELECT * FROM pacjent;`);



  return <form action={async (d: FormData) => {
    "use server"
    const db_settings: IDBSettings = GetDBSettings();
    const connection = await mysql.createConnection(db_settings);

    await connection.execute(`SELECT * FROM pacjent WHERE pacjent.email = ? ;`, ["a"]);


  }}>
    <input type="date" name="data_wizyty" />
    <input type="text" name="powod_wizyty" />
    <select name="status_wizyty">
      <option value="zaplanowana">zaplanowana</option>
      <option value="odwolana">odwołana</option>
      <option value="zakonczona">zakończona</option>
    </select>
    <select name="id_lekarza">
      // each item in the list should have unique key prop 
      {
        lekarze.map(lekarz =>
          <option value={lekarz.id_lekarza}>{lekarz.imie} {lekarz.nazwisko}</option>
        )
      }
    </select>
    <select name="id_pacjenta">
      {
        pacjenty.map(pacant =>
          <option value={pacant.id_pacjenta}>{pacant.imie} {pacant.nazwisko}</option>
        )
      }

    </select>


    <input type="submit" />
  </form>
}
