import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Seo } from '../lib/seo.jsx'
import { breadcrumbSchema, professionalServiceSchema } from '../lib/jsonld.js'
import { Container } from '../components/ui/Container.jsx'
import { Breadcrumbs } from '../components/ui/Breadcrumbs.jsx'
import { Card } from '../components/ui/Card.jsx'
import { FadeHero } from '../components/ui/FadeHero.jsx'
import { ContactForm } from '../components/forms/ContactForm.jsx'
import { siteMeta } from '../data/siteMeta.js'
import contactPhoto from '../assets/sap/business-one/office-3.jpg'

export function ContactPage() {
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Contact Us', to: '/contact-us/' },
  ]

  return (
    <>
      <Seo
        title="Contact Us"
        description={`Get in touch with Centric Limited. Call ${siteMeta.phone} or visit us at ${siteMeta.address.line1}, ${siteMeta.address.city}.`}
        path="/contact-us/"
        jsonLd={[breadcrumbSchema(breadcrumbItems), professionalServiceSchema()]}
      />

      <FadeHero className="flex min-h-[calc(100vh-5rem)] items-center border-b border-border bg-card">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Contact Us</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Tell us about your business and we'll get back to you with next steps.
            </p>
          </div>
          <img
            src={contactPhoto}
            alt="Centric Limited team member ready to help"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
        </Container>
      </FadeHero>

      <section>
        <Container className="grid gap-10 py-14 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <ContactForm />
          </Card>

          <div className="space-y-6">
            <Card>
              <h2 className="font-heading text-lg font-semibold text-foreground">Reach Us Directly</h2>
              <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    {siteMeta.address.line1}, {siteMeta.address.city}
                    <br />
                    {siteMeta.address.poBox}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <a href={siteMeta.phoneHref} className="hover:text-accent">
                    {siteMeta.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <a href={`mailto:${siteMeta.emails.sales}`} className="hover:text-accent">
                    {siteMeta.emails.sales}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <a href={`mailto:${siteMeta.emails.info}`} className="hover:text-accent">
                    {siteMeta.emails.info}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>{siteMeta.hours}</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
