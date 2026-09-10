"use client";

import { useEffect, useState } from "react";

type Msg = {
  role: "user" | "assistant";
  text: string;
};

const OPEN_CHAT_EVENT = "ezbusiness:open-chat";

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      text:
        "Здравствуйте! Я ИИ-помощник EZBusiness 👋\n\nПомогу выбрать идею бизнеса, рассчитать бюджет, составить бизнес-план, объяснить ИП/ООО, налоги и продвижение.\n\nНапишите, какой бизнес вас интересует.",
    },
  ]);

  // Открытие чата из любой кнопки на странице
  useEffect(() => {
    const openChat = () => {
      setOpen(true);
    };

    window.addEventListener(OPEN_CHAT_EVENT, openChat);

    return () => {
      window.removeEventListener(OPEN_CHAT_EVENT, openChat);
    };
  }, []);

  const sendMessage = async (quickText?: string) => {
    const text = quickText ?? message;

    if (!text.trim() || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: text.trim(),
      },
    ]);

    if (!quickText) {
      setMessage("");
    }

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text.trim(),
          sessionId: "ezbusiness-user",
        }),
      });

      if (!res.ok) {
        throw new Error("Ошибка API");
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            data?.reply ||
            "Не удалось получить ответ. Попробуйте ещё раз.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "⚠️ Не удалось подключиться к ИИ.\n\nПроверьте API и попробуйте ещё раз.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ПЛАВАЮЩАЯ КНОПКА ЧАТА */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Открыть ИИ-помощника"
          className="
            fixed
            bottom-6
            right-6
            z-[9999]
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-orange-400/30
            bg-[#C2410C]
            text-3xl
            text-white
            shadow-[0_10px_40px_rgba(194,65,12,0.45)]
            transition
            duration-200
            hover:scale-105
            hover:bg-[#ea580c]
            active:scale-95
            sm:h-16
            sm:w-16
          "
        >
          💬
        </button>
      )}

      {/* ОКНО ЧАТА */}
      {open && (
        <>
          {/* Затемнение на телефоне */}
          <div
            className="
              fixed
              inset-0
              z-[9997]
              bg-black/50
              backdrop-blur-[2px]
              sm:hidden
            "
            onClick={() => setOpen(false)}
          />

          <div
            id="ezbusiness-ai-chat"
            className="
              fixed
              bottom-4
              right-4
              z-[9998]
              flex
              h-[calc(100dvh-32px)]
              max-h-[680px]
              w-[calc(100vw-32px)]
              max-w-[400px]
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#07152d]
              text-white
              shadow-[0_20px_80px_rgba(0,0,0,0.65)]
              sm:bottom-24
              sm:right-6
              sm:h-[620px]
              sm:w-[380px]
            "
          >
            {/* HEADER */}
            <div
              className="
                flex
                shrink-0
                items-center
                justify-between
                border-b
                border-white/10
                bg-[#091a34]
                px-5
                py-4
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-600
                    text-xl
                  "
                >
                  🤖
                </div>

                <div>
                  <div className="font-bold text-white">
                    EZBusiness AI
                  </div>

                  <div className="text-xs text-gray-400">
                    ИИ-помощник по бизнесу
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Закрыть чат"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/5
                  text-xl
                  text-gray-400
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                ✕
              </button>
            </div>

            {/* СООБЩЕНИЯ */}
            <div
              className="
                flex-1
                space-y-4
                overflow-y-auto
                px-4
                py-4
              "
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === "user"
                      ? "ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-orange-600 px-4 py-3 text-white"
                      : "mr-auto max-w-[88%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-3 text-gray-100"
                  }
                >
                  <div className="whitespace-pre-wrap text-sm leading-6">
                    {m.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="mr-auto max-w-[88%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-3 text-sm text-gray-300">
                  EZBusiness AI печатает…
                </div>
              )}
            </div>

            {/* БЫСТРЫЕ КНОПКИ */}
            <div className="shrink-0 border-t border-white/10 px-4 pb-3 pt-3">
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                {[
                  "💡 Идея бизнеса",
                  "💰 Посчитать прибыль",
                  "📄 Бизнес-план",
                  "📣 Найти клиентов",
                  "🏢 ИП или ООО",
                ].map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendMessage(q)}
                    disabled={loading}
                    className="
                      shrink-0
                      rounded-full
                      border
                      border-orange-500/40
                      bg-orange-500/10
                      px-3
                      py-2
                      text-xs
                      text-orange-300
                      transition
                      hover:bg-orange-500/20
                      disabled:opacity-50
                    "
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* ВВОД */}
              <div className="flex items-center gap-2">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
                  placeholder="Напишите сообщение…"
                  disabled={loading}
                  className="
                    min-w-0
                    flex-1
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#0b1b36]
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-gray-500
                    focus:border-orange-500
                    disabled:opacity-60
                  "
                />

                <button
                  type="button"
                  onClick={() => sendMessage()}
                  disabled={loading || !message.trim()}
                  aria-label="Отправить сообщение"
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-orange-600
                    text-xl
                    text-white
                    transition
                    hover:bg-orange-500
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  ➜
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

/*
  Используется page.tsx для открытия чата.
*/
export function openAiChat() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_CHAT_EVENT));
  }
}