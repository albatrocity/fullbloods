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
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `./tsconfig.json`,
        extensions: ['.ts', '.tsx', '.mjs'],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     icon: 'src/images/icon.png',
    //   },
    // },
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
        name: `src`,
        path: `${__dirname}/src`,
      },
      __key: 'pages',
    },
    `gatsby-transformer-remark`,
  ],
}

export default config
