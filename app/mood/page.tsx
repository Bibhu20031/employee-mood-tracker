'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { toast } from "sonner"


export default function Mood() {
  const [mood, setMood] = useState('');
  const [comment, setComment] = useState('');
  const router = useRouter();

  const submitMood = async () => {
    if(!mood) {
    toast("Mood not selected");
  return;
}
    await fetch('/api/mood', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mood, comment }),
    });
    router.push('/');
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center gap-4 p-8 justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <h2 className="text-2xl">How are you feeling today?</h2>
      <div className="flex gap-4">
        {['Happy', 'Neutral', 'Sad'].map((m) => (
          <Button
            key={m}
            variant={m === mood ? 'default' : 'outline'}
            onClick={() => setMood(m)}
          >
            {m === 'Happy' ? '😊' : m === 'Neutral' ? '😐' : '😞'} {m}
          </Button>
        ))}
      </div>
      <Textarea
        placeholder="Optional comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full max-w-md"
      />
      <Button onClick={submitMood}>Submit</Button>
    </main>
  );
}
