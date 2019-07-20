import React from 'react';
// import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import style from './Navbar.module.css';

const Navbar = ({ menuLinks }) => (
  <nav role="navigation">
    <ul className={style.list}>
      {menuLinks.map(link => (
        <li key={link.name}>
          <AniLink className={style.link} to={link.link} paintDrip duration={0.5}>
            {link.name}
          </AniLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
