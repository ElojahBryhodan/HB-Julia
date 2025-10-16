export default function Info() {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">Інформація</h2>
      <p className="text-sm text-zinc-700 dark:text-zinc-300">
        Цей сайт-вітанка створений на React + Vite + Tailwind, оптимізований під телефони.
      </p>
      <ul className="text-sm list-disc pl-5">
        <li>Поділитися в один дотик</li>
        <li>Темний режим</li>
        <li>Галерея світлин</li>
        <li>Сторінка побажань</li>
      </ul>
    </div>
  )
}


