import { db } from '@vercel/postgres';
import ideaBoardData from '../lib/placeholder-data';

const client = await db.connect();

async function seedIdeas() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    await client.sql`
      CREATE TABLE IF NOT EXISTS ideas (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        dateCreated DATE NOT NULL
      );
    `;

    const insertedIdeas = await Promise.all(
        ideaBoardData.map(
            (idea) => client.sql`
          INSERT INTO invoices (customer_id, amount, status, date)
          VALUES (${idea.title}, ${idea.description}, ${idea.dateCreated})
          ON CONFLICT (id) DO NOTHING;
        `,
        ),
    );

    return insertedIdeas;
}

export default seedIdeas;