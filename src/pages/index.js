import React from 'react';
// import { graphql } from 'gatsby';
// import Img from 'gatsby-image';

import Layout from '../components/Layout';
import UnderConstruction from '../components/UnderConstruction';

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

const IndexPage = ({ data }) => (
  <Layout>
    <UnderConstruction text="This website is under active development." />
    {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
  </Layout>
);

export default IndexPage;
