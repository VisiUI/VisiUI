import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VisiUI",
  description: "VisiUI is a collection of reusable and customizable React components. This library is designed to simplify the creation of user interfaces in React applications, providing a set of pre-built components that can be easily imported and used in any project.",
  icons: {
    icon: '/visiui1.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
