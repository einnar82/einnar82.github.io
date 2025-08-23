import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href} target="_blank">
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Speaking',
  description:
    'I teach what I build.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I teach what I build."
      intro="I’m frequently invited by universities, tech communities, government offices, and private companies to run talks and hands-on sessions—paid or pro bono—on data engineering (ETL, search, Postgres at scale), software development, scalable APIs, DevOps in constrained/air-gapped environments, observability, and engineering leadership; Here are some of my speaking engagements."
    >
      <div className="space-y-20">
        <SpeakingSection title="Trainings">
          <Appearance
            href="https://www.facebook.com/share/p/19NURmmXvH/"
            title="Web Development Training using the Laravel Framework. (November 2024)"
            description="In partnership with the Department of Information and Communications Technology, the UniFAST Secretariat is conducting a four-day Web Development Training using the Laravel Framework for UniFAST Regional Coordinators from November 19 to 22, 2024, in Quezon City.
Modern frameworks like Laravel enable the creation of more efficient systems, from streamlining administrative processes to developing platforms that enhance educational services. These innovative solutions will contribute to the effectiveness and accessibility of programs across tertiary institutions, ensuring the delivery of high-quality services to students and educators."
            event="UniFAST x Laravel"
            cta="View link"
          />
          <Appearance
            href="https://www.facebook.com/events/647445376423204"
            title="Digging the Gems: Discovering Laravel Built-in classes and its use cases. (December 2021)"
            description="A practical, code-first tour of Laravel’s “hidden workhorses” in the Illuminate package—how to use Service Providers to modularize features, the Pipeline to compose business rules step-by-step, and the Manager pattern to build clean, driver-based services you can swap at runtime. We’ll walk through live demos from my repo (feature branches for each class) and turn internal patterns into reusable building blocks for real projects."
            event="Laravel PH Year-end Assembly."
            cta="View event"
          />
          <Appearance
            href="https://media.licdn.com/dms/image/v2/D562DAQFQrVBdY5NgMQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1697204747856?e=1756587600&v=beta&t=_7ACxgusCZFY30OOeCSYPM1NkSknrxrtGANuebWVx9o"
            title="Diving into the Blocks: Principles of Blockchain and its Use Cases with Solidity and Web3.js (October 2021)"
            description="A practical, jargon-light session that demystifies how blockchains work (blocks, transactions, wallets, PoS consensus, gas) and where they’re useful beyond trading—payments/remittances, identity/KYC, supply-chain traceability, and data integrity. We’ll walk through a minimal smart contract in Solidity, deploy to a test network (e.g., Sepolia/Geth dev), and wire up a simple web UI with Web3.js to read/write on-chain data. Ideal for students, devs, and product teams who want a solid mental model plus hands-on basics they can extend after the talk."
            event="Leyte Normal University - College of Arts and Sciences."
            cta="View pubmat"
          />
          <Appearance
            href="#"
            title="React.js Codecamp for PSBank Employees (November 2019)"
            description="A fast-paced, hands-on introduction to modern React (2019 era): building UI with components and JSX, managing state with Hooks and Context (and when Redux helps), routing, forms, and data-fetching patterns. We refactored class components to functions, covered testing with Jest/React Testing Library, and tuned performance with memoization and effect hygiene. Participants shipped a small end-to-end app using Create React App, learned practical folder structure and code style, and left with repeatable patterns they could bring to production."
            event="Corporate event."
            cta="Resources not available"
          />
          <Appearance
            href="#"
            title="Laravel Codecamp for Perahub Employees (September 2019)"
            description="A hands-on, fast-paced dive into Laravel circa 5.8/6: routing, controllers, middleware, and the service container; Eloquent fundamentals (relations, eager loading, scopes) and validation; queues/jobs/events & task scheduling; Blade and API Resources for clean JSON; auth scaffolding (sessions/Passport), caching with Redis, and deployment hygiene (env/config caching). We used Artisan, migrations/seeders/factories, and PHPUnit to ship a small but production-shaped app."
            event="Corporate event."
            cta="Resources not available"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
