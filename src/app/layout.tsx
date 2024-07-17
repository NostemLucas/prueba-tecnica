import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FullScreenLoadingProvider } from "@/components/FullScreenLoadingProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prueba Tecnica",
  description: "Prueba Tecnica Galeria de Imagenes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FullScreenLoadingProvider>{children}</FullScreenLoadingProvider>
      </body>
    </html>
  );
}
