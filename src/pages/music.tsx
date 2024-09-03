import { Layout, Releases } from '@components'
import { Stack } from '@styled-system/jsx'

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Music" keywords={['music', 'band', 'kansas city']} /> */}
    <Stack gap="4">
      <h1>Music</h1>
      <Releases />
    </Stack>
  </Layout>
)

export default IndexPage
