import { NextResponse } from "next/server"
import mysql from "mysql2/promise"

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "suvidha_db",
  // port: 3306 // Optional: only if it's not the default
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, email, country, message } = data

    const connection = await mysql.createConnection(dbConfig)

    const query = `
      INSERT INTO visa_requests
        (name, email, destination_country, message)
      VALUES (?, ?, ?, ?)
    `

    await connection.execute(query, [name, email, country, message])
    await connection.end()

    return NextResponse.json({ message: "Visa form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Visa form submission error:", error)
    return NextResponse.json({ message: "Failed to submit visa form" }, { status: 500 })
  }
}
