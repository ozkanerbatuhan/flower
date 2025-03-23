import FlowerAnimation from '@/components/FlowerAnimation'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black relative overflow-hidden">
      <FlowerAnimation />
      <footer className="fixed bottom-4 w-full text-center text-rose-500 text-sm">
        Created by Batuhan Özakner
      </footer>
    </main>
  )
}
