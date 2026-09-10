import Link from "next/link";

const principles = [
  {
    number: "1",
    title: "Личный подход",
    text: "Каждая задача начинается с понимания конкретной ситуации, а не с готового шаблона.",
  },
  {
    number: "2",
    title: "Практический результат",
    text: "Моя цель — не просто обсудить идею, а помочь превратить её в понятный план действий.",
  },
  {
    number: "3",
    title: "Современные инструменты",
    text: "Использую современные ИИ-инструменты там, где они помогают быстрее анализировать информацию и находить решения.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1220] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        {/* Свечение */}
        <div className="absolute right-[-150px] top-[-100px] h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 lg:pb-32 lg:pt-24">

      

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* ЛЕВАЯ ЧАСТЬ */}
            <div className="relative flex justify-center lg:justify-start">

              <div className="relative flex h-72 w-72 items-center justify-center rounded-[3rem] border border-orange-500/20 bg-orange-500/[0.06] shadow-2xl shadow-orange-950/20 sm:h-80 sm:w-80">

                {/* Большая буква */}
                <div className="select-none text-[12rem] font-black leading-none text-orange-500/20">
                  И
                </div>

                {/* Маленькая карточка */}
                <div className="absolute bottom-[-20px] right-[-20px] rounded-2xl border border-white/10 bg-[#111B2E] px-6 py-4 shadow-xl">
                  <div className="text-xs uppercase tracking-widest text-gray-500">
                    Основатель
                  </div>

                  <div className="mt-1 text-lg font-bold">
                    EZBusiness
                  </div>
                </div>

              </div>

            </div>

            {/* ПРАВАЯ ЧАСТЬ */}
            <div>

              <div className="mb-5 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
  EZBusiness × AI
                ОБО МНЕ
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
                Привет,
                <span className="block text-orange-500">
                  я Илья
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">
                Я создал EZBusiness, чтобы помогать людям, которые хотят
                начать своё дело, но не знают, с чего начать
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
                Здесь мы не пытаемся усложнить бизнес. Вместе разбираем
                идеи, считаем цифры, составляем план и постепенно
                превращаем задумку в реальные действия
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= PERSONAL MESSAGE ================= */}
      <section className="border-y border-white/10 bg-[#0F172A]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">

            <div>

              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Мой подход
              </div>

              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                Бизнес начинается
                <span className="block text-gray-400">
                  с первого шага
                </span>
              </h2>

            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">

              <p className="text-xl leading-9 text-gray-300">
                Я считаю, что человеку, который только начинает,
                не обязательно сразу знать всё о бизнесе
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                Гораздо важнее иметь понятный следующий шаг и человека,
                который поможет разобраться с возникающими вопросами
              </p>

              <div className="mt-8 h-px bg-white/10" />

              <p className="mt-7 text-lg font-medium leading-8 text-white">
                Именно поэтому EZBusiness объединяет личное сопровождение,
                практический подход и возможности современных ИИ-инструментов
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

        <div className="max-w-3xl">

          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Как я работаю
          </div>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Три принципа
            <span className="block text-gray-400">
              EZBusiness
            </span>
          </h2>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {principles.map((item) => (
            <div
              key={item.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500/30 hover:bg-white/[0.06]"
            >

              {/* Декоративный номер */}
              <div className="absolute right-[-15px] top-[-25px] text-8xl font-black text-white/[0.03] transition group-hover:text-orange-500/[0.08]">
                {item.number}
              </div>

              <div className="relative">

                <div className="mb-8 text-sm font-bold text-orange-500">
                  {item.number}
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.text}
                </p>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ================= AI ================= */}
      <section className="border-y border-white/10 bg-[#080E1A]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Человек + технологии
              </div>

              <h2 className="text-4xl font-bold sm:text-5xl">
                ИИ помогает мне
                <span className="block text-orange-500">
                  работать эффективнее
                </span>
              </h2>

            </div>

            <div className="rounded-3xl border border-orange-500/20 bg-orange-500/[0.06] p-8">

              <div className="text-2xl font-bold">
                Вам не нужно разбираться в нейросетях
              </div>

              <p className="mt-5 leading-8 text-gray-400">
                Я использую современные ИИ-инструменты внутри своей работы:
                для анализа информации, расчётов, поиска идей,
                подготовки материалов и проверки различных сценариев
              </p>

              <p className="mt-5 font-medium leading-8 text-gray-200">
                Вы общаетесь со мной — технологии помогают мне
                быстрее находить для вас решения
              </p>

              <Link
                href="/ai"
                className="mt-8 inline-flex rounded-2xl border border-orange-500/30 bg-orange-500/10 px-6 py-3 font-semibold text-orange-400 transition hover:bg-orange-500/20"
              >
                Как я использую ИИ →
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(194,65,12,0.18),transparent_45%)]" />

        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">

          <div className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            EZBusiness
          </div>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Давайте разберём
            <span className="block text-orange-500">
              вашу идею
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Не обязательно иметь готовый бизнес-план
            Достаточно идеи или желания начать
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-2xl bg-[#C2410C] px-8 py-4 font-bold text-white shadow-xl shadow-orange-950/30 transition hover:-translate-y-1 hover:bg-[#EA580C]"
          >
            Написать мне →
          </Link>

        </div>

      </section>

    </main>
  );
}