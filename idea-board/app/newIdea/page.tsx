'use client';

import { useState } from 'react';

export default function NewIdea() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    setLoading(true);
    try {
      const response = await fetch('/api/addIdea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        alert('Idea added successfully!');
        setTitle('');
        setDescription('');
      } else {
        alert('Failed to add idea');
      }
    } catch (error) {
      console.error('Error submitting idea:', error);
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <nav className="bg-blue-600 text-white shadow-md">
        <h1 className="text-2xl font-bold p-4">Idea Board</h1>
        <p className="p-4">Welcome to your idea board!</p>
      </nav>
      <div className="flex justify-center items-center p-4">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow w-96">
          <h2 className="text-xl font-bold text-gray-800 mb-4">New Idea</h2>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            className="border border-gray-200 p-2 rounded-lg w-full mb-4"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="border border-gray-200 p-2 rounded-lg w-full mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-lg w-full"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </main>
  );
}
