import mysql from "mysql2/promise";
export interface IDBSettings extends mysql.ConnectionOptions {
  host: string,
  user: string,
  password: string,
  database: string,
}

export const GetDBSettings = (): IDBSettings => {
  const env = process.env.NODE_ENV

  if (env == 'development')
    return {
      host: process.env.DB_HOST!,
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      database: process.env.DB_NAME!,
    }
  else
    return {
      host: process.env.DB_HOST!,
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      database: process.env.DB_NAME!,
    }
}
