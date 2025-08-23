import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Rannie Ollit',
    default:
      'Rannie Ollit - Product & software architecture, Founder-operator & team leadership, and R&D / frontier-tech prototyping.',
  },
  description:
    'Hi, I’m Rannie, a product- and UX-led software designer, founder/CEO, and platform engineer who turns complex domains into intuitive consumer experiences—leading 0→1→N teams, shaping strategy and roadmaps, shipping performant web/mobile platforms and APIs, and driving adoption through accessible, privacy-by-design tech and community partnerships.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
