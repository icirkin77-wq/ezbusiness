import Link from "next/link";

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" strokeLinecap="round" />
    <path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TelegramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M21.7 3.2 18.6 19c-.2 1.1-.8 1.4-1.7.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.3L6.1 12.6 1.2 11c-1.1-.4-1.1-1.1.2-1.6L20.5 2c.9-.3 1.6.2 1.2 1.2Z" />
  </svg>
);

const VkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M13.2 18.4c-6.8 0-10.7-4.6-10.9-12.3h3.4c.1 5.6 2.6 8 4.6 8.5V6.1h3.2v4.8c2-.2 4.1-2.4 4.8-4.8h3.2c-.5 2.9-2.8 5.1-4.4 6 .1.1.2.1.3.2 1.8 1 4.1 3.5 4.7 6.1h-3.5c-.8-2.3-2.7-4-5.1-4.2v4.2h-.3Z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B1220] text-white">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-600/[0.08] blur-[140px]" />

        <div className="absolute -left-32 top-[35%] h-[350px] w-[350px] rounded-full bg-orange-600/[0.04] blur-[130px]" />

        <div className="absolute -right-32 bottom-[10%] h-[400px] w-[400px] rounded-full bg-orange-500/[0.04] blur-[150px]" />
      </div>

      {/* ================= HERO ================= */}

      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
  <div className="mb-7 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2">
  <span className="text-sm font-medium text-orange-300">
    Контакты
  </span>
</div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Давайте
              <span className="mt-2 block text-orange-500">
                поговорим.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400 sm:text-xl">
              Есть идея, вопрос или вы просто не знаете, с чего начать?
              Напишите мне. Иногда хороший бизнес начинается с одного
              сообщения.
            </p>
          </div>

          {/* ================= HERO VISUAL ================= */}

          <div className="relative hidden min-h-[320px] lg:block">
            <div className="absolute right-[10%] top-[8%] h-64 w-64 rounded-full border border-orange-500/20" />

            <div className="absolute right-[17%] top-[15%] h-48 w-48 rounded-full border border-white/[0.06]" />

            <div className="absolute right-[28%] top-[27%] h-5 w-5 rounded-full bg-orange-500 shadow-[0_0_35px_rgba(234,88,12,0.8)]" />

            <div className="absolute bottom-[15%] right-[4%] w-64 rounded-[2rem] border border-white/10 bg-[#0F172A]/80 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Первый шаг
                </span>

                <span className="text-orange-500">
                  <ArrowIcon />
                </span>
              </div>

              <p className="mt-5 text-xl font-semibold leading-tight">
                Не нужно иметь готовый бизнес-план.
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Достаточно желания разобраться и сделать первый шаг.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACTS ================= */}

      <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-gray-500">
              Связаться
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Выберите удобный способ.
            </h2>
          </div>

          <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-white/10 sm:block" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* ================= TELEGRAM ================= */}

          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-white/[0.055] sm:p-8"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-500/[0.06] blur-3xl transition duration-500 group-hover:bg-orange-500/[0.14]" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0B1220] text-orange-500 transition duration-300 group-hover:scale-110 group-hover:border-orange-500/30">
                  <TelegramIcon />
                </div>

                <span className="text-gray-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500">
                  <ArrowIcon />
                </span>
              </div>

              <p className="mt-9 text-sm text-gray-500">
                Telegram
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Написать мне
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Быстрый и удобный способ задать вопрос или обсудить вашу идею.
              </p>

              <div className="mt-8 h-px w-full bg-white/[0.07]" />

              <div className="mt-5 text-sm font-medium text-orange-500">
                Открыть Telegram →
              </div>
            </div>
          </a>

          {/* ================= VK ================= */}

          <a
            href="https://vk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-white/[0.055] sm:p-8"
          >
            <div className="absolute -left-16 bottom-0 h-36 w-36 rounded-full bg-orange-500/[0.05] blur-3xl transition duration-500 group-hover:bg-orange-500/[0.12]" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0B1220] text-orange-500 transition duration-300 group-hover:scale-110 group-hover:border-orange-500/30">
                  <VkIcon />
                </div>

                <span className="text-gray-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500">
                  <ArrowIcon />
                </span>
              </div>

              <p className="mt-9 text-sm text-gray-500">
                VK
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                Написать ВКонтакте
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Ещё один удобный способ быть на связи и обсудить ваш будущий бизнес
              </p>

              <div className="mt-8 h-px w-full bg-white/[0.07]" />

              <div className="mt-5 text-sm font-medium text-orange-500">
                Открыть VK →
              </div>
            </div>
          </a>

          {/* ================= EMAIL ================= */}

          <a
            href="mailto:hello@ezbusiness.ru"
            className="group relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.08] to-white/[0.025] p-7 transition duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_25px_80px_rgba(194,65,12,0.12)] sm:p-8"
          >
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-orange-500/[0.08] blur-3xl" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/[0.08] text-orange-500 transition duration-300 group-hover:scale-110">
                  <MailIcon />
                </div>

                <span className="text-orange-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </div>

              <p className="mt-9 text-sm text-gray-400">
                Email
              </p>

              <h3 className="mt-2 break-all text-xl font-semibold sm:text-2xl">
                hello@ezbusiness.ru
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Для подробных вопросов, предложений и всего, что удобнее обсудить письмом.
              </p>

              <div className="mt-8 h-px w-full bg-orange-500/20" />

              <div className="mt-5 text-sm font-medium text-orange-500">
                Написать письмо →
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ================= START SIMPLE ================= */}

      <section className="relative border-y border-white/[0.07] bg-[#080E1A]/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:py-24">
          <div>
            <div className="text-5xl font-bold tracking-tight text-orange-500 sm:text-6xl">
              01
            </div>

            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-gray-500">
              Начинаем просто
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Неважно, насколько ваша идея сейчас готова
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Не нужно приходить с готовым бизнес-планом, расчётами или идеальной
              стратегией. Иногда достаточно одной мысли, которую хочется проверить
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
                Без сложных форм
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
                Без лишних вопросов
              </span>

              <span className="rounded-full border border-orange-500/20 bg-orange-500/[0.05] px-4 py-2 text-sm text-orange-400">
                Просто начнём разговор
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0F172A] px-7 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-500/[0.08] blur-[100px]" />

          <div className="absolute bottom-0 left-[8%] h-20 w-px bg-gradient-to-b from-transparent to-orange-500/50" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-orange-500">
              EZBusiness
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Первый шаг может быть намного проще, чем кажется
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Выберите удобный способ связи и расскажите, о чём думаете.
              Дальше разберёмся вместе
            </p>

            <div className="mt-9">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 rounded-full bg-orange-700 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600 hover:shadow-[0_15px_40px_rgba(194,65,12,0.28)]"
              >
                Вернуться на главную

                <span className="transition duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="relative border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            © {new Date().getFullYear()} EZBusiness
          </div>

          <div className="flex items-center gap-5">
            <span>Открой свой путь в бизнес</span>

            <Link
              href="/"
              className="font-medium text-gray-400 transition hover:text-orange-500"
            >
              EZBusiness →
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}