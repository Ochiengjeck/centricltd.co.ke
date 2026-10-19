import cloudIllustration from '../assets/solutions/illustration-cloud.png'
import queueIllustration1 from '../assets/solutions/illustration-queue-1.png'
import queueIllustration2 from '../assets/solutions/illustration-queue-2.png'
import smsIllustration from '../assets/solutions/illustration-sms.png'
import revenueManagementIllustration from '../assets/solutions/illustration-revenue-management.png'
import s3Illustration from '../assets/aws/illustration-s3.png'
import backupIllustration from '../assets/aws/illustration-backup.png'
import mediaIndustry from '../assets/aws/media-industry.jpg'
import financeIndustry from '../assets/aws/finance-industry.jpg'
import bankingIcon from '../assets/solutions/icon-banking-systems.png'

/**
 * One entry per Innovative Solutions page, rendered by the shared SolutionPage
 * template. Adding a 6th solution later is a new entry here, not a new component.
 */
export const solutions = [
  {
    slug: 'aws-cloud-services',
    path: '/aws-cloud-services/',
    name: 'Cloud Services',
    shortDescription:
      'AWS consulting, managed services, backup, analytics and desktop-as-a-service for growing enterprises.',
    tagline: 'Design, migrate and manage your AWS cloud with confidence',
    metaDescription:
      'AWS cloud services from Centric Limited: managed services, backup & storage, business intelligence and Amazon WorkSpaces.',
    heroImage: cloudIllustration,
    heroImageAlt: 'Cloud services illustration',
    sections: [
      {
        heading: 'AWS Managed Services',
        paragraphs: [
          'Creating, deploying, and managing cloud services can be a daunting task. Centric manages your AWS services so you can focus on running and growing your enterprise — with scalable resourcing, round-the-clock monitoring, standby recovery support, and AWS security best practice.',
          'Our team is cross-functional: AWS-certified engineers, solution architects, and support staff with deep combined experience in DevOps, migration, and AWS operations.',
        ],
      },
      {
        heading: 'Backup & Storage',
        paragraphs: [
          'Centric has joined hands with AWS to help you protect your data with industry-leading durability and security via cloud backup — scalable, cost-effective, and built to satisfy security requirements for military and global-bank-grade organisations.',
        ],
        bullets: [
          'Amazon S3 — object storage across Standard, Infrequent Access and Glacier tiers',
          'Amazon S3 Glacier — low-cost long-term archival with 99.999999999% ("11 nines") durability, data spread across 3+ Availability Zones',
          'AWS Storage Gateway — integrates on-premise infrastructure with AWS cloud storage',
          'AWS Backup — automated, centrally managed backups',
        ],
        image: s3Illustration,
        imageAlt: 'Amazon S3 storage illustration',
      },
      {
        heading: 'Relevant for Media & Finance',
        paragraphs: [
          'Media companies generate large volumes of video and footage that need durable, accessible storage — Amazon S3 and S3 Glacier back it up and archive it safely. Financial institutions retain large amounts of sensitive and historical data, which S3 and Glacier store securely and archive durably.',
        ],
        image: mediaIndustry,
        imageAlt: 'Media production team at work',
      },
      {
        heading: 'Business Intelligence — Amazon QuickSight',
        paragraphs: [
          'Amazon QuickSight is a cloud-based BI solution that helps you offer insight to everyone in your enterprise — build and publish interactive dashboards accessible from any device, or embed them into your applications, portals, and websites.',
        ],
        bullets: [
          'Low cost, pay-as-you-go pricing',
          'Scales from 10 to 10,000 users without coding',
          'Embeddable analytics in your own applications',
          'ML-driven insight into hidden trends and business drivers',
        ],
        image: financeIndustry,
        imageAlt: 'Finance team reviewing dashboards',
      },
      {
        heading: 'Amazon WorkSpaces',
        paragraphs: [
          'Deploy Windows or Linux virtual desktops on demand to any supported device, anywhere — scaling from a handful to thousands of desktops in minutes. Ideal for remote and contract staff, software test/development environments, and fast regional expansion without hardware investment.',
        ],
        image: backupIllustration,
        imageAlt: 'Cloud backup illustration',
      },
    ],
  },
  {
    slug: 'queue-management',
    path: '/queue-management/',
    name: 'Queue Management',
    shortDescription:
      'Streamline customer flow, on-premises ordering and staff performance across healthcare, public sector, finance and retail.',
    tagline: 'Shorter queues, better-informed staff, happier customers',
    metaDescription:
      'Queue management systems from Centric Limited for healthcare, public sector, finance and retail organisations.',
    heroImage: queueIllustration1,
    heroImageAlt: 'Queue management illustration',
    sections: [
      {
        heading: 'What it does',
        paragraphs: [
          'Centric’s queue management solutions streamline customer flow, on-premises ordering, and staff performance to deliver a better client experience, across healthcare, public sector, finance, and retail organisations.',
        ],
      },
      {
        heading: 'Typical capabilities',
        paragraphs: [],
        bullets: [
          'Ticket and virtual queueing at branches and service points',
          'Digital signage and audio call-forward for ticket numbers',
          'SMS / mobile queue-position notifications',
          'Branch and counter performance reporting (wait times, throughput)',
          'Appointment and pre-booking integration to reduce walk-in pressure',
        ],
        image: queueIllustration2,
        imageAlt: 'Customer being served at a counter',
      },
      {
        heading: 'Why it matters, by industry',
        paragraphs: [],
        bullets: [
          'Healthcare — shorter, calmer waiting rooms and fairer patient call order',
          'Public sector — predictable, auditable service at high-volume counters',
          'Finance — faster branch throughput, less in-branch congestion',
          'Retail — smoother in-store service during peak periods',
        ],
      },
    ],
  },
  {
    slug: 'sms-services',
    path: '/sms-services/',
    name: 'SMS Services',
    shortDescription:
      'Bulk SMS, PRSP, short codes and USSD solutions for fast, scalable customer engagement.',
    tagline: 'Reach customers instantly, at scale',
    metaDescription:
      'Bulk SMS, short code and USSD services from Centric Limited for customer engagement at scale.',
    heroImage: smsIllustration,
    heroImageAlt: 'SMS services illustration',
    sections: [
      {
        heading: 'Bulk SMS and PRSP Services',
        paragraphs: [
          'Centric’s SMS gateway helps you send effective text communication to customers when they need it, with SMS APIs supporting two-way chat via shortcode, USSD, and bulk messaging.',
        ],
        bullets: [
          'Custom sender-ID branding instead of a plain number',
          'Website integration and contact-list organisation',
          'Two-way messaging — recipients can reply',
          'Scheduled, automated sending with duplicate-SMS prevention',
          'Message personalisation with recipient names',
        ],
      },
      {
        heading: 'Short Codes',
        paragraphs: [
          'Shared shortcodes are used by multiple companies at normal mobile-network rates with no extra charges. Dedicated shortcodes are reserved for a single company, with premium-rate options that can generate additional revenue.',
        ],
        bullets: [
          'Customer service inquiries and feedback gathering',
          'Promotional campaigns and event/service registration',
          'Banking request processing',
          'Mobile coupons, discount vouchers, and surveys',
        ],
      },
      {
        heading: 'USSD',
        paragraphs: [
          'Dedicated USSD assigns a 3-digit code (e.g. *789#) to a single company at postpaid rates, free to the customer. Shared USSD uses a multi-company code (e.g. *789*55#) with prepaid customer charges.',
        ],
        bullets: [
          'Quick menu creation and customisation',
          '4G LTE compliant with 2G/3G fallback',
          'Interactive, scalable navigation menus',
          'SMS and voice integration options',
        ],
      },
    ],
  },
  {
    slug: 'banking-systems',
    path: '/banking-systems/',
    name: 'Banking Systems',
    shortDescription:
      'Core banking, loan management and mobile banking platforms, via our Fern Software partnership.',
    tagline: 'Go online. Manage loans. Track every transaction, securely.',
    metaDescription:
      'Banking systems from Centric Limited and Fern Software: Abacus core banking, Faasbank loan management, and Baytree mobile banking.',
    heroImage: bankingIcon,
    heroImageAlt: 'Banking systems icon',
    sections: [
      {
        heading: 'Fern Software',
        paragraphs: [
          'Fern Software has 41 years of experience providing banking systems for banks, microfinance institutions, and loan organisations worldwide. Centric Limited has partnered with Fern Software to bring financial institutions online — managing loan portfolios and tracking client/business transactions, within tight security.',
        ],
      },
      {
        heading: 'Abacus — Core Banking',
        paragraphs: [
          'A modern, fully integrated core banking solution with multi-lingual support, client-centric customer management, and 100+ built-in reports plus BizNet financial reporting.',
        ],
        bullets: [
          'ATM Management, Multi-Branch, Online & Retail Banking',
          'Compliance Tracking and Risk Management',
          'Corporate and Private Banking',
          'Credit Card Management and Transaction Monitoring',
        ],
      },
      {
        heading: 'Faasbank — Loan Management',
        paragraphs: [
          'A flexible loan-management platform for tracking client and business transactions across varied credit-service scenarios, with rich visual reporting via FaaSBank BI dashboards.',
        ],
        bullets: [
          'Accounting Management and Amortization Schedules',
          'Loan Processing and Borrower Management',
          'Collateral Tracking and Collections Management',
          'Document Management',
        ],
      },
      {
        heading: 'Baytree — Mobile Banking Platform',
        paragraphs: [
          'A standard enterprise platform merging borrower management with marketing and service, operable via a smartphone app for iOS and Android.',
        ],
        bullets: [
          'Send and receive texts with borrowers',
          'Digital signature verification',
          'Web-based — Windows, Mac, iOS, Android, Chrome OS',
          'Scales to 500,000+ concurrent users',
          'Automated workflows and custom fields/layout',
        ],
      },
      {
        heading: 'Mobile Apps',
        paragraphs: [
          'Custom mobile banking apps (iOS and Android) that help borrowers complete applications faster, with secure sign-in via facial recognition, fingerprint, or PIN, and push-notification messaging for instant replies.',
        ],
      },
    ],
  },
  {
    slug: 'revenue-management',
    path: '/revenue-management/',
    name: 'Revenue Management Systems',
    shortDescription:
      'A secure, multichannel electronic payment gateway for revenue collection and business payments.',
    tagline: 'One gateway for every payment channel',
    metaDescription:
      'Revenue management and electronic payment gateway solutions from Centric Limited.',
    heroImage: revenueManagementIllustration,
    heroImageAlt: 'Revenue management systems illustration',
    // This page did not exist on the live site — only an anchor section on
    // /more-solutions/#rms. Built here as a real page from that content. Use
    // /revenue-management/, not /revenue-management-systems/ (that slug 301s
    // to an image file on the live site).
    sections: [
      {
        heading: 'A secure, multichannel payment gateway',
        paragraphs: [
          'Our revenue management solution provides an electronic payment gateway for revenue collection and business payment management — a secure, multichannel, high-volume transactional gateway that’s highly scalable with ready-to-integrate APIs for backend systems including ERPs and POS platforms.',
          'The platform supports both high-value and micropayments via mobile, web, banks, and agency networks.',
        ],
        bullets: [
          'Fines, levy, parking, transport and tax payments',
          'Mobile payments (USSD, apps, NFC) and card payments',
          'Web and bank payments',
          'Custom e-wallet (mobile and card)',
          'Business licence payments',
        ],
      },
    ],
  },
]
