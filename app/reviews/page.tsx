import Link from "next/link";

const reviews = [
  {
    quote:
      "Здесь появится настоящий отзыв клиента о работе с EZBusiness.",
    name: "Ваш клиент",
    role: "Предприниматель",
  },
  {
    quote:
      "Здесь можно будет разместить историю человека и конкретный результат работы.",
    name: "Ваш клиент",
    role: "Начинающий предприниматель",
  },
  {
    quote:
      "Настоящие отзывы сделают эту страницу одним из самых сильных элементов сайта.",
    name: "Ваш клиент",
    role: "Владелец проекта",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1220] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute left-[10%] top-[-100px] h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[150px]" />

        <div className="pointer-events-none absolute right-[5%] top-[100px] h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl px-5 py-24 text-center sm:px-8 lg:py-32">

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/[0.06] px-5 py-2.5 text-sm font-semibold text-orange-400">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Отзывы
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Истории людей,
            <span className="block bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 bg-clip-text text-transparent">
              которые начали.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
            Здесь будут реальные истории, впечатления и результаты
            людей, которые прошли свой путь вместе с EZBusiness.
          </p>

        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-y border-white/10 bg-[#0E1728]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

          <div className="mb-12 flex items-end justify-between gap-6">

            <div>
              <div className="text-sm font-semibold tracking-[0.18em] text-orange-400">
                МНЕНИЕ КЛИЕНТОВ
              </div>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Что говорят люди
              </h2>
            </div>

            <div className="hidden text-sm text-gray-600 sm:block">
              03 истории
            </div>

          </div>

          <div className="grid gap-5 lg:grid-cols-3">

            {reviews.map((review, index) => (

              <article
                key={review.name + index}
                className={`group relative overflow-hidden rounded-[30px] border p-8 shadow-xl transition duration-300 hover:-translate-y-2 ${
                  index === 1
                    ? "border-orange-500/25 bg-gradient-to-br from-orange-500/10 to-[#111A2B]"
                    : "border-white/10 bg-[#111A2B]"
                }`}
              >

                <div className="absolute right-[-20px] top-[-35px] text-[10rem] font-serif leading-none text-white/[0.025]">
                  “
                </div>

                <div className="relative">

                  <div className="text-5xl font-serif leading-none text-orange-500">
                    “
                  </div>

                  <p className="mt-6 min-h-[150px] text-lg leading-8 text-gray-300">
                    {review.quote}
                  </p>

                  <div className="mt-10 border-t border-white/10 pt-6">

                    <div className="font-semibold text-white">
                      {review.name}
                    </div>

                    <div className="mt-1 text-sm text-gray-500">
                      {review.role}
                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* NOTE */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">

        <div className="rounded-[30px] border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-7 sm:p-9">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <div className="text-sm font-semibold text-orange-400">
                Скоро здесь будут реальные истории
              </div>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                Когда появятся первые результаты клиентов,
                этот раздел будет дополнен настоящими отзывами,
                цифрами и историями.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit shrink-0 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-orange-500/30 hover:bg-orange-500/10"
            >
              Стать первым →
            </Link>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">

          <div className="text-sm font-semibold tracking-[0.18em] text-orange-400">
            СЛЕДУЮЩАЯ ИСТОРИЯ
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Может быть
            <span className="block text-orange-500">
              вашей.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Начните с идеи, вопроса или просто разговора.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-2xl bg-orange-600 px-8 py-4 font-bold shadow-xl shadow-orange-950/30 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
          >
            Связаться со мной →
          </Link>

        </div>

      </section>

    </main>
  );
}