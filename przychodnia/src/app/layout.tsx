import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "./components/header";
import "./globals.css";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Przychodnia",
  description: "A project for projektowanie oprogramowania made by Jakub, Bartosz, Piort and Wiktor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center`}
      > 
        <div className=" w-full flex flex-wrap justify-center bg-sky-50 h-[100vh]">
          <Header user="Jakub"></Header>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
