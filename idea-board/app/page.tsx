// pages/index.tsx
import Card from './ui/components/card';
import { fetchIdeas } from './lib/data';


export default async function Home() {
  const ideas = await fetchIdeas();
  // console.log(ideas);
  return (
    <main>
      <nav className="bg-blue-600 text-white shadow-md">
        <h1 className="text-2xl font-bold">Idea Board</h1>
        <div>
          <p>Welcome to your idea board!</p>
        </div>
      </nav>
      <div className="flex space-x-4 p-4">
        {
          ideas.map((idea) => (
            <Card key={idea.title} title={idea.title} description={idea.description} dateCreated={idea.dateCreated.toDateString()} />
          ))
        }
      </div>
    </main>

  );
}

