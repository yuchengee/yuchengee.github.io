import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import BlogSection from './_components/BlogSection'
import FeaturesSection from './_components/FeaturesSection'
import HomepageProject from './_components/ProjectSection'

export default function Home(): JSX.Element {
  const {
    siteConfig: { customFields, tagline },
  } = useDocusaurusContext()
  const { description } = customFields as { description: string }

  return (
    <Layout title={tagline} description={description}>
      <main>
        
        <div className="container-wrapper">
          <HomepageProject />
          <BlogSection />
          {/* <Hero /> */}
          <FeaturesSection />
        </div>
        
      </main>
    </Layout>
  )
}
