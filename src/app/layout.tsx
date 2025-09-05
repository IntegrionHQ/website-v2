import type { Metadata } from "next";
import "./globals.css";
// import { Navbar } from "@/components/core/layout/Navbar";

export const metadata = {
  title: {
    template: "%s | Integrion",
    default: "Integrion |  AI-powered infra-native testing platform",
  },
  description: "Your AI-powered infra-native ",
  keywords: ["infrastructure", "testing", "ai", "backend", "QA"],
  authors: [{ name: "Integrion" }],
  verification: {
    google: "ahnuzveQZ1UXkJ2upyy_XDoAucCigZ6NjaQRNMzmS4g",
  },
  openGraph: {
    title: "Integrion |  AI-powered infra-native testing platform",
    description:
      "Integrion deploys infra-native agents that hunt bugs, stress-test reliability, and validate backend logic—so engineers ship safer, faster, and with confidence.",
    url: "https://www.integrion.xyz/",
    siteName: "Integrion",
    images: [
      {
        url: "https://www.integrion.xyz/openGraph-image.jpg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Title",
    description: "Your Description",
    images: ["https://www.integrion.xyz/openGraph-image.jpg"],
  },
};

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
