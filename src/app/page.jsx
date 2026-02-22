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
            Hands-on Head of Engineering, DevSecOps leader, and software architect for secure, scalable platforms.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi, I’m Rannie—a hands-on engineering leader who combines team leadership with practical architecture and coding involvement when needed. I design and deliver software and data platforms for regulated environments, with a focus on platform reliability, DevSecOps, cloud operations, and audit-ready delivery across modern CI/CD pipelines.
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
