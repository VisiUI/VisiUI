import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const colvetica = localFont({
  src: "../../public/fonts/Colvetica.ttf",
  variable: "--font-colvetica",
});

export const metadata: Metadata = {
  title: "VisiUI",
  description:
    "VisiUI is a collection of reusable and customizable React components. This library is designed to simplify the creation of user interfaces in React applications, providing a set of pre-built components that can be easily imported and used in any project.",
  icons: {
    icon: "/visiui8.png",
  },
  openGraph: {
    title: "VisiUI",
    description:
      "VisiUI provides reusable and customizable React components to simplify UI development.",
    url: "https://visi-ui.vercel.app/",
    images: [
      {
        url: "https://visi-ui.vercel.app/api/og",
        width: 1200,
        height: 630,
        alt: "Hello, are you ready to start using VisiUI?",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${colvetica.variable}`}>
          <div  >{children}</div>
      </body>
    </html>
  );
}
