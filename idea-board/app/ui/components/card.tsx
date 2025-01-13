import "../../globals.css";

interface CardProps {
    title: string;
    description: string;
    dateCreated: string;
}

function Card({ title, description, dateCreated }: CardProps) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <p className="text-gray-600">{dateCreated}</p>
        </div>
    );
}

export default Card;
