import "./globals.css";

import Link from "next/link";
import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "~/components/ui/toaster";
import { ThemeProvider } from "~/providers/theme.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "meenreferencia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          enableSystem
          disableTransitionOnChange
          attribute="class"
          defaultTheme="dark"
        >
          <nav className="absolute flex w-screen justify-between p-4">
            <Link href="/">/</Link>
            <Link href="/context">context</Link>
          </nav>

          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
