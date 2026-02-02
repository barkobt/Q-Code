"use client";

import type { CardFormData } from "@/types/card";
import { HiArrowDownTray, HiDocumentText } from "react-icons/hi2";

type DownloadVcfButtonProps = {
  vCardString: string;
  formData: CardFormData;
};

const MIN_VCARD_LENGTH = "BEGIN:VCARD\r\nVERSION:3.0\r\nEND:VCARD".length;

const getDownloadFileName = (data: CardFormData): string => {
  const parts = [data.firstName, data.lastName].filter(Boolean);
  if (parts.length > 0) {
    return `${parts.join("-").replace(/\s+/g, "-")}.vcf`;
  }
  return "qcard.vcf";
};

export const DownloadVcfButton = ({ vCardString, formData }: DownloadVcfButtonProps) => {
  const hasContent = vCardString.length > MIN_VCARD_LENGTH;
  const fileName = getDownloadFileName(formData);

  const handleClick = () => {
    if (!hasContent) return;
    const blob = new Blob([vCardString], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.setAttribute("aria-label", "vCard dosyasını indir");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (hasContent) handleClick();
    }
  };

  return (
    <div
      className="w-full max-w-[280px] rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/50"
      aria-label="vCard indirme"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-700/50"
          aria-hidden
        >
          <HiDocumentText className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            vCard / Rehber dosyası
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {hasContent
              ? "Telefon rehberinize eklemek için indirin."
              : "En az bir alan doldurduğunuzda indirilebilir."}
          </p>
          {hasContent && (
            <p className="truncate pt-0.5 text-xs font-medium text-violet-600 dark:text-violet-400" title={fileName}>
              {fileName}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label={hasContent ? "vCard dosyasını indir" : "Önce kartvizit bilgisi girin"}
          disabled={!hasContent}
          className={
            hasContent
              ? "flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:from-violet-600 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
              : "flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-100 px-4 py-3 text-sm font-medium text-zinc-500 transition dark:bg-zinc-700 dark:text-zinc-400 cursor-not-allowed"
          }
        >
          <HiArrowDownTray className="h-5 w-5 shrink-0" aria-hidden />
          {hasContent ? "İndir" : "Kartvizit bilgisi girin"}
        </button>
      </div>
    </div>
  );
};
