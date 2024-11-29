import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from '../../shared/common';

export interface RegistrationRoutePOSTData {
  username: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const data: RegistrationRoutePOSTData = await request.json();
  const db_settings: IDBSettings = GetDBSettings();
  const connection = await mysql.createConnection(db_settings);

  const [results, fields] = await connection.query(`SELECT 1`);

  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
  console.log(data.username);
  return NextResponse.json({ message: "Hello, world" });
}

// ! what
// todo: do the same shit for other requests
