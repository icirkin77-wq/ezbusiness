import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Личный подход",
    text: "Каждая задача начинается с понимания конкретной ситуации, а не с готового шаблона.",
  },
  {
    number: "02",
    title: "Практический результат",
    text: "Моя цель — не просто обсудить идею, а помочь превратить её в понятный план действий.",
  },
  {
    number: "03",
    title: "Современные инструменты",
    text: "Использую современные ИИ-инструменты там, где они помогают быстрее анализировать информацию и находить решения.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1220] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[650px] w-[650px] rounded-full bg-orange-600/15 blur-[160px]" />
        <div className="pointer-events-none absolute left-[-250px] top-[350px] h-[450px] w-[450px] rounded-full bg-orange-500/5 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 lg:pb-32 lg:pt-24">

          <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

            {/* VISUAL */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">

                <div className="relative flex h-72 w-72 items-center justify-center rounded-[3rem] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-[#111A2B] to-[#0B1220] shadow-2xl shadow-orange-950/30 sm:h-80 sm:w-80">

                  <div className="absolute inset-8 rounded-[2.5rem] border border-white/5" />

                  <div className="select-none text-[12rem] font-black leading-none text-orange-500/10">
                    И
                  </div>

                  <div className="absolute left-7 top-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-xl text-orange-400">
                    ✦
                  </div>

                  <div className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-gray-300">
                    AI
                  </div>
                </div>

                <div className="absolute bottom-[-22px] right-[-18px] rounded-2xl border border-white/10 bg-[#111A2B] px-6 py-4 shadow-2xl">
                  <div className="text-[10px] font-semibold tracking-[0.2em] text-gray-500">
                    ОСНОВАТЕЛЬ
                  </div>

                  <div className="mt-1 text-lg font-bold">
                    EZBusiness
                  </div>
                </div>

              </div>
            </div>

            {/* TEXT */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/[0.06] px-5 py-2.5 text-sm font-semibold text-orange-400">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Обо мне
              </div>

              <h1 className="mt-7 text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Привет,
                <span className="block bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 bg-clip-text text-transparent">
                  я Илья.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">
                Я создал EZBusiness, чтобы помогать людям,
                которые хотят начать своё дело, но не знают,
                с чего начать.
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
                Здесь мы разбираем идеи, считаем цифры,
                составляем план и постепенно превращаем
                задумку в реальные действия.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* PERSONAL MESSAGE */}
      <section className="border-y border-white/10 bg-[#0E1728]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <div className="text-sm font-semibold tracking-[0.18em] text-orange-400">
                МОЙ ПОДХОД
              </div>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Бизнес начинается
                <span className="block text-gray-500">
                  с первого шага.
                </span>
              </h2>

            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-8 shadow-2xl sm:p-10">

              <p className="text-xl leading-9 text-gray-300">
                Я считаю, что человеку, который только
                начинает, не обязательно сразу знать всё
                о бизнесе.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Гораздо важнее иметь понятный следующий
                шаг и человека, который поможет разобраться
                с возникающими вопросами.
              </p>

              <div className="my-8 h-px bg-white/10" />

              <p className="text-lg font-semibold leading-8 text-white">
                Именно поэтому EZBusiness объединяет
                личное сопровождение, практический подход
                и возможности современных ИИ-инструментов.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

        <div className="max-w-3xl">

          <div className="text-sm font-semibold tracking-[0.18em] text-orange-400">
            КАК Я РАБОТАЮ
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Три принципа
            <span className="block text-gray-500">
              EZBusiness.
            </span>
          </h2>

        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {principles.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111A2B] p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-orange-500/30"
            >

              <div className="absolute right-[-15px] top-[-30px] text-[9rem] font-black leading-none text-white/[0.025] transition duration-300 group-hover:text-orange-500/[0.07]">
                {item.number}
              </div>

              <div className="relative">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-sm font-bold text-orange-400">
                  {item.number}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.text}
                </p>

                <div className="mt-8 h-1 w-10 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* AI */}
      <section className="border-y border-white/10 bg-[#080E1A]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

          <div className="relative overflow-hidden rounded-[36px] border border-orange-500/20 bg-gradient-to-br from-orange-600/15 via-[#111A2B] to-[#0F1726] p-8 shadow-2xl sm:p-12 lg:p-16">

            <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <div className="text-sm font-semibold tracking-[0.18em] text-orange-400">
                  ЧЕЛОВЕК + ТЕХНОЛОГИИ
                </div>

                <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                  ИИ помогает мне
                  <span className="block text-orange-400">
                    работать эффективнее.
                  </span>
                </h2>

              </div>

              <div>

                <div className="rounded-2xl border border-white/10 bg-black/10 p-6">

                  <div className="text-xl font-bold text-white">
                    Вам не нужно разбираться в нейросетях.
                  </div>

                  <p className="mt-5 leading-8 text-gray-400">
                    Я использую современные ИИ-инструменты
                    внутри своей работы: для анализа информации,
                    расчётов, поиска идей, подготовки материалов
                    и проверки различных сценариев.
                  </p>

                </div>

                <div className="mt-6">

                  <p className="text-lg font-semibold leading-8 text-white">
                    Вы общаетесь со мной.
                  </p>

                  <p className="text-lg font-semibold leading-8 text-orange-400">
                    ИИ работает за кулисами.
                  </p>

                </div>

                <Link
                  href="/ai"
                  className="mt-8 inline-flex items-center rounded-2xl border border-orange-500/30 bg-orange-500/10 px-6 py-3 font-semibold text-orange-400 transition duration-300 hover:-translate-y-1 hover:bg-orange-500/20"
                >
                  Посмотреть ИИ-помощников →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute left-1/2 bottom-[-250px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">

          <div className="text-sm font-semibold tracking-[0.18em] text-orange-400">
            EZBUSINESS
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Давайте разберём
            <span className="block text-orange-500">
              вашу идею.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Не обязательно иметь готовый бизнес-план.
            Достаточно идеи или желания начать.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-2xl bg-orange-600 px-8 py-4 font-bold text-white shadow-xl shadow-orange-950/30 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
          >
            Написать мне →
          </Link>

        </div>

      </section>

    </main>
  );
}