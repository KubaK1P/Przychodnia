import { NextResponse } from 'next/server';
import { setCookie } from '../../lib/cookies';
import mysql from "mysql2/promise";
import { GetDBSettings, IDBSettings } from '../../shared/common';
import { hash } from 'crypto';
import { Pacjent } from '@app/app/shared/types';

export interface LoginRoutePOSTData {
  password: string,
  username: string,
}

export async function POST(req: Request) {
  const data: LoginRoutePOSTData = await req.json();
  const db_settings: IDBSettings = GetDBSettings();
  const connection = await mysql.createConnection(db_settings);
  const hashedPassword = hash("sha1", data.password)
  const values: string[] = [data.username, hashedPassword];
  const [results] = await connection.execute(`SELECT * FROM pacjent WHERE pacjent.email = ? AND pacjent.haslo = ? ;`, values) as unknown as [Pacjent[], never];

  if (results.length === 1) {
    const username: string = data.username;
    const res = NextResponse.json({ message: 'Login successful' });
    setCookie(res, 'session', { username }, { maxAge: 60 * 60 * 24 }); // 1 day
    console.log(res);
    return res;
  }

  return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
}
