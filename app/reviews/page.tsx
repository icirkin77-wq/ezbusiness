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

      <section className="relative">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[20%] top-20 h-80 w-80 rounded-full bg-orange-600/10 blur-[130px]" />
          <div className="absolute right-[10%] top-40 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-32">

          <div className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-sm text-orange-300">
            Отзывы
          </div>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Истории людей,
            <span className="block text-orange-500">
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

      <section className="border-y border-white/10 bg-[#0D1524]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

          <div className="grid gap-5 lg:grid-cols-3">

            {reviews.map((review, index) => (
              <article
                key={review.name + index}
                className={`rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 ${
                  index === 1
                    ? "lg:-translate-y-6 lg:bg-orange-500/[0.035] lg:border-orange-500/20"
                    : ""
                }`}
              >

                <div className="text-5xl text-orange-500">
                  “
                </div>

                <p className="mt-5 text-lg leading-8 text-gray-300">
                  {review.quote}
                </p>

                <div className="mt-10 border-t border-white/10 pt-5">

                  <div className="font-semibold">
                    {review.name}
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    {review.role}
                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="relative">

        <div className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">

          <div className="text-4xl">
            ★
          </div>

          <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
            Следующая история
            <span className="block text-orange-500">
              может быть вашей
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Начните с идеи, вопроса или просто разговора
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-2xl bg-orange-600 px-8 py-4 font-bold transition hover:-translate-y-1 hover:bg-orange-500"
          >
            Связаться со мной
          </Link>

        </div>

      </section>

    </main>
  );
}