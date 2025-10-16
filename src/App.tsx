import { Link, NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-neutral-950 to-neutral-900 dark:from-neutral-950 dark:to-neutral-900 text-zinc-900 dark:text-zinc-100 flex flex-col">
      <header className="sticky top-0 z-10 backdrop-blur-xl">
        <div className="max-w-md sm:max-w-lg mx-auto px-4 pt-3">
          <div className="h-12 sm:h-14 w-full rounded-full border border-white/10 bg-white/10 dark:bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] flex items-center justify-between px-2 sm:px-3">
            <Link to="/" className="group inline-flex items-center gap-2 pl-2 sm:pl-3 pr-2">
              <span className="text-lg sm:text-xl">🎂</span>
              <div className="leading-tight">
                <div className="font-semibold tracking-tight text-white/90">Юля!</div>
              </div>
            </Link>
            <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full transition-all border ${
                    isActive
                      ? 'bg-white text-zinc-900 border-white shadow'
                      : 'bg-white/10 text-white/80 border-white/10 hover:bg-white/20 hover:text-white'
                  }`
                }
              >
                Головна
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full transition-all border ${
                    isActive
                      ? 'bg-white text-zinc-900 border-white shadow'
                      : 'bg-white/10 text-white/80 border-white/10 hover:bg-white/20 hover:text-white'
                  }`
                }
              >
                Галерея
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-md sm:max-w-lg mx-auto px-4 py-6 space-y-6">
          <Outlet />
        </div>
      </main>

      <footer className="mt-auto py-4 text-center text-xs text-zinc-600 dark:text-zinc-400">
        З любов'ю • {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App

