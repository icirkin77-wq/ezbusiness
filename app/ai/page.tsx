import Link from "next/link";
import AiChat from "../components/AiChat";

const tools = [
  {
    number: "1",
    title: "Анализ идеи",
    text: "Разбираем бизнес-идею, оцениваем её сильные и слабые стороны и определяем, с чего лучше начать",
  },
  {
    number: "2",
    title: "Расчёты и экономика",
    text: "Считаем расходы, потенциальную выручку, прибыль и другие показатели, которые важны для принятия решений",
  },
  {
    number: "3",
    title: "Поиск решений",
    text: "ИИ помогает мне быстрее находить информацию, сравнивать варианты и проверять разные сценарии",
  },
  {
    number: "4",
    title: "Подготовка материалов",
    text: "Создаём структуры, тексты, планы, идеи для продвижения и другие материалы, необходимые для бизнеса",
  },
];

export default function AiPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1220] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[520px] w-[800px] -translate-x-1/2 rounded-full bg-orange-600/[0.07] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 lg:pb-32 lg:pt-24">

          <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">

            {/* Левая часть */}
            <div>
              <div className="mb-7 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2">
                <span className="text-sm font-medium text-orange-300">
                  EZBusiness × AI
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
                ИИ работает
                <span className="block text-orange-500">
                  за кулисами
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
                Вам не нужно разбираться в нейросетях, промптах и десятках
                сервисов. Вы общаетесь со мной, а я использую современные
                ИИ-инструменты внутри своей работы
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
                Это помогает быстрее анализировать информацию, проверять
                идеи, считать показатели и находить подходящие решения
                для вашего бизнеса
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#C2410C] px-7 py-4 font-bold text-white shadow-xl shadow-orange-950/30 transition duration-300 hover:-translate-y-1 hover:bg-[#EA580C]"
                >
                  Обсудить идею
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  href="/how"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 font-semibold text-gray-300 transition duration-300 hover:border-orange-500/30 hover:bg-white/[0.07] hover:text-white"
                >
                  Как мы работаем
                </Link>
              </div>
            </div>

            {/* Правая визуальная часть */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0F172A] p-6 shadow-2xl sm:p-8">

                <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-orange-600/10 blur-[80px]" />

                <div className="relative">

                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        EZBusiness
                      </div>
                      <div className="mt-1 text-lg font-bold">
                        Внутри работы
                      </div>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400">
                      ⚡
                    </div>
                  </div>

                  <div className="mt-7 space-y-4">

                    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                      <div className="text-xs text-gray-500">
                        ВЫ
                      </div>

                      <div className="mt-2 text-lg font-semibold">
                        «Хочу открыть бизнес»
                      </div>
                    </div>

                    <div className="flex justify-center text-orange-500">
                      ↓
                    </div>

                    <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.07] p-5">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                          Я + ИИ
                        </div>

                        <span className="text-orange-500">
                          ✦
                        </span>
                      </div>

                      <div className="mt-3 text-lg font-semibold">
                        Анализируем и ищем решения
                      </div>

                      <div className="mt-2 text-sm leading-6 text-gray-500">
                        Идеи · расчёты · информация · сценарии
                      </div>
                    </div>

                    <div className="flex justify-center text-orange-500">
                      ↓
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                      <div className="text-xs text-gray-500">
                        РЕЗУЛЬТАТ
                      </div>

                      <div className="mt-2 text-lg font-semibold">
                        Понятный следующий шаг
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= TOOLS ================= */}
      <section className="border-y border-white/10 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

          <div className="max-w-3xl">
            <div className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Что делает ИИ
            </div>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Технологии помогают
              <span className="block text-gray-500">
                делать работу быстрее
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Я использую ИИ не ради самого ИИ. Он нужен там, где действительно
              помогает получить более быстрый и качественный результат.
            </p>
          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {tools.map((tool) => (
              <div
                key={tool.number}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.055] sm:p-8"
              >

                <div className="absolute right-[-10px] top-[-30px] text-[9rem] font-black leading-none text-white/[0.025] transition duration-300 group-hover:text-orange-500/[0.06]">
                  {tool.number}
                </div>

                <div className="relative">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-lg font-bold text-orange-400">
                    {tool.number}
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {tool.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-gray-400">
                    {tool.text}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= IMPORTANT ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/[0.05] blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">

          <div className="rounded-[2.5rem] border border-orange-500/20 bg-orange-500/[0.06] p-8 sm:p-12">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                  Главное
                </div>

                <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                  Вам не нужно
                  <span className="block text-orange-500">
                    разбираться в ИИ
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-xl leading-9 text-gray-300">
                  Я сам выбираю подходящие инструменты и использую их там,
                  где они действительно дают пользу
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-500">
                  Поэтому вам не нужно изучать промпты, сравнивать десятки
                  сервисов или самостоятельно разбираться в технических
                  деталях
                </p>

                <div className="mt-8 border-t border-white/10 pt-7">
                  <div className="text-lg font-bold text-white">
                    Вы общаетесь со мной
                  </div>

                  <div className="mt-1 text-lg font-bold text-orange-400">
                    ИИ работает за кулисами
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="border-t border-white/10 bg-[#080E1A]">

        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-32">

          <div className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            EZBusiness
          </div>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Есть идея?
            <span className="block text-orange-500">
              Давайте разберём её
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Вам не нужен готовый бизнес-план.
            Достаточно идеи, вопроса или желания начать
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center rounded-2xl bg-[#C2410C] px-8 py-4 font-bold text-white shadow-xl shadow-orange-950/30 transition duration-300 hover:-translate-y-1 hover:bg-[#EA580C]"
          >
            Написать мне
            <span className="ml-2">
              →
            </span>
          </Link>

        </div>

      </section>


      {/* ================= AI CHAT ================= */}
      <AiChat />

    </main>
  );
}