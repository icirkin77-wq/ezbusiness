import Link from "next/link";

const tariffs = [
  {
    name: "START",
    price: "0 ₽",
    description:
      "Первый шаг без обязательств. Знакомимся, разбираем вашу идею и определяем направление.",
    features: [
      "Первая встреча",
      "Разбор вашей идеи",
      "Определение целей",
      "Оценка направления",
    ],
    button: "Начать бесплатно",
    href: "/contact",
    featured: false,
  },
  {
    name: "STANDARD",
    price: "5 999 ₽",
    description:
      "Персональная работа над запуском бизнеса — от анализа идеи до конкретного плана действий.",
    features: [
      "Персональный план действий",
      "Бизнес-анализ",
      "Еженедельная связь со мной",
      "Проверка прогресса",
      "Глубокий разбор бизнес-идеи",
      "Помощь с маркетингом и продвижением",
    ],
    button: "Выбрать Standard",
    href: "/contact",
    featured: true,
  },
  {
    name: "PERSONAL",
    price: "14 999 ₽",
    description:
      "Максимально личное сопровождение для тех, кто хочет глубже проработать бизнес и стратегию.",
    features: [
      "Всё из тарифа Standard",
      "Более глубокий бизнес-план",
      "Частая связь со мной",
      "Индивидуальная стратегия",
      "Разбор сложных решений",
      "Персональное сопровождение",
    ],
    button: "Обсудить Personal",
    href: "/contact",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#080E1A]">
      {/* Фоновое свечение */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-600/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        {/* Заголовок */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-orange-500/20 bg-orange-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
            Тарифы EZBusiness
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Выберите свой
            <span className="block text-orange-500">уровень поддержки.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Можно начать с бесплатной встречи, а затем выбрать формат
            сопровождения, который подходит именно вам.
          </p>
        </div>

        {/* Карточки */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3 lg:items-stretch">
          {tariffs.map((tariff) => (
            <div
              key={tariff.name}
              className={`group relative flex flex-col rounded-[2rem] border p-7 transition duration-300 sm:p-8 ${
                tariff.featured
                  ? "border-orange-500/50 bg-gradient-to-b from-orange-500/[0.13] to-white/[0.04] shadow-2xl shadow-orange-950/30 lg:-translate-y-3"
                  : "border-white/10 bg-white/[0.035] hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.055]"
              }`}
            >
              {/* Рекомендуемый */}
              {tariff.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-orange-400/30 bg-[#C2410C] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-950/30">
                  Оптимальный выбор
                </div>
              )}

              {/* Верх карточки */}
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-bold tracking-[0.18em] ${
                      tariff.featured ? "text-orange-400" : "text-gray-500"
                    }`}
                  >
                    {tariff.name}
                  </span>

                  {tariff.name === "START" && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                      Без оплаты
                    </span>
                  )}
                </div>

                <div className="mt-7">
                  <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    {tariff.price}
                  </div>

                  {tariff.name !== "START" && (
                    <div className="mt-2 text-sm text-gray-500">
                      за сопровождение
                    </div>
                  )}
                </div>

                <p className="mt-6 min-h-[96px] text-[15px] leading-7 text-gray-400">
                  {tariff.description}
                </p>
              </div>

              {/* Разделитель */}
              <div className="my-7 h-px bg-white/10" />

              {/* Возможности */}
              <div className="flex-1">
                <div className="mb-5 text-sm font-semibold text-white">
                  Что входит:
                </div>

                <ul className="space-y-4">
                  {tariff.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          tariff.featured
                            ? "bg-orange-500/15 text-orange-400"
                            : "bg-white/5 text-gray-500"
                        }`}
                      >
                        ✓
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Кнопка */}
              <Link
                href={tariff.href}
                className={`mt-8 flex w-full items-center justify-center rounded-2xl px-5 py-4 text-sm font-bold transition duration-300 ${
                  tariff.featured
                    ? "bg-[#C2410C] text-white shadow-lg shadow-orange-950/30 hover:-translate-y-1 hover:bg-[#EA580C]"
                    : "border border-white/10 bg-white/[0.05] text-white hover:-translate-y-1 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-300"
                }`}
              >
                {tariff.button}
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Нижний блок */}
        <div className="mx-auto mt-14 max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-xl">
                ⚡
              </div>

              <div>
                <div className="font-bold text-white">
                  Вы общаетесь со мной.
                </div>

                <div className="mt-1 text-sm leading-6 text-gray-500">
                  ИИ работает за кулисами, помогая мне анализировать
                  информацию и быстрее находить решения.
                </div>
              </div>
            </div>

            <Link
              href="/ai"
              className="shrink-0 text-sm font-semibold text-orange-400 transition hover:text-orange-300"
            >
              Узнать про ИИ →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}