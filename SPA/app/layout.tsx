import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Next.js SPA",
  description: "A simple SPA using Next.js App Router and TypeScript."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1rem",
            borderBottom: "1px solid #e2e8f0",
            background: "#ffffff"
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/products">Products</Link>
        </nav>
        <main style={{ padding: "1.5rem" }}>{children}</main>
      </body>
    </html>
  );
}
