import Link from "next/link";

const tools = [
  {
    number: "01",
    title: "Анализ идеи",
    text: "Помогаю разложить идею на составляющие, определить аудиторию, ценность продукта и возможные направления развития.",
  },
  {
    number: "02",
    title: "Исследование",
    text: "ИИ помогает быстрее собирать и структурировать информацию о рынке, конкурентах, аудитории и возможных сценариях.",
  },
  {
    number: "03",
    title: "Экономика",
    text: "Использую технологии для расчётов, сравнения сценариев и поиска более понятной картины по цифрам.",
  },
  {
    number: "04",
    title: "Материалы",
    text: "ИИ помогает готовить тексты, структуры, документы, идеи для продвижения и другие рабочие материалы.",
  },
  {
    number: "05",
    title: "Поиск решений",
    text: "Когда возникает задача, можно быстро рассмотреть несколько вариантов и найти наиболее подходящий путь.",
  },
  {
    number: "06",
    title: "Проверка гипотез",
    text: "Разные сценарии можно сравнивать до того, как вы начнёте тратить реальные деньги и ресурсы.",
  },
];

export default function AIPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1220] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute right-[-150px] top-[-180px] h-[650px] w-[650px] rounded-full bg-orange-600/15 blur-[160px]" />

        <div className="pointer-events-none absolute left-[-200px] top-[400px] h-[450px] w-[450px] rounded-full bg-orange-500/5 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 lg:pb-32 lg:pt-28">

          <div className="max-w-5xl">

            <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-500/[0.06] px-5 py-2.5 text-sm font-semibold text-orange-400">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              EZBusiness × AI
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Ваш бизнес.
              <span className="block text-gray-400">
                Мой опыт.
              </span>
              <span className="block bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 bg-clip-text text-transparent">
                Сила ИИ.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 sm:text-xl sm:leading-9">
              Вам не нужно изучать десятки нейросетей,
              разбираться в промптах и самостоятельно искать,
              какой инструмент использовать.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
              Вы общаетесь со мной.
              Я использую современные ИИ-инструменты там,
              где они действительно помогают получить лучший результат.
            </p>

          </div>

          {/* FLOW */}
          <div className="mt-16 grid gap-4 lg:grid-cols-3">

            <div className="rounded-[30px] border border-white/10 bg-[#111A2B] p-7">
              <div className="text-sm font-semibold tracking-[0.15em] text-gray-500">
                ШАГ 01
              </div>

              <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                👤
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Вы
              </h2>

              <p className="mt-3 leading-7 text-gray-500">
                Рассказываете мне о своей идее,
                задаче или проблеме.
              </p>
            </div>

            <div className="relative rounded-[30px] border border-orange-500/20 bg-gradient-to-br from-orange-600/15 to-[#111A2B] p-7">

              <div className="absolute right-6 top-6 text-orange-500/40">
                →
              </div>

              <div className="text-sm font-semibold tracking-[0.15em] text-orange-400">
                ШАГ 02
              </div>

              <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl">
                ⚡
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                EZBusiness
              </h2>

              <p className="mt-3 leading-7 text-gray-400">
                Я анализирую задачу и использую
                подходящие ИИ-инструменты за кулисами.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#111A2B] p-7">

              <div className="text-sm font-semibold tracking-[0.15em] text-gray-500">
                ШАГ 03
              </div>

              <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                🚀
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Результат
              </h2>

              <p className="mt-3 leading-7 text-gray-500">
                Вы получаете понятное решение,
                материал или следующий шаг.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BIG MESSAGE */}
      <section className="border-y border-white/10 bg-[#0E1728]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            <div>

              <div className="text-sm font-semibold tracking-[0.18em] text-orange-400">
                ГЛАВНОЕ
              </div>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Вам не нужно
                <span className="block text-gray-500">
                  становиться экспертом по ИИ.
                </span>
              </h2>

            </div>

            <div className="rounded-[32px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-[#111A2B] to-[#111A2B] p-8 sm:p-10">

              <p className="text-xl leading-9 text-gray-300">
                Нейросеть — это инструмент.
                Как калькулятор, поисковик или аналитическая программа.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Важно не просто использовать ИИ,
                а понимать, какую задачу с его помощью
                действительно стоит решать.
              </p>

              <div className="my-8 h-px bg-white/10" />

              <p className="text-lg font-semibold leading-8 text-white">
                Поэтому вы работаете со мной,
                а технологии помогают мне работать быстрее.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* TOOLS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

        <div className="max-w-3xl">

          <div className="text-sm font-semibold tracking-[0.18em] text-orange-400">
            ГДЕ ПОМОГАЕТ ИИ
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Не ради технологии.
            <span className="block text-gray-500">
              Ради результата.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            ИИ используется там, где он позволяет быстрее
            разобраться в информации, рассмотреть варианты
            или подготовить рабочий результат.
          </p>

        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {tools.map((tool) => (

            <article
              key={tool.number}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111A2B] p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500/30"
            >

              <div className="absolute right-[-15px] top-[-30px] text-[8rem] font-black leading-none text-white/[0.025] transition group-hover:text-orange-500/[0.07]">
                {tool.number}
              </div>

              <div className="relative">

                <div className="text-xs font-bold tracking-[0.2em] text-orange-500">
                  {tool.number}
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {tool.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {tool.text}
                </p>

                <div className="mt-8 h-1 w-10 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* FINAL */}
      <section className="relative overflow-hidden border-t border-white/10">

        <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl px-5 py-28 text-center sm:px-8 lg:py-36">

          <div className="text-sm font-semibold tracking-[0.18em] text-orange-400">
            EZBUSINESS × AI
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Вы общаетесь со мной.
            <span className="block text-orange-500">
              ИИ работает за кулисами.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            Вам не нужно разбираться в технологиях.
            Ваша задача — рассказать, чего вы хотите достичь.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-2xl bg-orange-600 px-8 py-4 font-bold text-white shadow-xl shadow-orange-950/30 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
          >
            Обсудить свою идею →
          </Link>

        </div>

      </section>

    </main>
  );
}