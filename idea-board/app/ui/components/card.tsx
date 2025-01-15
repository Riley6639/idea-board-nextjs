'use client';

import "../../globals.css";
// import { deleteIdea } from "../../lib/data";

interface CardProps {
    title: string;
    description: string;
    dateCreated: string;
}

function Card({ title, description, dateCreated }: CardProps) {
    const handleDelete = async () => {
        try {
            const response = await fetch('/api/addIdea', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            });

            if (response.ok) {
                alert('Idea deleted successfully!');
            } else {
                alert('Failed to delete idea');
            }

            window.location.reload();
        } catch (error) {
            console.error('Error deleting idea:', error);
            alert('An error occurred');
        }
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <p className="text-gray-600">{dateCreated}</p>
            <button onClick={handleDelete} className="bg-red-600 text-white p-2 rounded-lg w-full mt-4">
                Delete
            </button>
        </div>
    );
}

export default Card;
