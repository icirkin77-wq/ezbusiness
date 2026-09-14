import Link from "next/link";

const tools = [
  {
    number: "01",
    icon: "🧠",
    title: "Анализ идей",
    text: "Помогаю глубже разобрать бизнес-идею, рынок, аудиторию и возможные сценарии развития.",
  },
  {
    number: "02",
    icon: "📊",
    title: "Работа с цифрами",
    text: "Использую ИИ-инструменты для расчётов, структурирования данных и поиска закономерностей.",
  },
  {
    number: "03",
    icon: "🔎",
    title: "Исследования",
    text: "Быстрее собираю и систематизирую информацию, которая нужна для принятия решений.",
  },
  {
    number: "04",
    icon: "✍️",
    title: "Материалы",
    text: "Создаю и дорабатываю тексты, структуры, документы и другие материалы для проекта.",
  },
  {
    number: "05",
    icon: "⚙️",
    title: "Сценарии",
    text: "Могу сравнивать разные варианты действий и искать более эффективные решения.",
  },
  {
    number: "06",
    icon: "🚀",
    title: "Скорость",
    text: "ИИ помогает быстрее проходить рутинные этапы, чтобы больше времени оставалось на главное.",
  },
];

export default function AIPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1220] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-orange-600/12 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">

          <div className="max-w-5xl">

            <div className="mb-7 inline-flex rounded-full border border-orange-500/30 bg-orange-500/[0.06] px-5 py-2.5 text-sm font-semibold tracking-[0.08em] text-orange-400">
              EZBUSINESS × AI
            </div>

            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              ИИ работает
              <br />
              <span className="ez-orange-text">
                за кулисами.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl">
              Вам не нужно учиться пользоваться десятками нейросетей.
              Я сам выбираю подходящие инструменты и использую их
              внутри своей работы с вами.
            </p>

          </div>

        </div>
      </section>

      {/* FLOW */}
      <section className="border-y border-white/10 bg-[#0E1728]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">

          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-[28px] border border-white/10 bg-[#111A2B] p-8">
              <div className="text-sm font-bold text-gray-500">
                01
              </div>

              <div className="mt-5 text-4xl">
                👤
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Вы
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Рассказываете мне о своей задаче, идее или бизнесе.
              </p>
            </div>

            <div className="rounded-[28px] border border-orange-500/20 bg-orange-500/[0.05] p-8">
              <div className="text-sm font-bold text-orange-500">
                02
              </div>

              <div className="mt-5 text-4xl">
                ⚡
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Я + ИИ
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Я анализирую задачу и подключаю современные ИИ-инструменты там,
                где они действительно полезны.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#111A2B] p-8">
              <div className="text-sm font-bold text-gray-500">
                03
              </div>

              <div className="mt-5 text-4xl">
                🚀
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Результат
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Вы получаете не работу с нейросетью, а понятный результат
                и следующий шаг.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TOOLS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

        <div className="max-w-3xl">

          <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Возможности
          </div>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Где ИИ помогает мне
            <span className="block text-gray-500">
              в работе.
            </span>
          </h2>

        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {tools.map((tool) => (
            <article
              key={tool.number}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-500/30"
            >

              <div className="absolute right-[-15px] top-[-20px] text-8xl font-black text-white/[0.025]">
                {tool.number}
              </div>

              <div className="relative">

                <div className="flex items-center justify-between">

                  <div className="text-4xl">
                    {tool.icon}
                  </div>

                  <div className="text-sm font-bold text-orange-500">
                    {tool.number}
                  </div>

                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {tool.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {tool.text}
                </p>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* IMPORTANT */}
      <section className="border-y border-white/10 bg-[#080E1A]">

        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8 lg:py-28">

          <div className="rounded-[34px] border border-orange-500/20 bg-gradient-to-br from-orange-950/40 via-[#111A2B] to-[#0B1220] p-8 sm:p-12 lg:p-14">

            <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Главное
            </div>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Вы не общаетесь
              <span className="block text-orange-500">
                с нейросетью.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
              Ваша задача — рассказать мне, что вы хотите получить.
              Моя задача — разобраться, какие инструменты и подходы
              помогут решить эту задачу максимально эффективно.
            </p>

            <div className="mt-8 border-l-2 border-orange-500 pl-5 text-lg font-medium leading-8 text-gray-200">
              Вы общаетесь со мной.
              <br />
              ИИ работает за кулисами.
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">

        <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
          EZBusiness
        </div>

        <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
          Технологии —
          <span className="block text-gray-500">
            это инструмент.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          А главное — человек, который понимает вашу задачу
          и помогает довести её до результата.
        </p>

        <Link
          href="/contact"
          className="mt-9 inline-flex rounded-2xl bg-orange-600 px-8 py-4 font-bold shadow-xl shadow-orange-950/30 transition hover:-translate-y-1 hover:bg-orange-500"
        >
          Обсудить задачу →
        </Link>

      </section>

    </main>
  );
}