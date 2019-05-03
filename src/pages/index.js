import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';

export const query = graphql`
  query {
    file(relativePath: { eq: "assets/images/cover.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Img fluid={data.file.childImageSharp.fluid} />
  </Layout>
);

export default IndexPage;
