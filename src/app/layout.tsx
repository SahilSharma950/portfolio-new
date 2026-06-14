import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahil Sharma | MERN Stack Developer",
  description: "Portfolio of Sahil Sharma, a MERN Stack Developer with 2+ years of experience building scalable web apps, backend APIs, admin panels, payments, subscriptions, and real-time features.",
  keywords: ["Sahil Sharma", "MERN Stack Developer", "React Developer", "Node.js", "MongoDB", "Express.js", "Next.js", "Full Stack Developer"],
  authors: [{ name: "Sahil Sharma" }],
  openGraph: {
    title: "Sahil Sharma | MERN Stack Developer",
    description: "MERN Stack Developer building scalable web and backend systems for web and mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
