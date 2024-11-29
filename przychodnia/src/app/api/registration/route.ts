import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from '../../shared/common';
import { hash } from "crypto";

export interface RegistrationRoutePOSTData {
  password: string,
  email: string,
  firstName: string,
  lastName: string,
  pesel: string,
  phone: string,
  date: string,
  adress: string
}

// export interface RegistrationRouteGETData {
//   username: string
// }

export async function POST(request: NextRequest) {
  const data: RegistrationRoutePOSTData = await request.json();
  const db_settings: IDBSettings = GetDBSettings();
  const connection = await mysql.createConnection(db_settings);

  let values: string[] = [data.email];
  let [results] = await connection.execute(`SELECT * FROM pacjent WHERE pacjent.email = ? ;`, values);
  if (results.length !== 0) {
    const response = {
      error: `There is an user with email ${data.email}`,

      returnedStatus: 409,
    }
    return NextResponse.json(response, {status: 409});
  }
  const hashedPassword: string = hash("sha1", data.password)
  values = [data.firstName, data.lastName, data.date, data.pesel, data.adress, data.phone, data.email, hashedPassword];
   [results] = await connection.execute(`INSERT INTO pacjent VALUES (null, ? , ? , ? , ? , ? , ? , ? , ? );`, values);
   const response = {
    message: `success?`,

    returnedStatus: 200,
  }
  return NextResponse.json(response, {status: 200});
}

// export async function GET(request: NextRequest) {
//   const db_settings: IDBSettings = GetDBSettings();
//   let username = "";
//   try {
//     username = request.nextUrl!.searchParams!.get('username')!;
//     const connection = await mysql.createConnection(db_settings);
//     // todo: validate username
//     const values: string[] = [username];
//     const [results] = await connection.execute(`SELECT * FROM pacjent WHERE pacjent.email = ?`, values);
//     const isUserExists: boolean = !(results.length === 0) // ? realy sorry for that (note to self) => throws an ugly red text that doesn't mean anything particular (.length)
//     connection.end()
//     // return the results as a JSON API response
//     return NextResponse.json({ userExists: `${isUserExists}` })
//   } catch (err) {
//     console.log('ERROR: API - ', (err as Error).message)
//     const response = {
//       error: (err as Error).message,
//       returnedStatus: 200,
//     }
//     return NextResponse.json(response, { status: 200 })
//   }
// }

// todo: do the same shit for other requests
