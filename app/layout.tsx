'use client';

import { Geist } from "next/font/google";
import "./globals.css";
import TopBar from '../components/TopBar';

const geist = Geist({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <TopBar />    
        <main>{children}</main>
      </body>
    </html>
  );
}
