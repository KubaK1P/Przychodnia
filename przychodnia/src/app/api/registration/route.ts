import { NextRequest, NextResponse } from "next/server";
import mysql, { RowDataPacket } from "mysql2/promise";
import { GetDBSettings, IDBSettings } from '../../shared/common';

export interface RegistrationRoutePOSTData {
  username: string,
  password: string
}

export interface RegistrationRouteGETData {
  username: string
}

export async function POST(request: NextRequest) {
  const data: RegistrationRoutePOSTData = await request.json();
  const db_settings: IDBSettings = GetDBSettings();
  const connection = await mysql.createConnection(db_settings);

  const [results, fields] = await connection.query(`SELECT 1`);

  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
  return NextResponse.json({});
}

export async function GET(request: NextRequest) {
  const db_settings: IDBSettings = GetDBSettings();
  let username = "";
  try {
    username = request.nextUrl!.searchParams!.get('username')!;
    const connection = await mysql.createConnection(db_settings);
    // todo: validate username
    const values: string[] = [username];
    const [results] = await connection.execute(`SELECT * FROM pacjent WHERE pacjent.email = ?`, values);
    const isUserExists: boolean = !(results.length === 0) // ? realy sorry for that (note to self) => throws an ugly red text that doesn't mean anything particular (.length)
    connection.end()
    // return the results as a JSON API response
    return NextResponse.json({ userExists: `${isUserExists}` })
  } catch (err) {
    console.log('ERROR: API - ', (err as Error).message)
    const response = {
      error: (err as Error).message,
      returnedStatus: 200,
    }
    return NextResponse.json(response, { status: 200 })
  }
}

// todo: do the same shit for other requests
