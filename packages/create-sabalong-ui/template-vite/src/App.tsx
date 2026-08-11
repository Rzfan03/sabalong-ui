import { useState } from 'react'
import { Button, Notification, type NotificationVariant } from 'sabalong-ui'

const variants: NotificationVariant[] = ['success', 'danger', 'warn', 'info', 'neutral']

export default function App() {
  const [active, setActive] = useState<NotificationVariant | null>(null)

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-zinc-950 p-8">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative flex items-center gap-4">
        <img src="/sabalongui.webp" alt="SabalongUI logo" className="h-15 w-fit rounded-xl border-2 border-zinc-900" />
        <div className="flex flex-col">
        </div>
        <span className="mx-3 hidden h-10 w-px bg-zinc-800 sm:block" />
        <img src="/react.webp" alt="React logo" className="h-15 w-fit" />
      </div>

      <p className="relative text-zinc-400 text-2xl font-medium">SUI x React</p>
      
      <div className="relative flex flex-wrap justify-center gap-3">
        <div>
          <a href='sabalong-ui.vercel.app' className='text-zinc-400 underline cursor-pointer'>Docs</a>
        </div>
      </div>

     
    </main>
  )
}
