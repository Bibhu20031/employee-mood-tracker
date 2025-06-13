'use client';
import { moodEntries } from '@/app/api/utils/moods';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [entries, setEntries] = useState<moodEntries[]>([]);

  useEffect(() => {
  fetch('/api/mood')
    .then((res) => res.json()) 
    .then((data) => {
      setEntries(
        data.map((entry: moodEntries) => ({
          ...entry,
          createdAt: new Date(entry.createdAt),
        }))
      );
    });
}, []);


  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-4">Mood Submissions</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Mood</th>
            <th className="p-2 border">Comment</th>
            <th className="p-2 border">Time</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, i) => (
            <tr key={i}>
              <td className="p-2 border text-3xl caret-amber-500">{entry.mood}</td>
              <td className="p-2 border">{entry.comment || '-'}</td>
              <td className="p-2 border">{new Date(entry.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
