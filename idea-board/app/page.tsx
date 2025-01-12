// pages/index.tsx
import Card from '../ui/components/card';

export default function Home() {
  return (
    <main>
      <h1>Idea Board</h1>
      <div>
        <p>Welcome to your idea board!</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Idea 1" description="Description for idea 1" />
        <Card title="Idea 2" description="Description for idea 2" />
        <Card title="Idea 3" description="Description for idea 3" />
        <Card title="Idea 4" description="Description for idea 4" />
        <Card title="Idea 5" description="Description for idea 5" />
      </div>
    </main>

  );
}

