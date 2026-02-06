import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "./../styles/header.scss";
import "./../styles/footer.scss";
import "./../styles/content.scss";

const interSans = Inter({
  variable: "--font-inter-sans",
});

export const metadata: Metadata = {
  title: "Perumnas",
  description: "Make your living experience even more memorable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
