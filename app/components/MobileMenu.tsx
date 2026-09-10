import Link from "next/link";

export default function MobileMenu() {
  return (
    <details className="group md:hidden">
      {/* КНОПКА */}

      <summary
        aria-label="Открыть меню"
        className="fixed right-5 top-5 z-[9999] flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-white/10 bg-[#172033] text-2xl leading-none text-white shadow-xl marker:hidden [&::-webkit-details-marker]:hidden"
      >
        <span className="group-open:hidden">☰</span>
        <span className="hidden group-open:block">×</span>
      </summary>

      {/* ЗАТЕМНЕНИЕ */}

      <div className="fixed inset-0 z-[9997] bg-black/70" />

      {/* МЕНЮ */}

      <aside className="fixed right-0 top-0 z-[9998] h-screen w-[85%] max-w-sm overflow-y-auto border-l border-white/10 bg-[#0B1220] shadow-2xl">
        {/* Верх */}

        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <div>
            <div className="text-xl font-bold text-white">
              EZBusiness
            </div>

            <div className="mt-1 text-sm text-gray-400">
              Открой свой путь в бизнес
            </div>
          </div>

          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-2xl leading-none text-gray-300">
            ×
          </span>
        </div>

        {/* Навигация */}

        <nav className="flex flex-col gap-2 p-5">
          <Link
            href="/"
            className="rounded-xl px-4 py-4 text-lg text-gray-200 transition hover:bg-white/5"
          >
            Главная
          </Link>

          <Link
            href="/how"
            className="rounded-xl px-4 py-4 text-lg text-gray-200 transition hover:bg-white/5"
          >
            Как мы работаем
          </Link>

          <Link
            href="/ai"
            className="rounded-xl px-4 py-4 text-lg text-gray-200 transition hover:bg-white/5"
          >
            ИИ-помощники
          </Link>

          <Link
            href="/reviews"
            className="rounded-xl px-4 py-4 text-lg text-gray-200 transition hover:bg-white/5"
          >
            Отзывы
          </Link>

          <Link
            href="/about"
            className="rounded-xl px-4 py-4 text-lg text-gray-200 transition hover:bg-white/5"
          >
            Обо мне
          </Link>

          <Link
            href="/contact"
            className="mt-3 rounded-2xl bg-orange-600 px-4 py-4 text-center text-lg font-bold text-white transition hover:bg-orange-500"
          >
            Написать мне
          </Link>
        </nav>
      </aside>
    </details>
  );
}