import Link from "next/link";
import {Button} from '@/components/ui/button';

export default function Home(){
  return(
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-75">
      <h1 className="text-3xl font-bold">Welcome to Mood Tracker</h1>
      <Button>
        <Link href="/mood">Submit Your Mood</Link>
      </Button>     
    </main>
  )
}