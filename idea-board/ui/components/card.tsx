interface CardProps {
    title: string;
    description: string;
}

function Card({ title, description }: CardProps) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

export default Card;
