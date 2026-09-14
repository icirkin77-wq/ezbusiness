import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B1220]">
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
          
          {/* LEFT */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-orange-400">
                Контакты
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Есть идея?
              <br />
              <span className="text-gray-500">Давайте обсудим.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Расскажите, чем вы хотите заниматься или какой результат хотите
              получить. Я помогу разобраться с идеей и понять, с чего начать.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://t.me/EZbusinessEZ"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-500"
              >
                Написать в Telegram
              </a>

              <a
                href="mailto:cirkinila88@gmail.com"
                className="rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-gray-200 transition hover:border-white/20 hover:bg-white/5"
              >
                Написать на почту
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:pl-8">
            <div className="border-y border-white/10">
              
              <a
                href="https://t.me/EZbusinessEZ"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 py-7 transition"
              >
                <div>
                  <div className="mb-2 text-sm text-gray-500">
                    Telegram
                  </div>
                  <div className="text-xl font-medium text-white transition group-hover:text-orange-400">
                    @EZbusinessEZ
                  </div>
                </div>

                <span className="text-2xl text-gray-600 transition group-hover:translate-x-1 group-hover:text-orange-400">
                  →
                </span>
              </a>

              <a
                href="mailto:cirkinila88@gmail.com"
                className="group flex items-center justify-between gap-6 border-t border-white/10 py-7 transition"
              >
                <div>
                  <div className="mb-2 text-sm text-gray-500">
                    Email
                  </div>
                  <div className="break-all text-xl font-medium text-white transition group-hover:text-orange-400">
                    cirkinila88@gmail.com
                  </div>
                </div>

                <span className="text-2xl text-gray-600 transition group-hover:translate-x-1 group-hover:text-orange-400">
                  →
                </span>
              </a>
            </div>

            <div className="mt-10">
              <p className="text-sm leading-6 text-gray-500">
                Вы общаетесь со мной.
                <br />
                <span className="text-gray-300">
                  ИИ работает за кулисами.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-24 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              Не знаете, с чего начать? Это нормально.
            </p>

            <Link
              href="/how"
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
            >
              Посмотреть, как мы работаем
              <span className="transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}