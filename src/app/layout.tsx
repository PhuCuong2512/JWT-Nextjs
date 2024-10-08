import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { AntdRegistry } from "@ant-design/nextjs-registry";
import '@/app/globals.css'

const inter = Inter({ subsets: []})

export const metadata: Metadata = {
  title: "JWT By Cuong",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
        {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
