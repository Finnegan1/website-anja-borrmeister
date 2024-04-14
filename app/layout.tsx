import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { pocketBase } from "@/lib/pocketBase";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const galerieProductCategories = await pocketBase.collection("galerie_products_categories").getFullList();
  const events = await pocketBase.collection("events").getFullList();

  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen"}>
        <Header galerieProductCategories={galerieProductCategories} events={events}/>
        {children}
      </body>
    </html>
  );
}
