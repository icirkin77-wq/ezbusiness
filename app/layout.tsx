import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

import MobileMenu from "./components/MobileMenu";
import PageTransition from "./components/PageTransition";

export const metadata: Metadata = {
  title: "EZBusiness — Открой свой путь в бизнес",
  description:
    "EZBusiness помогает начинающим предпринимателям пройти путь от идеи до запуска бизнеса.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-[#0B1220] text-white antialiased">
        {/* ================= HEADER ================= */}

        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1220]/80 backdrop-blur-xl">
          <div className="mx-auto flex h-20 w-full max-w-7xl items-center px-5 sm:px-8">
            {/* ================= LOGO ================= */}

            <Link href="/" className="group flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-orange-600/20 blur-xl transition group-hover:bg-orange-500/40" />

                <Image
                  src="/logo-transparent.png"
                  alt="EZBusiness"
                  width={44}
                  height={44}
                  className="relative h-11 w-11 object-contain transition duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="hidden sm:block">
                <div className="text-lg font-bold tracking-tight">
                  EZBusiness
                </div>

                <div className="text-xs text-gray-500">
                  Открой свой путь в бизнес
                </div>
              </div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}

            <nav className="ml-auto hidden items-center gap-7 md:flex">
              <Link
                href="/how"
                className="text-sm text-gray-400 transition duration-300 hover:text-white"
              >
                Как мы работаем
              </Link>

              <Link
                href="/ai"
                className="text-sm text-gray-400 transition duration-300 hover:text-white"
              >
                ИИ-помощники
              </Link>

              <Link
                href="/reviews"
                className="text-sm text-gray-400 transition duration-300 hover:text-white"
              >
                Отзывы
              </Link>

              <Link
                href="/about"
                className="text-sm text-gray-400 transition duration-300 hover:text-white"
              >
                Обо мне
              </Link>

              <Link
                href="/contact"
                className="text-sm text-gray-400 transition duration-300 hover:text-white"
              >
                Контакты
              </Link>

              {/* ================= TELEGRAM CTA ================= */}

              <a
                href="https://t.me/EZbusinessEZ"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition duration-300 hover:bg-orange-500 hover:shadow-orange-600/20"
              >
                Написать мне
              </a>
            </nav>

            {/* ================= MOBILE MENU ================= */}

            <div className="ml-auto md:hidden">
              <MobileMenu />
            </div>
          </div>
        </header>

        {/* ================= PAGE ================= */}

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}