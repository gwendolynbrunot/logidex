import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-8 flex flex-col h-screen justify-between">
      <div className="flex flex-col space-y-6 w-40 min-w-32">
        <Link href="/" className="text-xl font-bold text-blue-600">Logidex</Link>
        <Link href="/decisions" className="text-gray-700 hover:text-blue-600">My Decisions</Link>
        <Link href="/decisions/new" className="text-gray-700 hover:text-blue-600">New</Link>
        <Link href="/audit-log" className="text-gray-700 hover:text-blue-600">Audit Log</Link>
      </div>
      <div>
        <button className="text-sm text-gray-500 hover:text-gray-700">Sign Out</button>
      </div>
    </nav>
  );
}