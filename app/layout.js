"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { DM_Sans } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import { metadata } from "./metadata";

const inter = DM_Sans({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [sidebar, setSidebar] = useState(false);
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className + " background"}>
        <div>
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          <div className="flex">
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
            <div className="w-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
