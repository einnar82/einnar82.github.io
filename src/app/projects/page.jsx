import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoPerahub from '@/images/logos/perahub.jpg'
import logoPoliigon from '@/images/logos/poliigon.jpg'
import logoLodago from '@/images/logos/lodago.jpg'
import logoJollybbox from '@/images/logos/jollybbox.jpg'
import logoPhkule from '@/images/logos/phkule.jpg'

const projects = [
  {
    name: 'Perahub DRP',
    description:
      'Perahub’s Digital Remittance Platform: A portal for secure domestic/international money transfers with account login/registration.',
    link: { href: 'http://drp.perahub.com.ph', label: 'drp.perahub.com.ph' },
    logo: logoPerahub,
  },
  {
    name: 'Poliigon',
    description:
      'Asset library for 3D creators offering photoreal PBR textures, models, and HDRIs via subscription or free samples.',
    link: { href: 'https://poliigon.com', label: 'poliigon.com' },
    logo: logoPoliigon,
  },
  {
    name: 'Lodago',
    description:
      'An AI-powered tradeshow platform for exhibitors to plan, book, and track meetings and ROI in one dashboard.',
    link: { href: 'https://lodago.com', label: 'lodago.com' },
    logo: logoLodago,
  },
  {
    name: 'Philippine Collegian',
    description:
      'The Philippine Collegian online: the official student publication of UP Diliman, publishing news, features, and opinion',
    link: { href: 'https://phkule.org', label: 'phkule.org' },
    logo: logoPhkule,
  },
  {
    name: 'Jolly-B Box',
    description:
      'Jolly-B Box balikbayan cargo service providing door-to-door international shipping (est. 2001).',
    link: { href: 'https://jollyb-box.com/', label: 'jollyb-box.com' },
    logo: logoJollybbox,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Platforms I’ve built to make complex things simple.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Platforms I’ve built to make complex things simple."
      intro="A curated set of projects—remittances, 3D assets, event-ops, student media, and balikbayan logistics—where I pair product sensibilities with data engineering: ETL pipelines, search, Postgres at scale, and actionable analytics. Feel free to explore some of the projects that i've worked on."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target="_blank">{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
