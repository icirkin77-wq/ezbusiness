import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Разбираем идею",
    text: "Определяем, чем вы хотите заниматься, для кого создаётся продукт и какую проблему он решает.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Проверяем перспективность",
    text: "Изучаем аудиторию, конкурентов, спрос и основные риски до того, как вы начнёте тратить деньги.",
    icon: "⌕",
  },
  {
    number: "03",
    title: "Считаем экономику",
    text: "Разбираемся с расходами, доходами, ценой продукта и потенциальной прибылью.",
    icon: "▦",
  },
  {
    number: "04",
    title: "Составляем план",
    text: "Превращаем всю информацию в понятную последовательность действий.",
    icon: "→",
  },
  {
    number: "05",
    title: "Начинаем запуск",
    text: "Переходим от рассуждений к конкретным действиям и первым результатам.",
    icon: "↗",
  },
  {
    number: "06",
    title: "Развиваем",
    text: "Анализируем результаты, исправляем ошибки и ищем следующие точки роста.",
    icon: "↑",
  },
];

export default function HowPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1220] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[600px] w-[600px] rounded-full bg-orange-600/15 blur-[150px]" />

        <div className="pointer-events-none absolute left-[-250px] top-[350px] h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 lg:pb-32 lg:pt-28">

          <div className="max-w-5xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/[0.06] px-5 py-2.5 text-sm font-semibold text-orange-400">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Как это работает
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              От идеи
              <span className="block bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 bg-clip-text text-transparent">
                до бизнеса.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl sm:leading-9">
              Не нужно сразу знать всё.
              Мы двигаемся последовательно: разбираем идею,
              проверяем её, считаем цифры и превращаем
              неопределённость в конкретный план действий.
            </p>

          </div>

          <div className="mt-16 grid max-w-5xl gap-4 sm:grid-cols-3">

            {[
              ["01", "Идея", "с чего начинаем"],
              ["02", "План", "что делаем дальше"],
              ["03", "Запуск", "переходим к действиям"],
            ].map(([number, title, text]) => (

              <div
                key={number}
                className="group rounded-[26px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30"
              >
                <div className="text-xs font-bold tracking-[0.2em] text-orange-500">
                  {number}
                </div>

                <div className="mt-4 text-2xl font-bold">
                  {title}
                </div>

                <div className="mt-2 text-sm text-gray-500">
                  {text}
                </div>
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/10 bg-[#0E1728]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              <div className="text-sm font-semibold tracking-[0.18em] text-orange-400">
                НАШ ПОДХОД
              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                Путь состоит
                <span className="block text-gray-500">
                  из понятных шагов.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-base leading-7 text-gray-500">
              Каждый следующий этап опирается на предыдущий.
              Поэтому мы не пытаемся построить весь бизнес
              за один день.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {steps.map((step) => (

              <article
                key={step.number}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111A2B] p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-orange-500/30"
              >

                <div className="absolute right-[-20px] top-[-25px] text-[8rem] font-black leading-none text-white/[0.025] transition group-hover:text-orange-500/[0.07]">
                  {step.number}
                </div>

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-xl font-bold text-orange-400">
                      {step.icon}
                    </div>

                    <div className="text-xs font-bold tracking-[0.2em] text-gray-600">
                      {step.number}
                    </div>

                  </div>

                  <h3 className="mt-9 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {step.text}
                  </p>

                  <div className="mt-8 h-1 w-10 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* PRINCIPLE */}
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/5 blur-[150px]" />

        <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 lg:py-32">

          <div className="relative overflow-hidden rounded-[36px] border border-orange-500/20 bg-gradient-to-br from-orange-600/15 via-[#111A2B] to-[#0B1220] p-8 shadow-2xl sm:p-12 lg:p-16">

            <div className="text-sm font-semibold tracking-[0.18em] text-orange-400">
              ГЛАВНЫЙ ПРИНЦИП
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Не усложнять то,
              <span className="block text-gray-500">
                что можно сделать понятным.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
              Бизнес может казаться огромной и сложной системой.
              Но если разбить его на небольшие задачи, становится
              гораздо проще понять, что делать прямо сейчас.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center rounded-2xl bg-orange-600 px-7 py-4 font-bold shadow-xl shadow-orange-950/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
            >
              Обсудить свою идею →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}