import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B1220]">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-600/[0.07] blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="text-sm font-medium text-orange-400">
                Контакты
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Давайте
              <br />
              <span className="text-orange-500">поговорим.</span>
            </h1>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
              <p className="max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
                Есть идея, вопрос или уже работающий бизнес?
                Расскажите мне о нём. Необязательно приходить с готовым
                бизнес-планом — разберёмся вместе и определим следующий шаг.
              </p>

              <div>
                <a
                  href="https://t.me/EZbusinessEZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl bg-orange-600 px-6 py-5 text-white shadow-2xl shadow-orange-950/30 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
                >
                  <div>
                    <div className="text-sm text-orange-100/70">
                      Быстрее всего
                    </div>

                    <div className="mt-1 text-lg font-semibold">
                      Написать в Telegram
                    </div>
                  </div>

                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid md:grid-cols-2">
            {/* TELEGRAM */}

            <a
              href="https://t.me/EZbusinessEZ"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-b border-white/10 py-10 md:border-b-0 md:border-r md:pr-14 lg:py-14"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-gray-500">
                    Telegram
                  </div>

                  <div className="mt-3 text-2xl font-semibold text-white">
                    @EZbusinessEZ
                  </div>
                </div>

                <span className="text-xl text-gray-600 transition group-hover:text-orange-500">
                  ↗
                </span>
              </div>

              <p className="mt-6 max-w-md text-gray-400">
                Для быстрого общения, вопросов и обсуждения вашей идеи.
              </p>
            </a>

            {/* EMAIL */}

            <a
              href="mailto:cirkinila88@gmail.com"
              className="group py-10 md:pl-14 lg:py-14"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-gray-500">
                    Email
                  </div>

                  <div className="mt-3 break-all text-2xl font-semibold text-white">
                    cirkinila88@gmail.com
                  </div>
                </div>

                <span className="text-xl text-gray-600 transition group-hover:text-orange-500">
                  ↗
                </span>
              </div>

              <p className="mt-6 max-w-md text-gray-400">
                Если удобнее подробно описать задачу или отправить материалы.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ================= PERSONAL NOTE ================= */}

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[180px_1fr]">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
            От меня
          </div>

          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Вы общаетесь
              <span className="text-gray-500"> со мной.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
              Я лично работаю с каждым клиентом. ИИ-инструменты помогают мне
              анализировать идеи, искать решения и готовить материалы, но за
              результатом и общением стою я.
            </p>

            <a
              href="https://t.me/EZbusinessEZ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center border-b border-orange-500 pb-2 text-lg font-semibold text-orange-500 transition hover:border-orange-400 hover:text-orange-400"
            >
              Начать разговор
              <span className="ml-3">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-lg font-semibold text-white">
                EZBusiness
              </div>

              <div className="mt-1 text-sm text-gray-500">
                Открой свой путь в бизнес
              </div>
            </div>

            <Link
              href="/"
              className="text-sm text-gray-500 transition hover:text-white"
            >
              ← Вернуться на главную
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}