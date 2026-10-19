import s4hanaHero from '../assets/sap/s4hana/s4hana-hero.png'
import s4hanaOffice from '../assets/sap/s4hana/s4hana-office.jpg'
import businessOneHero from '../assets/sap/business-one/business-one-hero.png'
import businessOneDevice from '../assets/sap/business-one/business-one-device.png'
import businessOneMobile from '../assets/sap/business-one/business-one-mobile.png'
import businessOnePurchasing from '../assets/sap/business-one/business-one-purchasing.png'
import aribaHero from '../assets/sap/ariba/ariba-hero.png'
import aribaOffice1 from '../assets/sap/ariba/office-1.jpg'
import aribaOffice3 from '../assets/sap/ariba/office-3.jpg'
import aribaOffice4 from '../assets/sap/ariba/office-4.jpg'

/**
 * One entry per SAP product/services page, rendered by the shared SapProductPage
 * template. Adding a 6th product later is a new entry here, not a new component.
 */
export const sapProducts = [
  {
    slug: 's4hana',
    path: '/sap-s4hana/',
    name: 'SAP S/4HANA',
    shortDescription:
      'An intelligent ERP that runs on the in-memory SAP HANA database, delivering real-time processing and a simplified data model.',
    tagline: 'Intelligent ERP, built to help you adapt and scale',
    metaDescription:
      'SAP S/4HANA implementation and support from Centric Limited: intelligent ERP across sales, logistics, production, finance and HR.',
    heroImage: s4hanaHero,
    heroImageAlt: 'SAP S/4HANA device mockup',
    sections: [
      {
        heading: 'What is SAP S/4HANA?',
        paragraphs: [
          'SAP S/4HANA is an intelligent ERP, enabling companies to deliver the ultimate customer experience through the power of the intelligent enterprise. An intelligent ERP makes it possible for companies to adapt and scale with the agility needed to stay at the forefront of ever-shifting markets.',
          'It transforms business processes with intelligent automation and runs on SAP HANA — a market-leading in-memory database that offers real-time processing speeds and a dramatically simplified data model. We offer two deployment options: SAP S/4HANA (on-premise or partner cloud) for complete control over customer-specific processes, or SAP S/4HANA Cloud for the industry capabilities companies need with the benefits of the cloud.',
        ],
        bullets: [
          '50% reduction in data footprint',
          '100x faster reporting for agile decision making',
          'Embedded AI technology for improved insight and performance',
          'Real-time advanced analytics for forecasting',
          'Consumer-grade UX across every device',
        ],
        image: s4hanaOffice,
        imageAlt: 'Team reviewing business data on a laptop',
      },
      {
        heading: 'CRM & Sales and Distribution',
        paragraphs: [
          'Covers the key sales processes: finding and qualifying new customers, order processing, promotions, delivery documentation, invoicing, stock control, and contract-specific pricing.',
        ],
        bullets: [
          'Pre-sale research and offer creation',
          'Order processing with automatic delivery/sales-order creation',
          'Promotions and pricing/discount management',
          'Delivery and invoicing documentation',
          'Stock control and order blocking',
        ],
      },
      {
        heading: 'Logistics',
        paragraphs: ['Inventory and warehouse management from supplier selection through to returns.'],
        bullets: [
          'Supplier selection and supply contracts',
          'Stock processing and batch/serial number management',
          'Warehouse delivery and shipping',
          'Stock monitoring and material movements',
          'Supplier returns',
        ],
      },
      {
        heading: 'Production Management',
        paragraphs: [
          'Ties customer orders, supply contracts, and material-resource planning into full logistics management, tracking production orders from creation to goods receipt.',
        ],
        bullets: [
          'Finished-product, scrap, and in-progress quantities',
          'Production costs and resource usage',
          'Automatic material insertion and goods receipt',
          'Capacity release and cost/availability updates',
        ],
      },
      {
        heading: 'Finance',
        paragraphs: [
          'Fully integrated financial and management accounting with double-entry bookkeeping to national and international standards.',
        ],
        bullets: [
          'General Ledger, Accounts Payable/Receivable, Asset Accounting',
          'Bank Accounting and financial reporting',
          'Cost centers and profitability analysis',
          'Budget planning and control',
        ],
      },
      {
        heading: 'Human Resources Management',
        paragraphs: [
          'A full HCM suite covering personnel administration, time management, payroll, and talent/performance evaluation at individual and team level.',
        ],
        bullets: [
          'Organizational management and personnel administration',
          'Recruitment and talent management',
          'Compensation, benefits, and time management',
          'Learning management and payroll',
        ],
      },
      {
        heading: 'Deployment Methodology',
        paragraphs: [
          'Implemented using SAP Activate, SAP’s internationally standardized methodology for fast, efficient rollouts, across four phases.',
        ],
        bullets: ['Prepare', 'Explore', 'Realize', 'Deploy'],
      },
    ],
  },
  {
    slug: 'business-one',
    path: '/sap-business-one/',
    name: 'SAP Business One',
    shortDescription:
      'An affordable, comprehensive ERP for small businesses — sales, financials, purchasing and inventory in one place.',
    tagline: 'A digitized ERP solution built for growing businesses',
    metaDescription:
      'SAP Business One from Centric Limited: affordable ERP for small businesses covering accounting, sales, purchasing and inventory.',
    heroImage: businessOneHero,
    heroImageAlt: 'SAP Business One running across desktop and mobile devices',
    sections: [
      {
        heading: 'Run your business with a digitized ERP solution',
        paragraphs: [
          'Gain a competitive advantage by implementing robust business processes that adapt to market changes and anticipate trends. Connect business functions so the entire business runs more smoothly, with natural cross-departmental collaboration. Get easy access to data through analytics and reports to make real-time, informed decisions.',
          'Digital transformation is built on Analytics, Big Data, Cloud Technologies, and Mobile Technologies — giving your company the ability to change business models and create new products and services.',
        ],
        image: businessOneDevice,
        imageAlt: 'SAP Business One device mockup',
      },
      {
        heading: 'Financial Management',
        paragraphs: [
          'Improve margins, reduce errors, and drive more profitable decisions with a complete set of tools for streamlined financial operations.',
        ],
        bullets: [
          'Accounting — automated journal entries, accounts receivable/payable',
          'Controlling — cash flow, fixed assets, budgets, project costs',
          'Banking and reconciliation',
          'Financial reporting and analysis from real-time data',
        ],
      },
      {
        heading: 'Sales & Customer Management',
        paragraphs: [
          'Oversee the entire sales process and customer lifecycle — from initial contact to final sale, after-sales service, and support.',
        ],
        bullets: [
          'Sales and opportunity management — leads and opportunities through quotes, sales orders and the pipeline to close',
          'Marketing campaign management',
          'Centralized customer management',
          'Service management for warranty contracts and agreements',
          'Mobile sales on any device',
        ],
        image: businessOneMobile,
        imageAlt: 'SAP Business One on a mobile device',
      },
      {
        heading: 'Purchasing & Inventory',
        paragraphs: [
          'Optimize purchasing practices and control costs across the complete order-to-pay cycle, from requisition to payment.',
        ],
        bullets: [
          'Procurement — requisitions, purchase orders, goods receipts, returns',
          'Centralized master data management',
          'Real-time warehouse and accounting integration',
          'Accounts payable with PO-referenced invoicing',
        ],
        image: businessOnePurchasing,
        imageAlt: 'SAP Business One purchasing module device mockup',
      },
    ],
  },
  {
    slug: 'analytics',
    path: '/sap-analytics/',
    name: 'SAP Analytics Cloud',
    shortDescription:
      'Business intelligence, augmented analytics, predictive analytics and planning in a single cloud solution.',
    tagline: 'Discover, analyse, plan and predict in one experience',
    metaDescription:
      'SAP Analytics Cloud from Centric Limited: business intelligence, augmented and predictive analytics, and planning in one platform.',
    heroImage: null,
    sections: [
      {
        heading: 'What is SAP Analytics Cloud?',
        paragraphs: [
          'SAP Analytics Cloud combines BI, augmented and predictive analytics, and planning into one cloud environment — the analytics layer of SAP’s Business Technology Platform. AI, machine learning and natural-language-processing-powered augmented analytics are built directly into BI and planning workflows.',
        ],
        bullets: [
          'Discover, analyse, plan and predict in one experience across all devices',
          'End-to-end decisions with data management and analytics together',
          'Scales across strategic, operational, and tactical decision types',
        ],
      },
      {
        heading: 'Business Intelligence',
        paragraphs: [
          'Explore data across the organisation and deliver insights at the point of decision with intuitive self-service analytics, with built-in collaboration for engagement and accountability.',
        ],
      },
      {
        heading: 'Planning',
        paragraphs: [
          'Link and create financial and operational plans seamlessly in one solution. Plan, analyse and simulate directly within the enterprise solution, and collaborate on plans in context for increased accountability.',
        ],
      },
      {
        heading: 'Augmented Analytics',
        paragraphs: [
          'Make smarter, faster decisions with AI-driven insights — ask questions conversationally and get answers explained in natural language, while automated machine learning detects the drivers behind a KPI.',
        ],
      },
    ],
  },
  {
    slug: 'ariba',
    path: '/sap-ariba/',
    name: 'SAP Ariba',
    shortDescription:
      'E-procurement and supply-chain cloud solutions covering 30+ processes from source to pay.',
    tagline: 'Spend management that ties your supply chain together',
    metaDescription:
      'SAP Ariba from Centric Limited: e-procurement, strategic sourcing, supplier collaboration and spend analysis.',
    heroImage: aribaHero,
    heroImageAlt: 'SAP Ariba device mockup',
    sections: [
      {
        heading: 'SAP Ariba',
        paragraphs: [
          'SAP Ariba intelligent spend management ties together more than 30 processes with comprehensive transaction data, delivering efficiency, accuracy, and control every step of the way, from source to pay — integrated with SAP S/4HANA for cost accounting, payments, and in-depth spend analysis.',
        ],
        bullets: [
          'Ensure negotiated savings reach your bottom line',
          'Guide employees to buy from the right suppliers at the right prices',
          'Manage cost accounting and payments efficiently',
        ],
        image: aribaOffice1,
        imageAlt: 'Procurement team reviewing documents',
      },
      {
        heading: 'Solutions for Direct Spend',
        paragraphs: [
          'End-to-end digital procurement integrated with product design and R&D through manufacturing execution and delivery, integrating seamlessly with PLM, ERP, and SAP Integrated Business Planning.',
        ],
        bullets: [
          'Faster time to market and time to volume',
          'Quick, accurate sourcing across multi-level BOMs',
          'Effective supplier collaboration',
          'Stronger compliance and complete supply-chain visibility',
        ],
      },
      {
        heading: 'Guided Buying',
        paragraphs: [
          'Included with SAP Ariba Buying and Buying and Invoicing, guided buying helps employees buy smarter — following procurement guidelines and best practice without needing to know them before they shop.',
        ],
        image: aribaOffice3,
        imageAlt: 'Team collaborating around a laptop',
      },
      {
        heading: 'Spend Analysis',
        paragraphs: [
          'SAP Ariba gathers spend data from wherever it lives, classifies it to company and industry standards, and enriches it with Dun & Bradstreet market intelligence for insightful analysis of buying behaviour, spend concentration, and savings leakage — benchmarked against industry peers.',
        ],
      },
    ],
  },
  {
    slug: 'services',
    path: '/sap-services/',
    name: 'SAP Implementation Services & Support',
    shortDescription:
      'Implementation, customization and support services from Centric’s SAP partner team.',
    tagline: 'Your trusted advisor for SAP implementation and support',
    metaDescription:
      'SAP implementation services and support from Centric Limited, an SAP East Africa partner.',
    heroImage: aribaOffice4,
    heroImageAlt: 'Centric support team assisting a client with an SAP implementation',
    // This page did not exist on the live site — its nav link pointed at a dead
    // `/#sap-support` anchor. Built here as a real page from the overview content.
    sections: [
      {
        heading: 'SAP Implementation Services & Support',
        paragraphs: [
          'We help customers of all sizes, across all industries, take advantage of SAP’s innovative solutions to transform and simplify their business. As an SAP partner, Centric Limited has the expertise to maintain the high levels of satisfaction, solution quality, and service delivery that customers expect.',
          'Centric Limited plays a critical role by building, extending, customising, and enriching SAP’s technology platforms to deliver tailored solutions that meet the exact needs of customers — bringing a unique blend of expertise, skills, and services to act as your trusted advisor today and into the future.',
        ],
        bullets: [
          'SAP implementation across S/4HANA, Business One, Analytics, and Ariba',
          'System customisation and platform extension',
          'Ongoing solution support and quality assurance',
          'SAP Activate-based project delivery',
        ],
      },
    ],
  },
]
