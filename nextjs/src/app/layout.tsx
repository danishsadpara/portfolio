import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Appbar from "@/components/Appbar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Code Discovery",
  description: "learn and earn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system" attribute="class">
          <div className="flex h-screen">
            {/* Sidebar */}
            <div className="fixed top-8 left-0 w-64 h-full">
              <Sidebar />
            </div>

            <div className="flex-1">
              {/* Appbar with full width and z-index */}
              <div className="fixed top-0 left-0 right-0 h-16 z-10 ">
                <Appbar />
              </div>

              {/* Main Content */}
              <div className="mt-16 ml-64 p-4 overflow-auto h-full">
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
