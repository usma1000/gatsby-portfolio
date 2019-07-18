import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import UnderConstruction from './UnderConstruction';
import Navbar from './Navbar';
import './globals.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          } 
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          {/* eslint-disable-next-line max-len */}
          <link href="https://fonts.googleapis.com/css?family=Montserrat:600|Source+Code Pro:400|Lora:400" rel="stylesheet" />
        </Helmet>
        <div>
          <UnderConstruction text="This website is under active development." />
          <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
          {children}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
