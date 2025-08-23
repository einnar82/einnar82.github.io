import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Product & software architecture, Founder-operator & team leadership, and R&D / frontier-tech prototyping.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
           Hi, I’m Rannie, a product- and UX-led software designer, founder/CEO, and platform engineer who turns complex domains into intuitive consumer experiences—leading 0→1→N teams, shaping strategy and roadmaps, shipping performant web/mobile platforms and APIs, and driving adoption through accessible, privacy-by-design tech and community partnerships.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink 
              href="https://x.com/einnar82"
              aria-label="Follow on X"
              icon={XIcon} 
              target="_blank"/>
            <SocialLink
              href="https://github.com/einnar82"
              target="_blank"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/rannieollit"
              target="_blank"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
    </>
  )
}
