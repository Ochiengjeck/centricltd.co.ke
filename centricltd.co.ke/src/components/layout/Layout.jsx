import { Outlet, useLocation } from 'react-router'
import { Helmet } from 'react-helmet-async'
import { SkipLink } from './SkipLink.jsx'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { ScrollManager } from './ScrollManager.jsx'
import { organizationSchema } from '../../lib/jsonld.js'

export function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema())}</script>
      </Helmet>
      <ScrollManager />
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1">
        <div key={location.pathname} className="animate-page-in">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
