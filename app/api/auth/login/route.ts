import mysql from "mysql2/promise"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vijay@2003",
    database: "suvidha_db",
  })

  try {
    const [users] = await db.execute("SELECT * FROM users WHERE email = ? AND password = ?", [
      email,
      password,
    ])
    if ((users as any[]).length === 0) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 })
    }
    return new Response(JSON.stringify({ success: true, message: "Login successful" }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 })
  } finally {
    await db.end()
  }
}
