import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SnapFig - 写真からAIでフィギュアを作成',
  description: '大切な思い出をAIでフィギュアに。あなたの写真から世界にひとつだけのオリジナル3Dフィギュアを作成します。',
  generator: 'Next.js',
  icons: {
    icon: '/snapfig-logo.png',
    apple: '/snapfig-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/snapfig-logo.png" />
        <link rel="apple-touch-icon" href="/snapfig-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
