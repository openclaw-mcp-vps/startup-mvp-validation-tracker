import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MVP Validation Tracker — Track Which Features Users Actually Use',
  description: 'Analytics dashboard showing feature usage, user drop-off points, and validation metrics for early-stage startups.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ca2e6c67-ead1-46f5-a1fc-1577ab2e705a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
