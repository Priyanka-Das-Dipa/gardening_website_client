/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import "@/src/app/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/src/config/site";
import MainProvider from "../providers/Provider";
import Footer from "../components/shared/Footer";
import NavigateBar from "../components/shared/Navbar";
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
          <NavigateBar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </MainProvider>
      </body>
    </html>
  );
}
