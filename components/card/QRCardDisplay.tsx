"use client";

import { QRCodeSVG } from "qrcode.react";

type QRCardDisplayProps = {
  vCardString: string;
};

const MIN_VCARD_LENGTH = "BEGIN:VCARD\r\nVERSION:3.0\r\nEND:VCARD".length;

export const QRCardDisplay = ({ vCardString }: QRCardDisplayProps) => {
  const hasContent = vCardString.length > MIN_VCARD_LENGTH;

  if (!hasContent) {
    return (
      <div
        className="flex min-h-[200px] w-full max-w-[200px] items-center justify-center rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800/50"
        aria-live="polite"
        aria-label="QR kod henüz oluşturulmadı"
      >
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 px-4">
          En az bir alan doldurduğunuzda QR kod burada görünecek
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl border border-zinc-200 bg-white p-4 shadow-soft dark:border-zinc-700 dark:bg-zinc-800/50"
      aria-live="polite"
      aria-label="Oluşturulan QR kod"
    >
      <QRCodeSVG
        value={vCardString}
        size={200}
        level="M"
        includeMargin
        className="mx-auto h-auto w-full max-w-[200px]"
        role="img"
        aria-label="vCard QR kodu"
      />
    </div>
  );
};
