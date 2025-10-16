import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export default function Home() {
  const [copyStatusMessage, setCopyStatusMessage] = useState<string>("")

  const pageTitle = useMemo(() => "З Днем народження, Юля! 🎉", [])
  const shareText = useMemo(
    () => "Вітаю з Днем народження! Бажаю радості, натхнення і здійснення мрій! 🎂🎈",
    []
  )

  const handleShare = useCallback(async () => {
    const shareData = {
      title: pageTitle,
      text: shareText,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        return
      }
      await navigator.clipboard.writeText(`${shareText} ${window.location.href}`)
      setCopyStatusMessage("Посилання скопійовано ✨")
      setTimeout(() => setCopyStatusMessage(""), 2000)
    } catch (err) {
      setCopyStatusMessage("Не вдалося поділитися. Спробуйте ще раз.")
      setTimeout(() => setCopyStatusMessage(""), 2500)
    }
  }, [pageTitle, shareText])

  // Test function to verify component renders
  console.log('Home component rendering')

  // Confetti animation removed per request

  // Simple scroll-in animation using IntersectionObserver
  const wishRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = wishRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', 'translate-y-4')
          el.classList.add('opacity-100', 'translate-y-0')
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="text-center space-y-6">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl p-8 bg-white/80 dark:bg-white/5 backdrop-blur border border-white/40 dark:border-white/10 shadow-xl">
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-tr from-rose-400 to-amber-300 blur-2xl opacity-40" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-400 to-fuchsia-400 blur-2xl opacity-30" />

        <div className="relative">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl animate-bounce">🎈</span>
            <h1 className="text-3xl font-extrabold tracking-tight font-display">{pageTitle}</h1>
            <span className="text-3xl animate-bounce [animation-delay:200ms]">🎈</span>
          </div>

          <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-200">
            Нехай цей день буде сповнений усмішок, тепла і яскравих вражень.
            Бажаю міцного здоров'я, любові та здійснення найзаповітніших мрій! 💖
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3 text-2xl select-none">
            <div className="bg-white/70 dark:bg-white/10 rounded-2xl p-3 border border-white/40 dark:border-white/10 shadow">🎂</div>
            <div className="bg-white/70 dark:bg-white/10 rounded-2xl p-3 border border-white/40 dark:border-white/10 shadow">🎁</div>
            <div className="bg-white/70 dark:bg-white/10 rounded-2xl p-3 border border-white/40 dark:border-white/10 shadow">✨</div>
          </div>

          <button
            onClick={handleShare}
            className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-white dark:text-zinc-900 shadow-[0_10px_30px_-10px_rgba(24,24,27,0.5)] active:translate-y-[1px] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 disabled:opacity-60"
          >
            <span>Поділитися привітанням</span>
            <span aria-hidden>🔗</span>
          </button>

          {copyStatusMessage && (
            <div className="mt-3 text-sm text-emerald-700 dark:text-emerald-300">
              {copyStatusMessage}
            </div>
          )}
        </div>
      </div>

      {/* Wishes section card */}
      <div ref={wishRef} className="opacity-0 translate-y-4 transition-all duration-700">
        <div className="rounded-3xl p-6 bg-white/80 dark:bg-white/5 backdrop-blur border border-white/40 dark:border-white/10 shadow">
          <h2 className="text-xl font-semibold mb-2 font-display">Теплі побажання</h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-200">
            Бажаю, щоб в цей день, ти залишалась, такою доброю, як ти є зараз, хай Бог благословить твоє життя,
            і рано чи пізно дасть допоможе осягнути його велич в твоєму житті!
          </p>
        </div>
      </div>

      {/* Extra section for depth */}
      <div className="rounded-3xl p-6 bg-white/70 dark:bg-white/5 backdrop-blur border border-white/40 dark:border-white/10 shadow">
        <h2 className="text-xl font-semibold mb-2 font-display">Для Юлі</h2>
        <p className="text-sm text-zinc-700 dark:text-zinc-200">
          Твоє свято — це наша радість. Хай мрії збуваються, а поруч будуть ті,
          хто надихає й підтримує щодня.
        </p>
      </div>
    </div>
  )
}


