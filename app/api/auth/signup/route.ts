import mysql from "mysql2/promise"

export async function POST(req: Request) {
  const { name, email, password } = await req.json()

  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vijay@2003", // your MySQL password
    database: "suvidha_db",
  })

  try {
    const [existing] = await db.execute("SELECT * FROM users WHERE email = ?", [email])
    if ((existing as any[]).length > 0) {
      return new Response(JSON.stringify({ message: "Email already registered" }), { status: 400 })
    }

    await db.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
      name,
      email,
      password,
    ])
    return new Response(JSON.stringify({ success: true, message: "Signup successful" }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 })
  } finally {
    await db.end()
  }
}
