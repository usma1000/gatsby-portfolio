import React from 'react';
// import { graphql } from 'gatsby';
// import Img from 'gatsby-image';

import Layout from '../components/Layout';
import HomepageHero from '../components/HomeHero';

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "assets/images/cover.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

// eslint-disable-next-line no-unused-vars
const IndexPage = ({ data }) => (
  <>
    <HomepageHero />
    <Layout>
      {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
      <h1>Anand Upadhyay</h1>
    </Layout>
  </>
);

export default IndexPage;
