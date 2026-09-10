import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B1220]">
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
            Свяжитесь со мной
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Готовы обсудить
            <span className="block text-orange-500">ваш бизнес?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Расскажите мне о своей идее или задаче. Я лично разберусь в
            ситуации и помогу определить следующий шаг.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
          <a
            href="https://t.me/EZbusinessEZ"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.06]"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#229ED9]/10 text-2xl">
              ✈️
            </div>

            <div className="text-sm text-gray-500">Telegram</div>

            <div className="mt-2 text-xl font-semibold text-white">
              @EZbusinessEZ
            </div>

            <div className="mt-3 text-sm text-gray-400">
              Самый быстрый способ связаться со мной
            </div>

            <div className="mt-6 text-sm font-semibold text-orange-500 transition group-hover:text-orange-400">
              Написать в Telegram →
            </div>
          </a>

          <a
            href="mailto:cirkinila88@gmail.com"
            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.06]"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl">
              ✉️
            </div>

            <div className="text-sm text-gray-500">Email</div>

            <div className="mt-2 break-all text-xl font-semibold text-white">
              cirkinila88@gmail.com
            </div>

            <div className="mt-3 text-sm text-gray-400">
              Для подробных вопросов и материалов
            </div>

            <div className="mt-6 text-sm font-semibold text-orange-500 transition group-hover:text-orange-400">
              Написать на email →
            </div>
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-orange-500/20 bg-orange-500/[0.06] p-7 text-center sm:p-9">
          <div className="text-lg font-semibold text-white">
            Не знаете, с чего начать?
          </div>

          <p className="mt-2 text-gray-400">
            Это нормально. Просто напишите мне, что у вас сейчас есть — идея,
            вопрос или проблема. Разберёмся вместе.
          </p>

          <a
            href="https://t.me/EZbusinessEZ"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-2xl bg-orange-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:bg-orange-500"
          >
            Написать мне в Telegram
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm text-gray-500 transition hover:text-white"
          >
            ← Вернуться на главную
          </Link>
        </div>
      </section>
    </main>
  );
}