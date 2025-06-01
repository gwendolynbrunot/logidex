'use client';
import { useEffect, useState } from 'react';
import { getDecisions } from '../../../lib/supabase';

export default function MyDecisionsPage() {
  const [decisions, setDecisions] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getDecisions();
      setDecisions(data);
    }
    loadData();
  }, []);

  return (
    <div className="">
      <h1 className="h1">My Decisions</h1>
      <ul className="space-y-4">
        {decisions.map((decision) => (
          <li key={decision.id} className="border p-4 rounded bg-white shadow">
            <h2 className="font-semibold">{decision.title}</h2>
            <p className="text-gray-600 text-sm">{decision.status}</p>
            <p className="mt-2">{decision.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
