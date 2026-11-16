import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paul Crisologo — Career Portfolio",
  description: "Career e-portfolio for Paul Martin Ryan Alipio Crisologo, Computer Science undergraduate majoring in Software Technology at De La Salle University.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
