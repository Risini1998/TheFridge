import Image from 'next/image'
import TheFridge from './page/TheFridge'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <TheFridge />
    </main>
  )
}
