import FlowerAnimation from '@/components/FlowerAnimation'
import GulAnimation from '@/components/GulAnimation'

export default function Home() {

  return (
    <main className="w-full h-screen overflow-hidden">
      <GulAnimation />

      <footer className="fixed bottom-4 w-full text-center text-rose-500 text-sm">
        Created by Batuhan Özakner
      </footer>
    </main>
  )
}
