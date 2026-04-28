import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Rannie Ollit collects, uses, and protects personal and business information in compliance with the Philippine Data Privacy Act of 2012 (RA 10173).',
}

export default function PrivacyPolicy() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Privacy Policy
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Effective date: April 29, 2025 &nbsp;&middot;&nbsp; Last updated: April 29, 2025
        </p>
      </header>

      <Prose className="mt-12 max-w-3xl">
        <p>
          This Privacy Policy describes how the Service Provider ("I", "me", or "the
          Service Provider"), operating through this website or similar platforms and channels,
          handles personal and business
          information in connection with the automation, software development, and technology
          services I provide to clients and partners.
        </p>
        <p>
          <strong>Core commitment:</strong> I do not collect, store, or retain the personal data of
          my clients' customers or end-users. My role in any client engagement is that of a
          technical service provider — I build and operate systems on behalf of my clients, but the
          personal data those systems handle belongs to the client and their users. I access
          it only to the extent required to deliver the agreed service, never to profile, analyze,
          or retain it for my own purposes.
        </p>
        <p>
          This policy is written in compliance with the{' '}
          <strong>Philippine Data Privacy Act of 2012 (Republic Act No. 10173)</strong> and its
          Implementing Rules and Regulations (IRR), as enforced by the National Privacy Commission
          (NPC). Where clients operate internationally, I also observe applicable data protection
          principles consistent with standards such as the GDPR.
        </p>

        <hr />

        <h2>1. Scope</h2>
        <p>This policy covers:</p>
        <ul>
          <li>
            Personal and business information I collect directly — from clients, partners, and
            website visitors
          </li>
          <li>
            Personal data I process on behalf of clients as part of delivering automation, software,
            data engineering, or platform services
          </li>
        </ul>
        <p>
          It does <strong>not</strong> govern the privacy practices of third-party websites or
          services linked from this site — those parties have their own policies.
        </p>
        <p>
          It also does not apply to personal data held by my clients about their own customers.
          Clients are the <strong>Personal Information Controllers</strong> for that data under RA
          10173. I act only as a <strong>Personal Information Processor</strong> — building and
          operating the technical systems that handle it, under the client's instruction.
        </p>

        <hr />

        <h2>2. My Role: Controller vs. Processor</h2>
        <p>
          Understanding my role is important for knowing who is responsible for what:
        </p>

        <h3>As a Personal Information Controller</h3>
        <p>
          I am the controller for data I collect directly for my own business purposes — such as
          contact information from clients and inquiries from website visitors. I decide how and
          why that data is used, and I am directly accountable for it under RA 10173.
        </p>

        <h3>As a Personal Information Processor</h3>
        <p>
          When I build or operate systems that process the personal data of a client's customers or
          end-users, I act as a <strong>processor</strong> under the client's instruction. In this
          capacity:
        </p>
        <ul>
          <li>
            I process personal data only as directed by the client and only to the extent required
            to deliver the agreed service
          </li>
          <li>
            I do <strong>not</strong> use, analyze, copy, or retain that data for any purpose
            beyond immediate service delivery
          </li>
          <li>
            I do <strong>not</strong> store end-user personal data in any system or storage I own
            or control, beyond what is strictly necessary during active processing
          </li>
          <li>
            Responsibility for obtaining lawful bases for processing (e.g., user consent,
            legitimate interest) rests with the client as the controller
          </li>
          <li>
            Any data processing I perform on behalf of clients is governed by a written agreement
            (service contract, data processing agreement, or NDA) that imposes equivalent
            privacy and security obligations on me
          </li>
        </ul>

        <hr />

        <h2>3. What Information I Collect</h2>

        <h3>From clients and partners (direct collection)</h3>
        <p>
          To engage and deliver services, I collect only the minimum information necessary:
        </p>
        <ul>
          <li>
            <strong>Contact details</strong> — name, email address, phone number, company name, and
            job title, used solely to communicate and manage our working relationship
          </li>
          <li>
            <strong>Project and business information</strong> — requirements, system specifications,
            workflows, and operational context shared to scope and deliver the work
          </li>
          <li>
            <strong>Access credentials</strong> — system logins, API keys, or environment variables
            shared temporarily for integration or deployment work; handled under strict
            confidentiality, stored only in encrypted vaults, and deleted upon project completion
            or upon request
          </li>
          <li>
            <strong>Communications</strong> — emails, messages, and documents exchanged during an
            engagement, retained only for the duration of the project and a reasonable post-project
            period
          </li>
        </ul>
        <p>
          I do <strong>not</strong> collect personal data about my clients' customers, end-users,
          or employees beyond what is incidentally encountered during system access for delivery
          purposes — and even then, I do not record, copy, or retain it.
        </p>

        <h3>From website visitors</h3>
        <ul>
          <li>
            <strong>Inquiry data</strong> — name, email, and message content voluntarily submitted
            via email or any contact form, used only to respond to the inquiry
          </li>
          <li>
            <strong>Server logs</strong> — standard request metadata (IP address, browser type,
            pages visited, referrer) retained temporarily for security and performance monitoring,
            not linked to any individual identity
          </li>
        </ul>
        <p>
          This website does not use cookies, behavioral tracking, or third-party analytics scripts.
          No visitor profiling takes place.
        </p>

        <hr />

        <h2>4. How I Use Information</h2>
        <p>
          Information is used only for the specific purpose it was collected and for no other
          purpose without your knowledge:
        </p>
        <ul>
          <li>
            <strong>Client information</strong> — to scope, deliver, and support the agreed service;
            to communicate about project status; and to meet legal or contractual obligations
          </li>
          <li>
            <strong>Website inquiry data</strong> — to respond to your message and, if an
            engagement follows, to manage the working relationship
          </li>
          <li>
            <strong>Server logs</strong> — to monitor uptime, detect abuse, and maintain site
            security; not used for profiling or marketing
          </li>
        </ul>
        <p>
          I do <strong>not</strong> sell, rent, trade, or monetize any personal data. I do{' '}
          <strong>not</strong> use client or visitor data for advertising, profiling, or any purpose
          unrelated to the service.
        </p>

        <hr />

        <h2>5. Legal Basis for Processing</h2>
        <p>
          Under RA 10173, I process personal information only when at least one of the following
          conditions is met:
        </p>
        <ul>
          <li>
            <strong>Consent</strong> — you have freely, specifically, and informedly given consent
            (e.g., by submitting an inquiry)
          </li>
          <li>
            <strong>Contractual necessity</strong> — processing is necessary to fulfill a service
            agreement or to take pre-contractual steps at your request
          </li>
          <li>
            <strong>Legal obligation</strong> — processing is required to comply with Philippine
            law or a lawful regulatory requirement
          </li>
          <li>
            <strong>Legitimate interests</strong> — processing is necessary for the legitimate
            interests I pursue as a service provider (e.g., maintaining project records, securing
            systems), provided those interests do not override your fundamental rights
          </li>
        </ul>

        <hr />

        <h2>6. Data Minimization</h2>
        <p>
          I apply a strict <strong>data minimization</strong> principle across all engagements:
        </p>
        <ul>
          <li>
            I request and collect only the data that is directly necessary for the task at hand —
            no more
          </li>
          <li>
            When building automation or integration systems, I design pipelines to process and
            pass through data without persisting it in intermediate stores I own or control, unless
            the client's architecture explicitly requires it and it is covered by a written agreement
          </li>
          <li>
            If access to a production environment containing personal data is required for
            troubleshooting or deployment, I use the minimum level of access needed, for the minimum
            time needed, and I do not extract or copy any personal records
          </li>
          <li>
            Sample or test data used during development is anonymized or synthetically generated
            wherever possible; real personal data is never used as development fixtures
          </li>
        </ul>

        <hr />

        <h2>7. Data Retention</h2>
        <p>
          I keep data only for as long as there is a clear, legitimate reason to do so. When that
          reason no longer exists, data is deleted or anonymized promptly.
        </p>

        <h3>Client contact and project information</h3>
        <ul>
          <li>
            Retained for the <strong>duration of the active engagement</strong>, plus up to{' '}
            <strong>12 months</strong> after project completion to cover post-delivery support,
            follow-up questions, and reasonable business record-keeping
          </li>
          <li>
            After this period, project communications and business documents are deleted or
            anonymized unless a longer retention period is required by law
          </li>
        </ul>

        <h3>Access credentials</h3>
        <ul>
          <li>
            Deleted or formally returned to the client <strong>within 7 days of project
            completion</strong>, or immediately upon request — whichever comes first
          </li>
          <li>
            No credentials are retained after the engagement ends, under any circumstance
          </li>
        </ul>

        <h3>End-user and customer personal data (client's data subjects)</h3>
        <ul>
          <li>
            <strong>I do not store this data.</strong> Personal data belonging to a client's
            customers or end-users is processed only in transit — it flows through systems I build
            or operate and is handled per the client's instructions, but it is not copied, logged,
            or persisted in any system I own or control
          </li>
          <li>
            Any incidental access to such data during system maintenance or troubleshooting is
            strictly limited to what is operationally necessary and is not recorded beyond
            system-level logs required for security
          </li>
        </ul>

        <h3>Website inquiry data</h3>
        <ul>
          <li>
            Retained for <strong>up to 6 months</strong> from last contact if no engagement
            follows, then deleted
          </li>
          <li>
            If an engagement results, inquiry data is merged into the project record and follows
            the client project retention schedule above
          </li>
        </ul>

        <h3>Server logs</h3>
        <ul>
          <li>
            Retained for a maximum of <strong>30 days</strong> on a rolling basis for security
            monitoring, then purged automatically
          </li>
        </ul>

        <h3>Legal and financial records</h3>
        <ul>
          <li>
            Invoices, contracts, and tax-related records are retained for the period required by
            applicable Philippine law (generally 10 years under the National Internal Revenue Code)
          </li>
          <li>
            These records contain only business-level information (company name, amounts,
            deliverables) and are not used for any other purpose
          </li>
        </ul>

        <hr />

        <h2>8. Data Sharing and Disclosure</h2>
        <p>
          I do not share personal data with any third party except in the following limited and
          controlled circumstances:
        </p>
        <ul>
          <li>
            <strong>Operational subprocessors</strong> — tools and infrastructure providers I use
            to deliver services (e.g., cloud hosting, encrypted storage, project communication
            tools). These are reputable, security-vetted services bound by their own privacy
            policies, and I share only the minimum data required. I do not pass client or
            end-user personal data to these services beyond what the service architecture requires
          </li>
          <li>
            <strong>Legal obligation</strong> — when disclosure is required by a court order,
            government authority, or applicable Philippine law; I will notify the affected client
            prior to disclosure where legally permitted
          </li>
          <li>
            <strong>Explicit client instruction</strong> — when a client specifically authorizes
            disclosure to a named third party as part of the service delivery
          </li>
        </ul>
        <p>
          I do <strong>not</strong> share data with data brokers, advertising networks, or any
          party for commercial purposes unrelated to service delivery.
        </p>

        <hr />

        <h2>9. Data Security</h2>
        <p>
          I apply security controls proportionate to the sensitivity of the data I handle:
        </p>

        <h3>Technical measures</h3>
        <ul>
          <li>
            <strong>Encryption in transit</strong> — all data transmitted between systems uses
            TLS 1.2 or higher; unencrypted channels are not used for personal data
          </li>
          <li>
            <strong>Encryption at rest</strong> — credentials, keys, and sensitive project files
            are stored in encrypted vaults (e.g., password managers with AES-256 encryption),
            never in plain text or unprotected cloud storage
          </li>
          <li>
            <strong>Access controls</strong> — least-privilege access is applied to all systems;
            shared credentials are rotated after engagement and never reused across clients
          </li>
          <li>
            <strong>Secure deletion</strong> — data scheduled for deletion is wiped securely, not
            simply moved to trash
          </li>
          <li>
            <strong>System isolation</strong> — client environments, credentials, and data are
            isolated from each other; no commingling of client data across projects
          </li>
        </ul>

        <h3>Organizational measures</h3>
        <ul>
          <li>
            All subcontractors involved in client work are bound by written confidentiality
            agreements that impose equivalent data handling obligations
          </li>
          <li>
            Project documentation containing any personal data is access-controlled and not shared
            publicly
          </li>
          <li>
            I conduct periodic reviews of data held and delete anything no longer required
          </li>
        </ul>

        <h3>Breach response</h3>
        <p>
          No system is completely immune to security incidents. In the event of an actual or
          suspected personal data breach that poses a real risk to data subjects, I will:
        </p>
        <ul>
          <li>Contain and assess the breach immediately</li>
          <li>
            Notify affected clients without undue delay and within the timeframe required under RA
            10173 (no later than 72 hours of becoming aware of a qualifying breach)
          </li>
          <li>
            Report to the National Privacy Commission if required under NPC Circular 16-03 or
            subsequent issuances
          </li>
          <li>Document the incident and the corrective actions taken</li>
        </ul>

        <hr />

        <h2>10. Your Rights as a Data Subject</h2>
        <p>
          If I process personal data about you directly (e.g., as a client or website visitor), you
          have the following rights under RA 10173:
        </p>
        <ul>
          <li>
            <strong>Right to be informed</strong> — to know what personal data I hold about you,
            the purpose of processing, and how it is handled
          </li>
          <li>
            <strong>Right to access</strong> — to request a copy of the personal data I hold about
            you in a readable format
          </li>
          <li>
            <strong>Right to rectification</strong> — to have inaccurate or incomplete data
            corrected promptly
          </li>
          <li>
            <strong>Right to erasure or blocking</strong> — to request deletion or restriction of
            your data where the processing has ended or has no remaining lawful basis; I will comply
            unless retention is required by law
          </li>
          <li>
            <strong>Right to object</strong> — to object to processing based on legitimate
            interests, where your specific situation warrants it
          </li>
          <li>
            <strong>Right to data portability</strong> — to receive your data in a structured,
            machine-readable format so you can transfer it to another party
          </li>
          <li>
            <strong>Right to damages</strong> — to seek compensation through the NPC if your data
            privacy rights under RA 10173 have been violated
          </li>
        </ul>
        <p>
          If you are a customer or end-user of one of my clients and wish to exercise your rights
          regarding data that client's system holds about you, please contact that client directly —
          they are the controller of your data, and your rights requests should be directed to them.
        </p>
        <p>
          To exercise rights against data I control directly, contact me at the address in Section
          13. I will acknowledge your request within 5 business days and resolve it within the
          timeframe required by the NPC.
        </p>

        <hr />

        <h2>11. Cookies and Tracking</h2>
        <p>
          This website does not use cookies, advertising pixels, behavioral analytics scripts,
          or any form of cross-site tracking. No visitor data is shared with advertising networks
          or data brokers. The only server-side data collected is standard request log metadata
          (IP address, browser type, requested URL, referrer, timestamp), retained for 30 days
          for security purposes only and not linked to any individual identity.
        </p>

        <hr />

        <h2>12. International Data Transfers</h2>
        <p>
          If a client engagement involves cloud infrastructure or third-party tools hosted outside
          the Philippines, any personal data that flows through those systems is subject to the
          privacy and security requirements of those platforms. I use only reputable providers
          that maintain internationally recognized security standards (e.g., ISO 27001, SOC 2).
        </p>
        <p>
          Where cross-border data transfer is part of a client's system architecture, I disclose
          this clearly during scoping. Clients who operate under GDPR or other cross-border
          frameworks are advised to ensure appropriate transfer mechanisms (e.g., Standard
          Contractual Clauses) are in place at the controller level.
        </p>

        <hr />

        <h2>13. Changes to This Policy</h2>
        <p>
          I may update this Privacy Policy to reflect changes in my services, legal requirements,
          or industry best practices. Material changes — those that affect your rights or how your
          data is handled — will be communicated via an updated effective date at the top of this
          page. For active client engagements, I will provide direct notice of material changes.
          Continued engagement after the updated policy takes effect constitutes acceptance of the
          changes.
        </p>

        <hr />

        <h2>14. Contact and Complaints</h2>
        <p>
          For any privacy-related questions, data subject rights requests, or concerns about how
          your information is handled, please contact:
        </p>
        <p>
          <strong>Service Provider</strong>
          <br />
          Personal Information Controller
          <br />
          <a href="mailto:privacy@rannieollit.com">privacy@rannieollit.com</a>
          <br />
          <a href="https://rannieollit.com">rannieollit.com</a>
        </p>
        <p>
          If you believe your data privacy rights have been violated and I have not resolved your
          concern satisfactorily, you have the right to file a complaint with the{' '}
          <strong>National Privacy Commission (NPC)</strong> of the Philippines:
        </p>
        <p>
          <a href="https://www.privacy.gov.ph" target="_blank" rel="noopener noreferrer">
            www.privacy.gov.ph
          </a>
          <br />
          NPC Complaints and Investigation Division
          <br />
          5th Floor, Delegation Building, PICC Complex, Pasay City, Metro Manila
        </p>
      </Prose>
    </Container>
  )
}
