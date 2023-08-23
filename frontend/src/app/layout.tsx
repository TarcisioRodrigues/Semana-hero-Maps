import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideBar } from "./components/SideBar";
import { NavBar } from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My hero academia",
  description: "eu tenho um site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <NavBar />
        <SideBar />
        <div className="mb-8 mr-15 mt-16">{children}</div>
      </body>
    </html>
  );
}
