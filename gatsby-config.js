module.exports = {
  siteMetadata: {
    title: 'Anand Upadhyay Portfolio',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Development',
        link: '/development',
      },
    ],
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
    }, {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-144013936-1',
        head: true,
        anonymize: false,
        respectDNT: true,
        exclude: ['/preview/**'],
        pageTransitionDelay: 500,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-transition-link',
  ],
};
