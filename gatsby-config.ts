import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Fullbloods`,
    siteUrl: `https://www.fullbloods.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  jsxRuntime: 'automatic',
  plugins: [
    `gatsby-plugin-postcss`,
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `./tsconfig.json`,
        extensions: ['.ts', '.tsx', '.mjs'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/playing_it_safe_cover.jpg',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `releases`,
        path: `${__dirname}/src/releases`,
      },
      __key: 'releases',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `lyrics`,
        path: `${__dirname}/src/lyrics`,
      },
      __key: 'lyrics',
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
      },
    },
  ],
}

export default config
