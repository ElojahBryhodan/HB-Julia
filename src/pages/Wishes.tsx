import { useState } from 'react'

type Wish = { id: number; text: string }

export default function Wishes() {
  const [input, setInput] = useState("")
  const [wishes, setWishes] = useState<Wish[]>([])

  function addWish() {
    const text = input.trim()
    if (!text) return
    setWishes((prev) => [{ id: Date.now(), text }, ...prev])
    setInput("")
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Побажання</h2>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Напишіть побажання…"
          className="flex-1 rounded-xl px-4 py-2 bg-white/80 dark:bg-white/10 border border-white/40 dark:border-white/10 outline-none"
        />
        <button
          onClick={addWish}
          className="rounded-xl px-4 py-2 bg-rose-500 text-white font-semibold"
        >
          Додати
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {wishes.map((w) => (
          <li key={w.id} className="rounded-xl px-4 py-3 bg-white/80 dark:bg-white/5 border border-white/40 dark:border-white/10">
            {w.text}
          </li>
        ))}
      </ul>
    </div>
  )
}


