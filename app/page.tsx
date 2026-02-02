"use client";

import { useMemo, useState } from "react";
import { CardForm, QRCardDisplay, DownloadVcfButton } from "@/components/card";
import { buildVCard } from "@/lib/vcard";
import { initialCardFormData, type CardFormData } from "@/types";

const PROJECT_DESCRIPTION =
  "İletişim bilgilerinizi girerek anında dijital kartvizit (vCard) ve QR kod oluşturun. " +
  "Telefon rehberinize tek tıkla ekleyin; veriler yalnızca cihazınızda işlenir.";

export default function HomePage() {
  const [formData, setFormData] = useState<CardFormData>(initialCardFormData);

  const vCardString = useMemo(() => buildVCard(formData), [formData]);

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-4 py-8 sm:py-12">
      <header className="mb-10 text-center">
        <h1 className="flex items-center justify-center gap-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-400 sm:h-12 sm:w-12"
            aria-hidden
          >
            <svg
              className="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 9.375v-4.5zM4.875 4.5a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 01-1.875-1.875v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75A.75.75 0 016 7.5v-.75zm9.75 0A.75.75 0 0116.5 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 19.125v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875-.75a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM6 16.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm9.75 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm-3 3a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75z"
              />
            </svg>
          </span>
          Q-Card
        </h1>
        <p className="mt-3 max-w-md mx-auto text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {PROJECT_DESCRIPTION}
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr,auto]">
        <section
          className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/40"
          aria-label="Kartvizit bilgilerini girin"
        >
          <CardForm data={formData} onUpdate={setFormData} />
        </section>

        <aside
          className="flex flex-col items-center gap-6"
          aria-label="QR kod ve indirme"
        >
          <QRCardDisplay vCardString={vCardString} />
          <DownloadVcfButton vCardString={vCardString} formData={formData} />
        </aside>
      </div>

      <footer className="mt-12 text-center text-xs text-zinc-500 dark:text-zinc-400">
        Veriler yalnızca tarayıcınızda işlenir, sunucuya gönderilmez.
      </footer>
    </main>
  );
}
