"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
// These styles apply to every route in the application
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider>
          <div className="flex bg-gray-900 h-screen  w-screen justify-center  items-center ">
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
