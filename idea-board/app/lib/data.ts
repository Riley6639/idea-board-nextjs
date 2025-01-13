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

const client = await db.connect();

export async function fetchIdeas(): Promise<Idea[]> {
  const { rows } = await client.sql`
    SELECT title, description, dateCreated::timestamptz AS dateCreated FROM ideas;
  `;
  // console.log(rows);
  return rows.map((row) => ({
    title: row.title,
    description: row.description,
    dateCreated: new Date(row.datecreated), 
  }));
}

export async function addIdea(idea: Idea) {
  try {
    await client.sql`INSERT INTO ideas (title, description, dateCreated)
    VALUES (${idea.title}, ${idea.description}, ${idea.dateCreated.toISOString()})`;  
  } catch (error) {
    console.error(error);
  }
}


