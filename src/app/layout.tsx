import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
// import Sidebar from "@/app/components/Sidebar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material"; 
import theme from "./theme";
import withLayout from "./components/withLayout";
import React from "react";
import dynamic from "next/dynamic";  
const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Yogyabano",
  description: "Personalized Coach for Every Frontline Employee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en">
      <body className={montserrat.variable}>
      <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
          {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
