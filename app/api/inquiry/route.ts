import mysql from "mysql2/promise"

export async function POST(request: Request) {
  const body = await request.json()
  const { fullName, email, phone, destination, course } = body

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // ⬅️ Put your real MySQL password if any
    database: "suvidha_db",
  })

  try {
    await connection.execute(
      "INSERT INTO inquiries (full_name, email, phone, destination, course) VALUES (?, ?, ?, ?, ?)",
      [fullName, email, phone, destination, course]
    )
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error("DB Error:", error)
    return new Response(JSON.stringify({ error: "Database insert failed" }), {
      status: 500,
    })
  } finally {
    await connection.end()
  }
}
