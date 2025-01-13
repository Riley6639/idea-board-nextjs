'use client';

import { addIdea } from '../lib/data';
import { useState } from 'react';

export default function NewIdea() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        const idea = { title, description, dateCreated: new Date() };
        await addIdea(idea);
      };


    return(
        <main>
            <nav className="bg-blue-600 text-white shadow-md">
                <h1 className="text-2xl font-bold">Idea Board</h1>
                <div>
                    <p>Welcome to your idea board!</p>
                </div>
            </nav>
            <div className="flex space-x-4 p-4">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">New Idea</h2>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" className="border border-gray-200 p-2 rounded-lg w-full mb-2" />
                    <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="border border-gray-200 p-2 rounded-lg w-full mb-2"></textarea>
                    <button className="bg-blue-600 text-white p-2 rounded-lg w-full">Submit</button>
                </form>
            </div>
        </main>
    )
}