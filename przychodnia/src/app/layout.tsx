import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "./components/header";
import "./globals.css";
import Footer from "./components/footer";
// import { getCookie } from "./lib/cookies";
// import { headers } from 'next/headers';

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
  // Access cookies from the request headers (server-side)
  //  const sessionCookie = getCookie(headers(), 'session');

  //  // Check if the session exists and extract the username
  //  const username = sessionCookie && typeof sessionCookie === 'object' ? sessionCookie.firstName : null;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Header></Header>
        <div className=" w-full flex flex-wrap justify-center ">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
