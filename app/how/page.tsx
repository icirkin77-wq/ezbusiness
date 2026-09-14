import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: "💡",
    title: "Разбираем идею",
    text: "Определяем, чем вы хотите заниматься, для кого создаётся продукт и какую проблему он решает.",
  },
  {
    number: "02",
    icon: "🔎",
    title: "Проверяем перспективность",
    text: "Изучаем аудиторию, конкурентов, спрос и основные риски до того, как вы начнёте тратить деньги.",
  },
  {
    number: "03",
    icon: "📊",
    title: "Считаем экономику",
    text: "Разбираемся с расходами, доходами, ценой продукта и потенциальной прибылью.",
  },
  {
    number: "04",
    icon: "🗺️",
    title: "Составляем план",
    text: "Превращаем всю информацию в понятную последовательность действий.",
  },
  {
    number: "05",
    icon: "🚀",
    title: "Начинаем запуск",
    text: "Переходим от рассуждений к конкретным действиям и первым результатам.",
  },
  {
    number: "06",
    icon: "📈",
    title: "Развиваем",
    text: "Анализируем результаты, исправляем ошибки и ищем следующие точки роста.",
  },
];

export default function HowPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1220] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[600px] w-[600px] rounded-full bg-orange-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">

          <div className="max-w-5xl">

            <div className="mb-7 inline-flex rounded-full border border-orange-500/30 bg-orange-500/[0.06] px-5 py-2.5 text-sm font-semibold text-orange-400">
              КАК МЫ РАБОТАЕМ
            </div>

            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              От идеи
              <br />
              <span className="ez-orange-text">
                до работающего бизнеса.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl">
              Не нужно сразу знать всё.
              Мы двигаемся последовательно: разбираем идею,
              проверяем её, считаем цифры и превращаем неопределённость
              в конкретный план действий.
            </p>

          </div>

          <div className="mt-16 grid max-w-5xl gap-4 sm:grid-cols-3">

            {[
              ["01", "Идея", "С чего начинаем"],
              ["02", "План", "Что делаем дальше"],
              ["03", "Запуск", "Переходим к действиям"],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-orange-500/30"
              >
                <div className="text-sm font-bold text-orange-500">
                  {number}
                </div>

                <div className="mt-3 text-xl font-bold">
                  {title}
                </div>

                <div className="mt-1 text-sm text-gray-500">
                  {text}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* STEPS */}
      <section className="border-y border-white/10 bg-[#0E1728]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">

          <div className="max-w-3xl">

            <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Наш подход
            </div>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Путь состоит из шагов.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Каждый следующий этап опирается на предыдущий.
              Поэтому мы не пытаемся построить весь бизнес за один день.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {steps.map((step) => (
              <article
                key={step.number}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111A2B] p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-500/30"
              >

                <div className="absolute right-[-10px] top-[-20px] text-8xl font-black text-white/[0.025]">
                  {step.number}
                </div>

                <div className="relative">

                  <div className="flex items-start justify-between">

                    <div className="text-4xl">
                      {step.icon}
                    </div>

                    <div className="text-sm font-bold text-orange-500">
                      {step.number}
                    </div>

                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {step.text}
                  </p>

                  <div className="mt-7 h-1 w-10 rounded-full bg-orange-600 transition-all duration-300 group-hover:w-20" />

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* PRINCIPLE */}
      <section className="px-5 py-24 sm:px-8 lg:py-32">

        <div className="mx-auto max-w-5xl">

          <div className="relative overflow-hidden rounded-[34px] border border-orange-500/20 bg-gradient-to-br from-orange-950/40 via-[#111A2B] to-[#0B1220] p-8 sm:p-12 lg:p-16">

            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-orange-600/10 blur-[100px]" />

            <div className="relative">

              <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Главный принцип
              </div>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                Не усложнять то,
                <span className="block text-gray-500">
                  что можно сделать понятным.
                </span>
              </h2>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
                Бизнес может казаться огромной и сложной системой.
                Но если разбить его на небольшие задачи,
                становится гораздо проще понять, что делать прямо сейчас.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex rounded-2xl bg-orange-600 px-7 py-4 font-bold transition hover:-translate-y-1 hover:bg-orange-500"
              >
                Обсудить свою идею →
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}