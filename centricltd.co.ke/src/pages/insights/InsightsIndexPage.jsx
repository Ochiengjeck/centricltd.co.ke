import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Seo } from '../../lib/seo.jsx'
import { breadcrumbSchema } from '../../lib/jsonld.js'
import { Container } from '../../components/ui/Container.jsx'
import { Breadcrumbs } from '../../components/ui/Breadcrumbs.jsx'
import { Card } from '../../components/ui/Card.jsx'
import { FadeHero } from '../../components/ui/FadeHero.jsx'
import { insightsPosts } from '../../data/insightsPosts.js'
import insightsPhoto from '../../assets/sap/business-one/office-2.jpg'

export function InsightsIndexPage() {
  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Insights', to: '/insights/' },
  ]

  return (
    <>
      <Seo
        title="Insights"
        description="News, technology updates and stories from Centric Limited."
        path="/insights/"
        jsonLd={breadcrumbSchema(breadcrumbItems)}
      />

      <FadeHero className="flex min-h-[calc(100vh-5rem)] items-center border-b border-border bg-card">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Insights</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Technology updates and stories from the Centric Limited team.
            </p>
          </div>
          <img
            src={insightsPhoto}
            alt="Centric Limited team discussing technology insights"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
        </Container>
      </FadeHero>

      <section>
        <Container className="py-14">
          <ul className="grid gap-8 sm:grid-cols-2">
            {insightsPosts.map((post) => (
              <li key={post.slug}>
                <Card className="flex h-full flex-col overflow-hidden p-0">
                  {post.coverImage && (
                    <img src={post.coverImage} alt={post.coverImageAlt} loading="lazy" className="aspect-[16/9] w-full object-cover" />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <time dateTime={post.date} className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <h2 className="mt-2 font-heading text-lg font-semibold text-foreground">{post.title}</h2>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                    <Link
                      to={`/insights/${post.slug}/`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                    >
                      Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
