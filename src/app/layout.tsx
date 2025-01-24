/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import "@/src/app/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { siteConfig } from "@/src/config/site";
import { fontSans } from "@/src/config/fonts";
import MainProvider from "../providers/Provider";
import { Navbar } from "../components/navbar";
import Footer from "../components/shared/Footer";
// import NavigationBar from "../components/shared/Navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <MainProvider>
          <main >
            <Navbar />
            {children}
          </main>
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}
