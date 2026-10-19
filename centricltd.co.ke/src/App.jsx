import { Routes, Route } from 'react-router'
import { Layout } from './components/layout/Layout.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { SapOverviewPage } from './pages/sap/SapOverviewPage.jsx'
import { SolutionsOverviewPage } from './pages/solutions/SolutionsOverviewPage.jsx'
import { ProductDetailPage } from './pages/ProductDetailPage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { InsightsIndexPage } from './pages/insights/InsightsIndexPage.jsx'
import { InsightsPostPage } from './pages/insights/InsightsPostPage.jsx'
import { sapProducts } from './data/sapProducts.js'
import { solutions } from './data/solutions.js'

function findBySlug(items, slug) {
  return items.find((item) => item.slug === slug)
}

function SapProductRoute({ slug }) {
  return (
    <ProductDetailPage
      product={findBySlug(sapProducts, slug)}
      sectionLabel="SAP Products & Services"
      sectionTo="/sap/"
      items={sapProducts}
    />
  )
}

function SolutionRoute({ slug }) {
  return (
    <ProductDetailPage
      product={findBySlug(solutions, slug)}
      sectionLabel="Innovative Solutions"
      sectionTo="/more-solutions/"
      items={solutions}
    />
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/sap/" element={<SapOverviewPage />} />
        <Route path="/sap-s4hana/" element={<SapProductRoute slug="s4hana" />} />
        <Route path="/sap-business-one/" element={<SapProductRoute slug="business-one" />} />
        <Route path="/sap-analytics/" element={<SapProductRoute slug="analytics" />} />
        <Route path="/sap-ariba/" element={<SapProductRoute slug="ariba" />} />
        <Route path="/sap-services/" element={<SapProductRoute slug="services" />} />

        <Route path="/more-solutions/" element={<SolutionsOverviewPage />} />
        <Route path="/aws-cloud-services/" element={<SolutionRoute slug="aws-cloud-services" />} />
        <Route path="/queue-management/" element={<SolutionRoute slug="queue-management" />} />
        <Route path="/sms-services/" element={<SolutionRoute slug="sms-services" />} />
        <Route path="/banking-systems/" element={<SolutionRoute slug="banking-systems" />} />
        <Route path="/revenue-management/" element={<SolutionRoute slug="revenue-management" />} />

        <Route path="/about-us/" element={<AboutPage />} />
        <Route path="/insights/" element={<InsightsIndexPage />} />
        <Route path="/insights/:slug/" element={<InsightsPostPage />} />
        <Route path="/contact-us/" element={<ContactPage />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
