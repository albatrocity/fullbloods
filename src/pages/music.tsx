import { Layout, Releases } from '@components'

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Music" keywords={['music', 'band', 'kansas city']} /> */}
    <h1>Music</h1>
    <Releases />

    <h4>EIGHT ONE SIXTY in-studio session</h4>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/36XKO9bXv-Q"
      allowFullScreen={true}
    />
  </Layout>
)

export default IndexPage
