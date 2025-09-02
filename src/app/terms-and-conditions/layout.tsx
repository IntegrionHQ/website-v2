import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms-and-conditions',
}

export default function Terms-and-conditionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}