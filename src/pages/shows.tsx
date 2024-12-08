import { Shows, Layout } from '@components'
import { SEO } from 'src/components/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Fullbloods Shows" />

    <Shows />
  </Layout>
)

export default IndexPage
