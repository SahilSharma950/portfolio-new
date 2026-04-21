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
  title: "MERN Stack Developer | Portfolio",
  description: "Full-stack MERN developer specializing in MongoDB, Express.js, React, and Node.js. Building modern, scalable web applications with cutting-edge technology.",
  keywords: ["MERN Stack", "React Developer", "Node.js", "MongoDB", "Express.js", "Full Stack Developer", "Web Development"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "MERN Stack Developer | Portfolio",
    description: "Full-stack MERN developer specializing in MongoDB, Express.js, React, and Node.js.",
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
