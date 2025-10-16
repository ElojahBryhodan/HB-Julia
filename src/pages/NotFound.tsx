import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mb-2">Сторінку не знайдено</h2>
      <p className="text-sm mb-4">Можливо, посилання застаріло або має помилку.</p>
      <Link to="/" className="inline-block rounded-xl px-4 py-2 bg-rose-500 text-white font-semibold">
        На головну
      </Link>
    </div>
  )
}


