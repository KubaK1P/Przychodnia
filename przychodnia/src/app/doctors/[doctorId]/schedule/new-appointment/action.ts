import { GetDBSettings, IDBSettings } from "@app/app/shared/common";
import { Wizyta } from "@app/app/shared/types";

import mysql from "mysql2/promise";
import { redirect } from "next/navigation";

export const NewAppointmentAction = async (d: FormData, uid: number) => {
  "use server"
  const db_settings: IDBSettings = GetDBSettings();
  const connection = await mysql.createConnection(db_settings);

  const [results, _f] = await connection.execute("SELECT wizyta.id_wizyty FROM wizyta WHERE data_wizyty = ? AND id_lekarza = ?", [d.get("data_wizyty")?.toString(), d.get("id_lekarza")?.toString()]) as unknown as [Wizyta[], never];

  if (results.length) {
    redirect("/failedsomething"); // TODO: actual URL here
  }

  await connection.execute(`INSERT INTO wizyta VALUES(null, ?, ?, ?, ?, ?) ;`, [d.get("data_wizyty")?.toString(), uid, d.get("id_lekarza")?.toString(), d.get("powod_wizyty")?.toString(), d.get("status_wizyty")?.toString()]);


  await connection.end()
}

export function createNewAppointmentAction(uid: number) {
  return (d: FormData) => NewAppointmentAction(d, uid);
}
