import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Create the MySQL connection
const dbConfig = {
  host: 'localhost',
//   port: 3306, // Default MySQL port, change only if you explicitly use 80
  user: 'root', // 👈 Change this if you use a different username
  password: 'vijay@2003', // 👈 Add your actual password
  database: 'suvidha_db'
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      full_name,
      email,
      phone_number,
      education_level,
      preferred_destination,
      consultation_mode,
      preferred_time_slot
    } = data;

    const connection = await mysql.createConnection(dbConfig);

    const query = `
      INSERT INTO consultations 
        (full_name, email, phone_number, education_level, preferred_destination, consultation_mode, preferred_time_slot)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      full_name,
      email,
      phone_number,
      education_level,
      preferred_destination,
      consultation_mode,
      preferred_time_slot
    ];

    await connection.execute(query, values);
    await connection.end();

    return NextResponse.json({ message: 'Consultation booked successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Error booking consultation' }, { status: 500 });
  }
}
