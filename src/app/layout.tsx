import type { Metadata } from "next";
import "./globals.css";
// import { Navbar } from "@/components/core/layout/Navbar";

export const metadata = {
  title: {
    template: '%s | Your Title',
    default: 'Your Title',
  },
  description: "Your Description",
  keywords: ["nextjs", "react", "seo"],
  authors: [{ name: "Your Name" }],
  verification: {
    google: "ahnuzveQZ1UXkJ2upyy_XDoAucCigZ6NjaQRNMzmS4g",
  },
  openGraph: {
    title: "Your Title",
    description: "Your Description",
    url: "https://www.integrion.xyz/",
    siteName: "Your Title",
    images: [{
      url: "https://www.integrion.xyz/openGraph-image.jpg",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Title",
    description: "Your Description",
    images: ["https://www.integrion.xyz/openGraph-image.jpg"],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
