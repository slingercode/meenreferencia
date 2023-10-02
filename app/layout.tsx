import "./globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

import Nav from "~/components/nav";
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
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <ThemeProvider
          enableSystem
          disableTransitionOnChange
          attribute="class"
          defaultTheme="dark"
        >
          <Nav />

          {children}

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
