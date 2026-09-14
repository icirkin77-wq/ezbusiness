import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1220]">

      {/* HERO */}
      <section className="relative">

        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-600/15 blur-[140px]" />

        <div className="pointer-events-none absolute right-[-180px] top-[200px] h-[350px] w-[350px] rounded-full bg-orange-500/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">

          <div className="mb-8 inline-flex items-center rounded-full border border-orange-500/50 bg-[#15120F] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-orange-400">
            КОНТАКТЫ
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Давай начнём
            <br />
            <span className="ez-orange-text">
              с разговора.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Есть идея, вопрос или уже работающий бизнес?
            <br className="hidden sm:block" />
            Напиши мне — разберёмся вместе и определим следующий шаг.
          </p>

        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">

        <div className="grid gap-5 md:grid-cols-2">

          {/* TELEGRAM */}
          <a
            href="https://t.me/EZbusinessEZ"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative min-h-[310px] overflow-hidden rounded-[30px] border border-white/10 bg-[#111A2B] p-7 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 sm:p-9"
          >

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-600/10 blur-[80px] transition duration-500 group-hover:bg-orange-600/20" />

            <div className="relative flex h-full flex-col justify-between">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-xl text-orange-400">
                  ↗
                </div>

                <span className="rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1.5 text-xs text-orange-400">
                  Telegram
                </span>

              </div>

              <div className="mt-16">

                <p className="text-sm text-gray-500">
                  Написать мне
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  @EZbusinessEZ
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                  Самый быстрый способ связаться со мной
                  и обсудить вашу идею.
                </p>

              </div>

            </div>

          </a>

          {/* EMAIL */}
          <a
            href="mailto:cirkinila88@gmail.com"
            className="group relative min-h-[310px] overflow-hidden rounded-[30px] border border-white/10 bg-[#111A2B] p-7 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 sm:p-9"
          >

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-600/5 blur-[90px] transition duration-500 group-hover:bg-orange-600/15" />

            <div className="relative flex h-full flex-col justify-between">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-xl text-gray-300 transition group-hover:bg-orange-500/10 group-hover:text-orange-400">
                  @
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-500 transition group-hover:border-orange-500/20 group-hover:text-orange-400">
                  Email
                </span>

              </div>

              <div className="mt-16">

                <p className="text-sm text-gray-500">
                  Электронная почта
                </p>

                <h2 className="mt-2 break-all text-xl font-bold tracking-tight text-white sm:text-2xl">
                  cirkinila88@gmail.com
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                  Можно написать подробно —
                  я ознакомлюсь и отвечу.
                </p>

              </div>

            </div>

          </a>

        </div>

      </section>

      {/* AI */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#172033] via-[#111A2B] to-[#0F1726] p-7 sm:p-10 lg:p-12">

          <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-orange-600/10 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <div className="mb-5 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/[0.06] px-5 py-2.5 text-sm font-semibold tracking-[0.08em] text-orange-400">
                EZBUSINESS × AI
              </div>

              <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                Вы общаетесь со мной.
                <br />
                <span className="text-gray-500">
                  ИИ работает за кулисами.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                Вам не нужно разбираться в нейросетях и десятках сервисов.
                Я лично работаю с вами, а современные ИИ-инструменты
                помогают мне анализировать идеи, находить решения
                и создавать нужные материалы.
              </p>

            </div>

            <Link
              href="/ai"
              className="group inline-flex w-fit items-center gap-3 rounded-2xl bg-orange-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-950/20 transition duration-300 hover:bg-orange-500"
            >
              Посмотреть ИИ-помощников
              <span className="transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">

        <div className="relative overflow-hidden rounded-[32px] border border-orange-500/20 bg-gradient-to-br from-orange-600/20 via-orange-500/10 to-[#111827] px-6 py-12 text-center sm:px-10 sm:py-16">

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />

          <div className="relative">

            <p className="text-sm font-medium text-orange-400">
              Первый шаг
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Не знаешь, с чего начать?
              <br />
              <span className="text-gray-400">
                Просто напиши мне.
              </span>
            </h2>

            <a
              href="https://t.me/EZbusinessEZ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-2xl bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-orange-950/30 transition duration-300 hover:bg-orange-500"
            >
              Написать в Telegram
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}