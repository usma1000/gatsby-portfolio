import React from 'react';
// import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import style from './Navbar.module.css';

const Navbar = ({ menuLinks }) => (
  <div className={style.container}>
    <nav>
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <AniLink to={link.link} paintDrip duration={0.5}>
              {link.name}
            </AniLink>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navbar;
