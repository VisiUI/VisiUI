import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProviders } from "@/utils/ThemeProviders";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VisiUI",
  description: "VisiUI is a collection of reusable and customizable React components. This library is designed to simplify the creation of user interfaces in React applications, providing a set of pre-built components that can be easily imported and used in any project.",
  icons: {
    icon: '/visiui3.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        <ThemeProviders
          attribute="class"
          defaultTheme="dark" // Set default theme to dark
          enableSystem // Allow system-based theme switching
        >
          <main>{children}</main>
        </ThemeProviders>
      </body>
    </html>
  );
}

