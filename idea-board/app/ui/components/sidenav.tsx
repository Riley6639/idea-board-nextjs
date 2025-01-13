import Link from 'next/link';


export default function Sidenav() {
    return (
          <div>
            <nav className="bg-blue-600 text-white shadow-md">
              <h1 className="text-2xl font-bold">Idea Board</h1>
              <div>
                <p>Welcome to your idea board!</p>
              </div>
            </nav>
            <div className="flex space-x-4 p-4">
              <Link href="/" className="text-blue-600 hover:underline">Home</Link>
              <Link href="/about" className="text-blue-600 hover:underline">About</Link>
              <Link href="/newIdea" className="text-blue-600 hover:underline">New Idea</Link>
            </div>
          </div>
    )
}