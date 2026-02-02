import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Q-Card — Dijital Kartvizit",
  description:
    "Kişisel bilgilerinizi girerek anında vCard ve QR kod oluşturun. Telefon rehberinize uyumlu paylaşım.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
