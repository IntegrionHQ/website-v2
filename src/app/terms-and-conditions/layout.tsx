import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms-and-conditions",
};

export default function TermsandconditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
