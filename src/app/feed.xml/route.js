import { Feed } from 'feed'

export const dynamic = 'force-static'

export async function GET(req) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://einnar82.github.io'

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Rannie Ollit',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Personal website.',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
