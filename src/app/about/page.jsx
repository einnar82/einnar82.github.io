import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Rannie Ollit. I design products and the teams that deliver them.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’m Rannie Ollit, a software developer, founder, and engineering leader based in the Philippines. I build practical systems that solve real problems—then shape the teams and rituals that keep those systems reliable as they scale.
            </p>
            <p>
              I grew up in Calumpit, Bulacan, learning computers the old-school way in neighborhood computer shops. That’s where I taught myself to type, fix broken installs, and write my first bits of code—one paid hour at a time, a few printed cheat sheets in my pocket, and a lot of curiosity.
            </p>
            <p>
              These days I lead product and platform work across data-heavy, compliance-minded systems and modern web apps. I’m comfortable moving from architecture diagrams to APIs and dashboards, from refactoring legacy stacks to standing up clean services with clear SLAs. My bias: ship durable software, document well, mentor generously, and let outcomes—not buzzwords—do the talking.
            </p>
            <p>
            When I’m off the keyboard, you’ll likely find me traveling or exploring overlanding routes around the Philippines in my 4×4 pickup. Music keeps me grounded (I pick up the guitar whenever I can), and I stay active with basketball and badminton.
            </p>
            <p>
            I care about building tech that’s accessible, resilient, and useful—tools that help teams work better and give everyday people more control over their data and experiences. If that’s your kind of project, let’s talk.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink 
              href="https://x.com/einnar82" 
              icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink 
              href="https://github.com/einnar82"
              icon={GitHubIcon} 
              className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink 
              href="https://linkedin.com/in/rannieollit"
              icon={LinkedInIcon}
              className="mt-4">
              Follow on LinkedIn
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
