import { NextResponse } from 'next/server';
import { Mood, moodEntries, moods } from '@/app/api/utils/moods';

export async function GET() {
  return NextResponse.json(moods);
}

export async function POST(req: Request) {
  const { mood, comment } = await req.json();

  if (!Object.values(Mood).includes(mood)) {
    return NextResponse.json({ error: 'Invalid Mood' }, { status: 400 });
  }

  const newEntry: moodEntries = {
    mood,
    comment,
    createdAt: new Date(),
  };
  moods.push(newEntry);

  return NextResponse.json({ message: 'Mood Saved' }, { status: 201 });
}

