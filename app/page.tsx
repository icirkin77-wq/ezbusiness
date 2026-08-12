import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1220]/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-transparent.png"
              alt="EZBusiness logo"
              width={48}
              height={48}
              className="rounded-full object-contain logo-glow"
            />

            <div>
              <p className="text-xl font-bold text-white">EZBusiness</p>
              <p className="text-sm text-gray-400">
                Открой свой путь в бизнес
              </p>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 text-sm text-gray-300 lg:flex">
            <a href="#how" className="transition hover:text-white">
              Как мы работаем
            </a>
            <a href="#ai" className="transition hover:text-white">
              ИИ-помощники
            </a>
            <a href="#reviews" className="transition hover:text-white">
              Отзывы
            </a>
            <a href="#about" className="transition hover:text-white">
              Обо мне
            </a>
            <a href="#contact" className="transition hover:text-white">
              Контакты
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-[#C2410C] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#C2410C]/30 transition hover:-translate-y-0.5 hover:bg-[#EA580C]"
          >
            Написать мне
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F172A]">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(253,186,116,0.22),transparent_25%),radial-gradient(circle_at_70%_50%,rgba(194,65,12,0.12),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.03),transparent_30%)]" />

        {/* Light beam */}
        <div className="pointer-events-none absolute right-[-10%] top-0 h-full w-[55%] bg-gradient-to-l from-[#FDBA74]/20 via-[#FDBA74]/8 to-transparent blur-3xl light-pulse" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24 hero-animate">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-[#C2410C]/30 bg-[#C2410C]/10 px-3 py-1 text-sm text-[#FDBA74]">
              Личное сопровождение + ИИ
            </div>

            <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              Выйдите из
              <span className="block text-[#C2410C]">неизвестности</span>
              к своему бизнесу
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-gray-300">
              EZBusiness помогает сделать первый шаг, даже если вы никогда не
              занимались бизнесом. Вместе мы найдём идею, составим план и
              запустим ваш проект с постоянной поддержкой человека и
              ИИ-помощников.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-[#C2410C] px-6 py-4 text-center font-semibold text-white shadow-2xl shadow-[#C2410C]/30 transition hover:-translate-y-0.5 hover:bg-[#EA580C] cta-float"
              >
                Начать бизнес со мной
              </a>

              <a
                href="#how"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:border-[#FDBA74] hover:bg-white/10"
              >
                Как мы работаем
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 text-sm text-gray-400">
              <span>✓ Без опыта</span>
              <span>✓ Пошаговый запуск</span>
              <span>✓ Постоянная связь</span>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-full bg-[#FDBA74]/10 blur-3xl light-pulse" />

            <div className="relative logo-glow">
              <Image
                src="/logo-transparent.png"
                alt="EZBusiness logo"
                width={560}
                height={560}
                priority
                className="hero-logo object-contain sm:w-[520px] lg:w-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how" className="bg-[#111827] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center rounded-full border border-[#C2410C]/20 bg-[#C2410C]/10 px-3 py-1 text-sm text-[#FDBA74]">
              Пошаговый процесс
            </div>

            <h2 className="text-3xl font-bold sm:text-5xl">
              Как мы работаем
            </h2>

            <p className="mt-4 text-lg text-gray-400">
              Всё просто: вы пишете мне, мы разбираем идею, составляем план и
              запускаем ваш бизнес шаг за шагом.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Вы пишете мне",
              "Разбираем идею",
              "Получаете план",
              "Запускаете бизнес",
              "Растёте дальше",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-[#0F172A] p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C2410C] text-lg font-bold text-white">
                  {index + 1}
                </div>

                <p className="font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}
      <section id="ai" className="bg-[#0B1220] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-5xl">
              ИИ-помощники EZBusiness
            </h2>

            <p className="mt-4 text-lg text-gray-400">
              Со временем здесь появятся настоящие инструменты, которые будут
              экономить вам часы работы каждую неделю.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Генератор идей",
                text: "Помогает найти бизнес-нишу под ваш бюджет и навыки.",
              },
              {
                title: "Бизнес-план",
                text: "Собирает пошаговый план запуска и первых продаж.",
              },
              {
                title: "Контент",
                text: "Создаёт посты, описания товаров и тексты для сайта.",
              },
              {
                title: "Финансы",
                text: "Считает цену, прибыль и точку безубыточности.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-3xl border border-white/10 bg-[#111827] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C2410C]/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C2410C]/10 text-xl group-hover:bg-[#C2410C] group-hover:text-white">
                  ✦
                </div>

                <h3 className="text-xl font-semibold text-white">{card.title}</h3>

                <p className="mt-2 text-gray-400">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#0B1220] py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-[36px] border border-white/10 bg-[#111827] p-8 text-center text-white shadow-2xl sm:p-12">
            <div className="mx-auto mb-6 flex justify-center">
              <Image
                src="/logo-transparent.png"
                alt="EZBusiness logo"
                width={96}
                height={96}
                className="rounded-full shadow-2xl shadow-[#C2410C]/30"
              />
            </div>

            <h2 className="text-3xl font-bold sm:text-5xl">
              Готовы открыть свой бизнес?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Напишите мне, и мы вместе найдём идею, составим план и начнём
              двигаться к вашему первому доходу.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="rounded-2xl bg-[#C2410C] px-6 py-4 font-semibold text-white transition hover:bg-[#EA580C]"
              >
                Telegram
              </a>

              <a
                href="#"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 font-semibold transition hover:bg-white/10"
              >
                VK
              </a>

              <a
                href="#"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-4 font-semibold transition hover:bg-white/10"
              >
                MAX
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Контакты временные — завтра добавим настоящие ссылки.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0B1220]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-gray-400 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-transparent.png"
              alt="EZBusiness logo"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span>© 2026 EZBusiness</span>
          </div>

          <span>Открой свой путь в бизнес</span>
        </div>
      </footer>
    </main>
  );
}

