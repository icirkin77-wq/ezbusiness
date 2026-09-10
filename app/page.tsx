import Image from "next/image";
import Link from "next/link";
import AiChat from "./components/AiChat";
import Pricing from "./components/Pricing";

const problems = [
  {
    icon: "💡",
    title: "Нет идеи",
    text: "Поможем найти направление, которое подходит именно вам.",
  },
  {
    icon: "📊",
    title: "Не знаете цифр",
    text: "Разберём расходы, доходы и возможную прибыль ещё до запуска.",
  },
  {
    icon: "🚀",
    title: "Не знаете с чего начать",
    text: "Разложим путь от первой идеи до первых клиентов по шагам.",
  },
];

const steps = [
  {
    number: "01",
    title: "Идея",
    text: "Разбираемся, чем вы хотите заниматься и какую проблему решает ваш бизнес.",
  },
  {
    number: "02",
    title: "Анализ",
    text: "Проверяем идею, аудиторию, конкурентов и основные риски.",
  },
  {
    number: "03",
    title: "План",
    text: "Считаем экономику и превращаем идею в понятный план действий.",
  },
  {
    number: "04",
    title: "Запуск",
    text: "Переходим от планов к конкретным действиям и первым результатам.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1220] text-white">

      {/* HERO */}
      <section className="relative">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-600/10 blur-[140px]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">

          <div className="max-w-3xl">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Личное сопровождение + ИИ
            </div>

            <h1 className="text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Выйдите из
              <span className="block text-orange-600">
                неизвестности
              </span>
              к своему
              <span className="block">
                бизнесу
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
              EZBusiness помогает начинающим предпринимателям пройти путь
              от идеи до первых результатов — без лишней сложности,
              хаоса и попыток разобраться во всём самостоятельно.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="group rounded-2xl bg-orange-700 px-7 py-4 text-center font-bold transition duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-900/30"
              >
                Начать свой путь
                <span className="ml-2 transition group-hover:ml-3">
                  →
                </span>
              </Link>

              <Link
                href="/how"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-center font-bold transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                Как это работает
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-500">
              <span>✓ Без опыта</span>
              <span>✓ Пошаговый подход</span>
              <span>✓ ИИ-помощники</span>
              <span>✓ Личная связь</span>
            </div>

          </div>

          {/* VISUAL */}
          <div className="relative hidden min-h-[520px] items-center justify-center lg:flex">

            <div className="absolute h-80 w-80 rounded-full bg-orange-600/20 blur-[100px]" />

            <div className="absolute right-5 top-16 h-24 w-24 rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl" />

            <div className="absolute bottom-20 left-5 h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl" />

            <div className="relative flex h-[390px] w-[390px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] shadow-2xl shadow-orange-950/20 backdrop-blur-sm">

              <div className="absolute inset-8 rounded-full border border-orange-500/10" />

              <Image
                src="/logo-transparent.png"
                alt="EZBusiness"
                width={300}
                height={300}
                priority
                className="relative h-64 w-64 object-contain drop-shadow-2xl"
              />

            </div>

            <div className="absolute right-0 top-24 rounded-2xl border border-white/10 bg-[#111a2c]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <div className="text-xs text-gray-500">
                Следующий шаг
              </div>
              <div className="mt-1 font-semibold">
                Определить идею →
              </div>
            </div>

            <div className="absolute bottom-20 right-12 rounded-2xl border border-white/10 bg-[#111a2c]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <div className="text-xs text-gray-500">
                EZBusiness
              </div>
              <div className="mt-1 font-semibold text-orange-400">
                Идея → План → Запуск
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-y border-white/10 bg-[#0E1728]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Знакомо?
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Самое сложное —
              <span className="text-gray-500">
                {" "}начать.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Необязательно сразу знать всё о бизнесе
              Важно понимать, какой следующий шаг нужно сделать
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {problems.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-500/30 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <div className="text-4xl">
                    {item.icon}
                  </div>

                  <span className="text-sm text-gray-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.text}
                </p>

                <div className="mt-7 h-px w-12 bg-orange-600 transition-all duration-300 group-hover:w-20" />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* HOW */}
      <section className="relative">
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-orange-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Как мы работаем
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                От идеи до запуска
              </h2>
            </div>

            <Link
              href="/how"
              className="text-sm font-semibold text-gray-400 transition hover:text-white"
            >
              Подробнее о процессе →
            </Link>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-4">

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.05]"
              >
                <div className="text-5xl font-black text-orange-600/30">
                  {step.number}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {step.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* AI */}
 {/* ================= AI SECTION ================= */}
<section className="relative overflow-hidden border-t border-white/10 bg-[#0F172A] px-5 py-24 sm:px-8 lg:py-32">
  
  {/* Декоративное свечение */}
  <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl">

    {/* Заголовок */}
    <div className="mx-auto max-w-3xl text-center">

      <div className="mb-5 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300">
        EZBUSINESS × AI
      </div>

      <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
        Ваш бизнес.
        <span className="block text-orange-500">
          Мой опыт.
        </span>
        <span className="block">
          Сила ИИ.
        </span>
      </h2>

      <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400">
        Вам не нужно самостоятельно разбираться в нейросетях.
        Я использую современные ИИ-инструменты внутри своей работы,
        чтобы помогать вам быстрее находить решения и двигаться к результату.
      </p>

    </div>

    {/* СХЕМА */}
    <div className="mt-16 grid gap-4 md:grid-cols-3 md:items-center">

      {/* ВЫ */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20">

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-2xl">
          👤
        </div>

        <div className="text-sm font-medium uppercase tracking-wider text-gray-500">
          Шаг 01
        </div>

        <h3 className="mt-2 text-2xl font-bold">
          Вы
        </h3>

        <p className="mt-3 text-gray-400">
          Рассказываете о своей идее, задаче или проблеме.
        </p>

      </div>

      {/* ЦЕНТР */}
      <div className="relative rounded-3xl border border-orange-500/20 bg-orange-500/[0.08] p-7 text-center shadow-2xl shadow-orange-950/20">

        <div className="absolute -left-3 top-1/2 hidden -translate-y-1/2 text-2xl text-orange-500 md:block">
          →
        </div>

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15 text-2xl">
          ⚡
        </div>

        <div className="text-sm font-medium uppercase tracking-wider text-orange-400">
          Шаг 02
        </div>

        <h3 className="mt-2 text-2xl font-bold">
          EZBusiness
        </h3>

        <p className="mt-3 text-gray-300">
          Я анализирую задачу и использую подходящие инструменты.
        </p>

      </div>

      {/* РЕЗУЛЬТАТ */}
      <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20">

        <div className="absolute -left-3 top-1/2 hidden -translate-y-1/2 text-2xl text-orange-500 md:block">
          →
        </div>

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-2xl">
          🚀
        </div>

        <div className="text-sm font-medium uppercase tracking-wider text-gray-500">
          Шаг 03
        </div>

        <h3 className="mt-2 text-2xl font-bold">
          Результат
        </h3>

        <p className="mt-3 text-gray-400">
          Вы получаете понятные решения и следующие шаги.
        </p>

      </div>

    </div>

    {/* Нижняя часть */}
    <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-black/10 p-6 sm:flex-row sm:p-7">

      <div>
        <div className="text-lg font-bold">
          Вы общаетесь со мной.
        </div>

        <div className="mt-1 text-gray-500">
          ИИ работает за кулисами.
        </div>
      </div>

      <Link
        href="/ai"
        className="shrink-0 rounded-2xl border border-orange-500/30 bg-orange-500/10 px-6 py-3 font-semibold text-orange-400 transition hover:bg-orange-500/20"
      >
        Узнать больше об ИИ →
      </Link>

    </div>

  </div>
</section>
      {/* PRICING */}
      <Pricing />


      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#080E1A]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">

          <div>
            <div className="font-bold">
              EZBusiness
            </div>

            <div className="mt-1 text-sm text-gray-500">
              Открой свой путь в бизнес
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-gray-500">
            <Link href="/how" className="transition hover:text-white">
              Как мы работаем
            </Link>

            <Link href="/ai" className="transition hover:text-white">
              ИИ-помощники
            </Link>

            <Link href="/reviews" className="transition hover:text-white">
              Отзывы
            </Link>

            <Link href="/about" className="transition hover:text-white">
              Обо мне
            </Link>

            <Link href="/contact" className="transition hover:text-white">
              Контакты
            </Link>
          </div>

        </div>
      </footer>

      <AiChat />

    </main>
  );
}