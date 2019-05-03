module.exports = {
  siteMetadata: {
    title: 'Anand Upadhyay Portfolio',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/logos/icon.png',
        injectHTML: true,
        // WebApp Manifest Configuration
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
        name: 'src',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
