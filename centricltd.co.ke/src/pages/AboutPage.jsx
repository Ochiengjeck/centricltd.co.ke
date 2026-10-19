import { Seo } from '../lib/seo.jsx'
import { breadcrumbSchema } from '../lib/jsonld.js'
import { Container } from '../components/ui/Container.jsx'
import { Breadcrumbs } from '../components/ui/Breadcrumbs.jsx'
import { SectionHeading } from '../components/ui/SectionHeading.jsx'
import { LogoCloud } from '../components/ui/LogoCloud.jsx'
import { TestimonialCard } from '../components/ui/TestimonialCard.jsx'
import { CTASection } from '../components/ui/CTASection.jsx'
import { FadeHero } from '../components/ui/FadeHero.jsx'
import { aboutContent } from '../data/aboutContent.js'
import { clients } from '../data/clients.js'
import { testimonials } from '../data/testimonials.js'

export function AboutPage() {
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about-us/' },
  ]

  return (
    <>
      <Seo
        title="About Us"
        description="Centric Limited is committed to ICT leadership in East Africa — learn about our culture, talent and clients."
        path="/about-us/"
        jsonLd={breadcrumbSchema(breadcrumbItems)}
      />

      <FadeHero className="flex min-h-[calc(100vh-5rem)] items-center border-b border-border bg-card">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{aboutContent.intro.heading}</h1>
            {aboutContent.intro.paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-4 text-lg text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          {aboutContent.illustration && (
            <img
              src={aboutContent.illustration}
              alt={aboutContent.illustrationAlt}
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          )}
        </Container>
      </FadeHero>

      {aboutContent.sections.map((section, index) => (
        <section key={section.heading} className={index % 2 === 0 ? 'bg-muted/40' : ''}>
          <Container className="py-14">
            <h2 className="text-2xl font-semibold">{section.heading}</h2>
            <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section id="clients">
        <Container className="py-14">
          <SectionHeading eyebrow="Who have we worked with?" title="Our Clients" />
          <div className="mt-8">
            <LogoCloud clients={clients} />
          </div>
        </Container>
      </section>

      <section id="testimonials" className="bg-muted/40">
        <Container className="py-14">
          <SectionHeading title="What do our clients say about us?" align="center" />
          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Want to work with us?" description="We'd love to hear about your business challenges." />
    </>
  )
}
