import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/[0.05] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <div className="h-px w-8 bg-orange-500" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-500">
                  Контакты
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
                Есть идея?
                <br />
                <span className="text-orange-500">Давайте обсудим.</span>
              </h1>
            </div>

            <p className="max-w-sm text-base leading-7 text-gray-400 lg:pb-2">
              Напишите мне напрямую. Расскажите, чем занимаетесь или какую
              идею хотите проверить. Остальное разберём вместе.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACTS ================= */}

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-2">
            {/* TELEGRAM */}

            <a
              href="https://t.me/EZbusinessEZ"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border-b border-white/10 py-10 md:border-b-0 md:border-r md:pr-12 lg:py-14"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-orange-500"
                      fill="currentColor"
                    >
                      <path d="M21.4 3.6 2.9 10.7c-1.3.5-1.3 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.1.8.8.8.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-15c.3-1.2-.5-1.7-1.5-1.5ZM8.1 13.3l10.8-6.8c.5-.3 1-.1.6.2l-8.8 8-.3 3.1-1.7-4.5-2.8-.9c-.6-.2-.6-.5.2-.8Z" />
                    </svg>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500">
                      Telegram
                    </div>

                    <div className="mt-1 text-xl font-semibold text-white">
                      @EZbusinessEZ
                    </div>
                  </div>
                </div>

                <span className="text-xl text-gray-600 transition duration-300 group-hover:translate-x-1 group-hover:text-orange-500">
                  →
                </span>
              </div>

              <p className="mt-7 max-w-md text-sm leading-6 text-gray-500">
                Основной способ связи. Обычно это самый быстрый вариант
                обсудить вашу задачу.
              </p>
            </a>

            {/* EMAIL */}

            <a
              href="mailto:cirkinila88@gmail.com"
              className="group py-10 md:pl-12 lg:py-14"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500">
                      Email
                    </div>

                    <div className="mt-1 text-xl font-semibold text-white">
                      cirkinila88@gmail.com
                    </div>
                  </div>
                </div>

                <span className="text-xl text-gray-600 transition duration-300 group-hover:translate-x-1 group-hover:text-orange-500">
                  →
                </span>
              </div>

              <p className="mt-7 max-w-md text-sm leading-6 text-gray-500">
                Если удобнее подробно описать вопрос или отправить материалы.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ================= MAIN CTA ================= */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[180px_1fr]">
          <div className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
            Как это работает
          </div>

          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Просто напишите.
              <br />
              <span className="text-gray-500">
                Без презентаций и сложных форм.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Вам не нужно заранее готовить бизнес-план, расчёты или
              стратегию. На первом этапе достаточно рассказать, что у вас
              сейчас есть. Я задам нужные вопросы и помогу разобраться.
            </p>

            <a
              href="https://t.me/EZbusinessEZ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-4 rounded-xl bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-950/20 transition duration-300 hover:bg-orange-500"
            >
              Написать мне в Telegram

              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= PERSONAL LINE ================= */}

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-white">
                EZBusiness
              </div>

              <div className="mt-2 text-sm text-gray-600">
                Ваш бизнес. Мой опыт. Сила ИИ.
              </div>
            </div>

            <Link
              href="/"
              className="text-sm text-gray-500 transition hover:text-white"
            >
              ← На главную
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}