import { db } from '@vercel/postgres';
import WebSocket from 'isomorphic-ws';

if (typeof global.WebSocket === 'undefined') {
  global.WebSocket = WebSocket;
}

type Idea = {
  title: string;
  description: string;
  dateCreated: Date;
};


// export async function fetchIdeas(): Promise<Idea[]> {
//   const client = await db.connect();
//   const { rows } = await client.sql`
//     SELECT title, description, dateCreated::timestamptz AS dateCreated FROM ideas;
//   `;
//   // console.log(rows);
//   client.release()
//   return rows.map((row) => ({
//     title: row.title,
//     description: row.description,
//     dateCreated: new Date(row.datecreated),
//   }));
// }

export async function fetchIdeas(): Promise<Idea[]> {
  const client = await db.connect();
  try {
    const { rows } = await client.sql`SELECT * FROM ideas ORDER BY dateCreated DESC;`;
    return rows.map((row) => ({
      title: row.title,
      description: row.description,
      dateCreated: new Date(row.dateCreated),
    }));
  } catch (error) {
    console.error('Error fetching ideas:', error);
    return [];
  } finally {
    client.release();
  }
}


export async function addIdea(idea: Idea) {
  const client = await db.connect();
  try {
    await client.sql`INSERT INTO ideas (title, description, dateCreated)
    VALUES (${idea.title}, ${idea.description}, ${idea.dateCreated.toISOString()})`;
  } catch (error) {
    console.error(error);
  } finally {
    client.release();
  }
}

export async function deleteIdea(title: string) {
  const client = await db.connect();
  try {
    await client.sql`DELETE FROM ideas WHERE title = ${title}`;
  } catch (error) {
    console.error(error);
  } finally {
    client.release();
  }
}


