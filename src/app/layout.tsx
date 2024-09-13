import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const koolegant = localFont({
  src: "./fonts/Koolegant.ttf",
  variable: "--font-koolegant",
  weight: "100 900",
});
const satoshi = localFont({
  src: "./fonts/Satoshi.otf",
  variable: "--font-satoshi",
  weight: "100 900",
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
        className={`${koolegant.variable} ${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
