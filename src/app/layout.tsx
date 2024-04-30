import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twitter 2.0",
  description: "A Twitter clone built with Next.js and Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
