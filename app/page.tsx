import Link from "next/link";

const benefits = [
  {
    icon: "💡",
    title: "Идея",
    text: "Разберём вашу задумку и поймём, есть ли в ней потенциал.",
  },
  {
    icon: "📊",
    title: "Цифры",
    text: "Посчитаем расходы, доходы, цену продукта и экономику.",
  },
  {
    icon: "🧭",
    title: "План",
    text: "Составим понятный маршрут от идеи до первых действий.",
  },
  {
    icon: "🚀",
    title: "Запуск",
    text: "Перейдём от разговоров к конкретным действиям.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1220] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-orange-600/15 blur-[150px]" />

        <div className="pointer-events-none absolute right-[-180px] top-[250px] h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28">

          <div className="max-w-5xl">

            <div className="mb-7 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/[0.06] px-5 py-2.5 text-sm font-semibold tracking-wide text-orange-400">
              EZBUSINESS
            </div>

            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Открой свой
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 bg-clip-text text-transparent">
                путь в бизнес.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
              Помогаю превратить идею в понятный план действий,
              разобраться в цифрах и сделать первые шаги к своему бизнесу.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-orange-600 px-7 py-4 font-bold text-white shadow-xl shadow-orange-950/30 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                Обсудить свою идею
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/how"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                Как это работает
              </Link>

            </div>

          </div>

          {/* STATS */}
          <div className="mt-20 grid max-w-4xl gap-4 sm:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <div className="text-3xl font-bold text-white">01</div>
              <div className="mt-2 font-semibold">Личная работа</div>
              <div className="mt-1 text-sm text-gray-500">
                Вы общаетесь непосредственно со мной
              </div>
            </div>

            <div className="rounded-3xl border border-orange-500/20 bg-orange-500/[0.04] p-6">
              <div className="text-3xl font-bold text-orange-400">AI</div>
              <div className="mt-2 font-semibold">ИИ за кулисами</div>
              <div className="mt-1 text-sm text-gray-500">
                Современные инструменты помогают мне в работе
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <div className="text-3xl font-bold text-white">∞</div>
              <div className="mt-2 font-semibold">От идеи до роста</div>
              <div className="mt-1 text-sm text-gray-500">
                Работаем последовательно
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-white/10 bg-[#0E1728]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">

          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              С чего начинаем
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Не нужно знать всё.
              <span className="block text-gray-500">
                Нужно сделать первый шаг.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Вместе разбираем задачу и постепенно превращаем
              неопределённость в конкретные действия.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item) => (
              <div
                key={item.title}
                className="group rounded-[28px] border border-white/10 bg-[#111A2B] p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-500/30"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-7 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.text}
                </p>

                <div className="mt-7 h-1 w-8 rounded-full bg-orange-600 transition-all duration-300 group-hover:w-16" />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* AI */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-[-200px] top-20 h-96 w-96 rounded-full bg-orange-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

          <div className="rounded-[34px] border border-white/10 bg-gradient-to-br from-[#172033] via-[#111A2B] to-[#0F1726] p-7 sm:p-10 lg:p-14">

            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">

              <div>

                <div className="mb-6 inline-flex rounded-full border border-orange-500/30 bg-orange-500/[0.06] px-5 py-2.5 text-sm font-semibold tracking-[0.08em] text-orange-400">
                  EZBUSINESS × AI
                </div>

                <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Ваш бизнес.
                  <br />
                  <span className="text-gray-500">
                    Мой опыт.
                  </span>
                  <br />
                  <span className="ez-orange-text">
                    Сила ИИ.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
                  Вам не нужно самостоятельно разбираться в нейросетях.
                  Я лично работаю с вами, а современные ИИ-инструменты
                  помогают мне анализировать информацию, проверять идеи,
                  считать и создавать необходимые материалы.
                </p>

                <Link
                  href="/ai"
                  className="mt-8 inline-flex rounded-2xl border border-orange-500/30 bg-orange-500/[0.08] px-6 py-3.5 font-semibold text-orange-400 transition hover:bg-orange-500/[0.14]"
                >
                  Посмотреть ИИ-помощников →
                </Link>

              </div>

              <div className="space-y-3">

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-sm text-gray-500">01</div>
                  <div className="mt-2 text-xl font-bold">👤 Вы</div>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Рассказываете мне о своей идее или задаче.
                  </p>
                </div>

                <div className="text-center text-orange-500">
                  ↓
                </div>

                <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.05] p-5">
                  <div className="text-sm text-orange-500">02</div>
                  <div className="mt-2 text-xl font-bold">
                    ⚡ EZBusiness
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Я анализирую ситуацию и использую подходящие ИИ-инструменты.
                  </p>
                </div>

                <div className="text-center text-orange-500">
                  ↓
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-sm text-gray-500">03</div>
                  <div className="mt-2 text-xl font-bold">🚀 Результат</div>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Получаете понятные решения и следующие шаги.
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-12 border-t border-white/10 pt-7 text-center text-sm font-medium text-gray-400">
              Вы общаетесь со мной. ИИ работает за кулисами.
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 bottom-[-250px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">

          <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Первый шаг
          </div>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Есть идея?
            <span className="block text-gray-500">
              Давайте разберём её вместе.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Не нужен готовый бизнес-план.
            Достаточно идеи, вопроса или желания начать.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-2xl bg-orange-600 px-8 py-4 font-bold text-white shadow-xl shadow-orange-950/30 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
          >
            Написать мне →
          </Link>

        </div>
      </section>

    </main>
  );
}