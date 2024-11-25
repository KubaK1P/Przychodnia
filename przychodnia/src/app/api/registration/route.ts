import { NextRequest, NextResponse } from "next/server";
import mysql from 'mysql2/promise';

export interface RegistrationRoutePOSTData{
    username: string;
    password: string;
}

export async function POST( request: NextRequest) {
    const data:RegistrationRoutePOSTData = await request.json();
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: "JezuUfamTobie",
      });
      
      const [results, fields] = await connection.query(
        `SELECT 1`
      );
    
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    
    return NextResponse.json({});
}

// ! what
// todo: do the same shit for other requests, some queries may come into play