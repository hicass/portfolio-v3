import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const universalExpansion = localFont({
  src: "./fonts/Universal-Expansion.ttf",
  variable: "--font-universal-expansion",
});
const satoshi = localFont({
  src: "./fonts/Satoshi.otf",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Cass Walters",
  description: "The Software Development portfolio of Cass Walters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${universalExpansion.variable} ${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
