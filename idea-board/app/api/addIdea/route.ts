import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// This handler processes POST requests
export async function POST(req: Request) {
  const client = await db.connect();

  try {
    const { title, description } = await req.json(); // Parse JSON body
    const dateCreated = new Date().toISOString(); // Get current timestamp

    // Run the SQL query
    await client.sql`
      INSERT INTO ideas (title, description, dateCreated)
      VALUES (${title}, ${description}, ${dateCreated});
    `;

    // Return a successful response
    return NextResponse.json({ message: 'Idea added successfully' });
  } catch (error) {
    console.error('Error adding idea:', error);
    return NextResponse.json({ error: 'Failed to add idea' }, { status: 500 });
  } finally {
    client.release();
  }
}

// this handler processes DELETE requests
export async function DELETE(req: Request) {
  const client = await db.connect();

  try {
    const { title } = await req.json(); // Parse JSON body

    // Run the SQL query
    await client.sql`DELETE FROM ideas WHERE title = ${title}`;

    // Return a successful response
    return NextResponse.json({ message: 'Idea deleted successfully' });
  } catch (error) {
    console.error('Error deleting idea:', error);
    return NextResponse.json({ error: 'Failed to delete idea' }, { status: 500 });
  } finally {
    client.release();
  }
}
