import { siteMeta } from '../data/siteMeta.js'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteMeta.name,
    url: siteMeta.url,
    logo: `${siteMeta.url}/favicon.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteMeta.address.line1,
      addressLocality: siteMeta.address.city,
      addressCountry: siteMeta.address.country,
      postOfficeBoxNumber: siteMeta.address.poBox,
    },
    telephone: siteMeta.phoneHref.replace('tel:', ''),
    email: siteMeta.emails.info,
    sameAs: Object.values(siteMeta.social).filter((url) => url && url !== '#'),
  }
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteMeta.name,
    url: siteMeta.url,
    telephone: siteMeta.phoneHref.replace('tel:', ''),
    email: siteMeta.emails.sales,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteMeta.address.line1,
      addressLocality: siteMeta.address.city,
      addressCountry: siteMeta.address.country,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  }
}

export function serviceSchema({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    url: `${siteMeta.url}${path}`,
    areaServed: ['Kenya', 'East Africa'],
    provider: {
      '@type': 'Organization',
      name: siteMeta.name,
      url: siteMeta.url,
    },
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${siteMeta.url}${item.to}`,
    })),
  }
}

export function articleSchema({ title, description, path, date, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: date,
    url: `${siteMeta.url}${path}`,
    image: image ? `${siteMeta.url}${image}` : undefined,
    author: {
      '@type': 'Organization',
      name: siteMeta.name,
    },
  }
}
