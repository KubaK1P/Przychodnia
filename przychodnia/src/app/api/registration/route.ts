import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from '../../shared/common';
import { hash } from "crypto";
import { Pacjent } from "@app/app/shared/types";

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


export async function POST(request: NextRequest) {
  const data: RegistrationRoutePOSTData = await request.json(); // ! this throws SyntaxError: Unexpected end of JSON input when user exists
  // ? threw the error only once- probably nothing to worry about
  const db_settings: IDBSettings = GetDBSettings();
  console.log(db_settings)
  const connection = await mysql.createConnection(db_settings);

  const [results] = await connection.execute(`SELECT * FROM pacjent WHERE pacjent.email = ? ;`, [data.email]) as [Pacjent[], never];
  if (results.length !== 0) {
    const response = {
      error: `There is an user with email ${data.email}`,

      returnedStatus: 409,
    }
    return NextResponse.json(response, { status: 409 });
  }
  const hashedPassword: string = hash("sha1", data.password)

  // todo: validate the data
  // yea, good idea! Validate it!
  const values = [data.firstName, data.lastName, data.date, data.pesel, data.adress, data.phone, data.email, hashedPassword];

  // bruh, insert nic nie zwraca
  await connection.execute(`INSERT INTO pacjent VALUES (null, ? , ? , ? , ? , ? , ? , ? , ? );`, values);
  const response = {
    message: `success?`,

    returnedStatus: 200,
  }
  return NextResponse.json(response, { status: 200 });
}


