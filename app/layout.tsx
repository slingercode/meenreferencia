import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "meenreferencia",
  description: "Listo el conteo",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
