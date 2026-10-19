import { useParams, Navigate } from 'react-router'
import { Seo } from '../../lib/seo.jsx'
import { breadcrumbSchema, articleSchema } from '../../lib/jsonld.js'
import { Container } from '../../components/ui/Container.jsx'
import { Breadcrumbs } from '../../components/ui/Breadcrumbs.jsx'
import { insightsPosts } from '../../data/insightsPosts.js'

export function InsightsPostPage() {
  const { slug } = useParams()
  const post = insightsPosts.find((item) => item.slug === slug)

  if (!post) {
    return <Navigate to="/insights/" replace />
  }

  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Insights', to: '/insights/' },
    { label: post.title, to: `/insights/${post.slug}/` },
  ]

  return (
    <>
      <Seo
        title={post.title}
        description={post.metaDescription}
        path={`/insights/${post.slug}/`}
        image={post.coverImage}
        jsonLd={[
          breadcrumbSchema(breadcrumbItems),
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            path: `/insights/${post.slug}/`,
            date: post.date,
          }),
        ]}
      />

      <section className="border-b border-border bg-card">
        <Container className="py-14">
          <Breadcrumbs items={breadcrumbItems} />
          <time dateTime={post.date} className="mt-4 block text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
          <h1 className="mt-2 max-w-3xl text-3xl font-bold sm:text-4xl">{post.title}</h1>
        </Container>
      </section>

      {post.coverImage && (
        <Container className="py-10">
          <img src={post.coverImage} alt={post.coverImageAlt} className="aspect-[16/9] w-full rounded-xl object-cover" />
        </Container>
      )}

      <section>
        <Container className="max-w-3xl space-y-8 py-10">
          {post.body.map((block, index) => (
            <div key={index}>
              {block.heading && <h2 className="text-xl font-semibold">{block.heading}</h2>}
              <div className="mt-3 space-y-3 text-muted-foreground">
                {block.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}
