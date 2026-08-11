export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDF8F3] text-[#1F2937]">
      <header className="sticky top-0 z-50 bg-[#FDF8F3]/90 backdrop-blur border-b border-[#F3E7DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C2410C] text-white flex items-center justify-center font-bold">
              EZ
            </div>
            <span className="text-xl font-bold">EZBusiness</span>
          </div>

          <a
            href="#contacts"
            className="bg-[#C2410C] hover:bg-[#EA580C] text-white px-5 py-2 rounded-xl text-sm font-medium transition"
          >
            Написать мне
          </a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF1E8] text-[#C2410C] text-sm font-medium mb-6">
            ✨ Личное сопровождение + AI
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            Откройте бизнес
            <span className="text-[#C2410C] block">
              проще, чем кажется
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
            Я — Илья. Помогаю начинающим предпринимателям запускать
            бизнес, находить клиентов и расти дальше с поддержкой человека
            и ИИ-помощников.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#contacts"
              className="bg-[#C2410C] hover:bg-[#EA580C] text-white px-8 py-4 rounded-2xl font-semibold text-center transition"
            >
              Начать бизнес со мной
            </a>

            <a
              href="#how"
              className="border border-[#E7D5C4] bg-white px-8 py-4 rounded-2xl font-semibold text-center hover:bg-[#FFF7F0] transition"
            >
              Как это работает
            </a>
          </div>

          <div className="inline-flex items-center gap-3 bg-white border border-[#F3E7DA] px-5 py-4 rounded-2xl shadow-sm">
            <span className="text-[#C2410C] text-xl">⭐</span>
            <span className="font-medium">
              Можно начать даже без опыта в бизнесе
            </span>
          </div>
        </div>

        <div className="bg-white rounded-[32px] border border-[#F3E7DA] shadow-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#C2410C] text-white flex items-center justify-center text-sm font-bold">
                EZ
              </div>
              <span className="font-semibold">EZBusiness AI</span>
            </div>
            <span className="text-xs text-gray-500">Онлайн</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["💡", "Генератор идей"],
              ["📄", "Бизнес-план"],
              ["📣", "Маркетинг"],
              ["💰", "Финансы"],
            ].map(([icon, label]) => (
              <div
                key={label}
                className="bg-[#FFF7F0] border border-[#F3E7DA] rounded-2xl p-4"
              >
                <div className="text-2xl mb-2">{icon}</div>
                <div className="text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Чем я могу быть полезен
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Вы получаете не просто советы, а человека рядом и инструменты,
            которые помогают двигаться вперёд каждый день.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["💬", "Личный наставник"],
            ["🗺️", "Пошаговый план"],
            ["🤖", "ИИ-помощники"],
            ["📈", "Рост бизнеса"],
          ].map(([icon, title]) => (
            <div
              key={title}
              className="bg-white border border-[#F3E7DA] rounded-[28px] p-6 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-lg font-bold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section
        id="how"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Как мы работаем
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Всё просто: вы пишете мне, мы разбираем идею, составляем
            план и запускаем бизнес шаг за шагом.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            ["1", "Вы пишете мне"],
            ["2", "Разбираем идею"],
            ["3", "Получаете план"],
            ["4", "Запускаете бизнес"],
            ["5", "Растёте дальше"],
          ].map(([num, text]) => (
            <div key={num} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#C2410C] text-white flex items-center justify-center text-xl font-bold mb-3">
                {num}
              </div>
              <div className="bg-white border border-[#F3E7DA] rounded-2xl p-4 text-sm font-semibold h-full">
                {text}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white border border-[#F3E7DA] rounded-[32px] p-8 sm:p-10 shadow-sm">
          <p className="text-2xl sm:text-3xl font-semibold leading-relaxed mb-6">
            «Малый бизнес не должен начинаться с одиночества. У
            предпринимателя должен быть человек, которому можно написать,
            и инструменты, которые помогают двигаться вперёд каждый день.»
          </p>
          <p className="font-semibold">
            — Илья, основатель EZBusiness
          </p>
        </div>
      </section>

      <section
        id="contacts"
        className="bg-[#1F2937] text-white mt-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Готовы обсудить вашу идею?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Telegram, VK, телефон или MAX — выберите удобный способ
            связи. Контакты добавим позже.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              ["📞", "Телефон"],
              ["✈️", "Telegram"],
              ["🔵", "ВКонтакте"],
              ["⚡", "MAX"],
            ].map(([icon, title]) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <div className="font-semibold">{title}</div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#C2410C] hover:bg-[#EA580C] text-lg font-semibold transition"
          >
            Начать бизнес со мной
          </a>

          <p className="text-sm text-gray-400 mt-4">
            ⏰ Ответ обычно в течение дня
          </p>
        </div>

        <footer className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center text-sm text-gray-400">
            © 2026 EZBusiness — Начать бизнес проще, чем кажется
          </div>
        </footer>
      </section>
    </main>
  );
}