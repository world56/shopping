import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "购物车",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cn">
      <body>{children}</body>
    </html>
  );
}
