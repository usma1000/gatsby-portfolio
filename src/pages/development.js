import React from 'react';
// import { graphql } from 'gatsby';
// import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Terminal from '../components/Terminal';

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

const DevelopmentPage = ({ data }) => (
    <Layout>
        <Terminal text="Hello World..." />
        {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
    </Layout>
);

export default DevelopmentPage;
