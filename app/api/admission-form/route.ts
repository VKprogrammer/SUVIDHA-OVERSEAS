import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// For localhost: use port 3306 or 80 depending on your setup
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",      // Replace with your MySQL password
  database: "suvidha_db",
//   port: 3306          // Use 80 only if your MySQL is configured on port 80
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, destination, background } = data;

const connection = await mysql.createConnection(dbConfig);

const query = `
  INSERT INTO admission_forms
    (full_name, email, preferred_country, background) 
  VALUES (?, ?, ?, ?)
`;

await connection.execute(query, [
  name,
  email,
  destination,
  background,
]);

    await connection.end();
    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json({ message: "Failed to submit form" }, { status: 500 });
  }
}
