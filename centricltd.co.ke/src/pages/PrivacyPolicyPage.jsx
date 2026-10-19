import { Seo } from '../lib/seo.jsx'
import { breadcrumbSchema } from '../lib/jsonld.js'
import { Container } from '../components/ui/Container.jsx'
import { Breadcrumbs } from '../components/ui/Breadcrumbs.jsx'
import { privacyPolicy } from '../data/privacyPolicy.js'

export function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Privacy Policy', to: '/privacy-policy/' },
  ]

  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How Centric Limited handles information collected through centricltd.co.ke."
        path="/privacy-policy/"
        jsonLd={breadcrumbSchema(breadcrumbItems)}
      />

      <section className="border-b border-border bg-card">
        <Container className="py-14">
          <Breadcrumbs items={breadcrumbItems} />
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: {privacyPolicy.updated}</p>
        </Container>
      </section>

      <section>
        <Container className="max-w-3xl space-y-10 py-14">
          {privacyPolicy.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-muted-foreground">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}
