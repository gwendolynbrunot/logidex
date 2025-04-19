// logidex/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

      <section className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Pending Decisions</h2>
        <p className="text-sm text-gray-500">No pending decisions right now.</p>
      </section>

      <section className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>No recent activity yet.</li>
        </ul>
      </section>

      <section className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
        <div className="flex space-x-4">
          <Link href="/decisions/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">New Decision</Link>
          <Link href="/decisions" className="bg-gray-100 text-blue-700 px-4 py-2 rounded hover:bg-gray-200">View All</Link>
        </div>
      </section>
    </div>
  );
}