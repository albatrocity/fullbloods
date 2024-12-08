import { Layout, Releases } from '@components'
import { Stack } from '@styled-system/jsx'
import { SEO } from 'src/components/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Fullbloods Music" />
    <Stack gap="4">
      <h1>Music</h1>
      <Releases />
    </Stack>
  </Layout>
)

export default IndexPage
