import awsCover from '../assets/insights/aws-partnership-cover.jpg'
import fioriCover from '../assets/insights/sap-fiori-cover.jpg'
import fioriInline from '../assets/insights/sap-fiori-inline.png'

export const insightsPosts = [
  {
    slug: 'aws-partnership',
    title: 'Centric Partners With AWS To Expand Their Cloud Portfolio In Kenya',
    excerpt:
      'Centric joins the AWS Partner Network, becoming an authorised reseller of AWS cloud offerings to the Kenyan market.',
    date: '2021-05-31',
    coverImage: awsCover,
    coverImageAlt: 'Centric and AWS cloud partnership',
    metaDescription:
      'Centric Limited joins the AWS Partner Network (APN) to expand its cloud services portfolio and bring AWS solutions to businesses in Kenya.',
    body: [
      {
        paragraphs: [
          'Centric now joins the AWS Partner Network to sell AWS cloud offerings to the Kenyan market.',
          'Centric has entered into a partnership agreement with Amazon Web Services, becoming a member of the global AWS Partner Network (APN). Through this collaboration, the company aims to develop market presence and distribute AWS cloud solutions specifically targeting Kenya’s business sector.',
          'The partnership strengthens Centric’s existing Cloud Services offering, giving local organisations an authorised local partner for AWS compute, storage, backup, and analytics services.',
        ],
      },
    ],
  },
  {
    slug: 'sap-fiori-ux',
    title: 'SAP Fiori UX: A Much Timely Design Innovation',
    excerpt:
      'Why SAP Fiori’s user experience redesign matters for SAP customers moving to S/4HANA, and the productivity gains early adopters report.',
    date: '2021-05-31',
    coverImage: fioriCover,
    coverImageAlt: 'Team collaborating around modern business software',
    metaDescription:
      'SAP Fiori brings a modern, device-adaptable user experience to SAP software. Here is why it matters and what results early adopters have seen.',
    body: [
      {
        paragraphs: [
          'I recently came across an interesting thread on Reddit, where the participants would share their various SAP user experiences. While most of the comments regarding the solution’s stability and efficiency were positive, the issue of SAP having a cumbersome user interface (UI) seemed to be quite prevalent. A number of SAP R/3 users on the thread opined that the GUI interface was limited both in its adaptability to devices other than a desktop, and in customization of its UI. I thought that these users would immensely benefit from the novel SAP Fiori user experience (UX).',
          'SAP Fiori is a new UX for SAP software and applications. It is a welcome shift from the traditional UI aimed at maximizing efficiency during use, to a more current UX that puts the end-user at the forefront. According to Thomas Reiss, the Vice President of SAP User Experience Product Management, “Fiori is focused on ensuring consistency across SAP’s portfolio, as well as enhancing the overall user experience by embedding intelligence, natural language interaction, and information from multiple systems to help users get their work done more easily.” This article explores ways in which SAP users in an intelligent enterprise can get the best possible experience interacting with the software while deriving additional value for their organizations.',
        ],
      },
      {
        heading: 'Increased Productivity',
        paragraphs: [
          'SAP Fiori allows users to have fast, direct access to relevant information and applications. It provides a set of apps that are used in regular business functions like work approvals, financial apps, calculation apps, and various self-service apps. Due to its personalization features, users define what apps should be made available on their homepage. This functionality is crucial in helping users decide what needs to be done next, as well as to take quick and informed actions. Early Fiori adopters have reported a reduction in both task completion times and task repetitions per day.',
        ],
      },
      {
        heading: 'Adaptability Across Devices',
        paragraphs: [
          'SAP Fiori users can access business-critical applications on any device without compromises. The main driver of this development is the proliferation of smartphones and tablets, with their easy-to-use and flexible UIs. Rather than provide maximum functionality, there is demand for a comfortable user experience that puts focus on the consumer. SAP Fiori enables multiple device applications that allow users to start a process on their desktop or laptop and continue that process on a smartphone or tablet.',
        ],
        image: fioriInline,
        imageAlt: 'SAP Fiori interface shown across desktop and mobile devices',
      },
      {
        heading: 'Timely Notifications and Analytics',
        paragraphs: [
          'SAP Fiori provides unmatched transparency on items that require a user’s attention. Users are able to handle many different SAP business tasks, such as raising and tracking purchase orders, managing invoicing processes, or watching out for new business opportunities. Fiori apps are categorized into transactional, analytical, and factsheet applications. Transactional apps are used to execute business tasks; factsheets provide a 360-degree contextual view of business objects; and analytical apps analyze and evaluate business KPIs in real time. Alerts on Fiori are also color-coded based on their level of urgency, allowing prompt action by users.',
        ],
      },
      {
        heading: 'Increased User Satisfaction',
        paragraphs: [
          'Lastly, Fiori creates a positive and motivating experience for the user during use, as well as before and after. When SAP Fiori is combined with the power of SAP HANA, it provides exemplary application response and query execution time, improving overall user satisfaction. For SAP users at SKF, a global bearing manufacturing powerhouse, the transition to SAP S/4HANA with Fiori has been transformative for operations: the company reported a 70% reduction in time taken on system-related work, and its error rate in the first month after go-live dropped from 23% to 0%. Such is the power of the SAP Fiori UX, available with S/4HANA deployments today.',
        ],
      },
    ],
  },
]
