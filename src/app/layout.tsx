import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Silent Hill 2 Remake",
  description: "A remake of Silent Hill 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-mainWallpaper bg-cover bg-center h-screen`}
      >
        <Script
          src="https://kit.fontawesome.com/a2c0ca1cdd.js"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  );
}
