import { NextResponse } from "next/server"
import mysql from "mysql2/promise"

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "vijay@2003",
  database: "suvidha_db",
}
export async function POST(req: Request) {
  try {
    const data = await req.json()

    const {
      firstName,
      lastName,
      email,
      phone,
      country,
      studyLevel,
      fieldOfStudy,
      scholarshipType,
      message,
    } = data

    const connection = await mysql.createConnection(dbConfig)

    const query = `
      INSERT INTO scholarship_inquiries
        (first_name, last_name, email, phone, country, study_level, field_of_study, scholarship_type, additional_info)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    await connection.execute(query, [
      firstName,
      lastName,
      email,
      phone,
      country,
      studyLevel,
      fieldOfStudy,
      scholarshipType,
      message,
    ])

    await connection.end()

    return NextResponse.json({ success: true, message: "Scholarship inquiry submitted successfully" }, { status: 200 })

  } catch (error) {
    console.error("Scholarship inquiry submission error:", error)
    return NextResponse.json({ success: false, message: "Failed to submit scholarship inquiry" }, { status: 500 })
  }
}
