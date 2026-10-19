const sapLinks = [
  { label: 'SAP S/4HANA', to: '/sap-s4hana/' },
  { label: 'SAP Business One', to: '/sap-business-one/' },
  { label: 'SAP Analytics', to: '/sap-analytics/' },
  { label: 'SAP Ariba', to: '/sap-ariba/' },
  { label: 'SAP Services', to: '/sap-services/' },
]

const solutionLinks = [
  { label: 'Cloud Services', to: '/aws-cloud-services/' },
  { label: 'Queue Management', to: '/queue-management/' },
  { label: 'SMS Services', to: '/sms-services/' },
  { label: 'Banking Systems', to: '/banking-systems/' },
  { label: 'Revenue Management', to: '/revenue-management/' },
]

export const mainNav = [
  { label: 'Home', to: '/' },
  { label: 'SAP Products & Services', to: '/sap/', children: sapLinks },
  { label: 'Innovative Solutions', to: '/more-solutions/', children: solutionLinks },
  { label: 'Insights', to: '/insights/' },
  { label: 'About Us', to: '/about-us/' },
  { label: 'Contact Us', to: '/contact-us/' },
]

export const footerColumns = [
  { heading: 'SAP Products & Services', links: sapLinks },
  { heading: 'Innovative Solutions', links: solutionLinks },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', to: '/about-us/' },
      { label: 'Our Clients', to: '/about-us/#clients' },
      { label: 'Testimonials', to: '/about-us/#testimonials' },
      { label: 'Contact Us', to: '/contact-us/' },
      // Leadership Team intentionally omitted: no bios/names/photos exist
      // anywhere on the live site to port. Add back once real content exists.
    ],
  },
]
