import React from 'react';
import { Link } from 'gatsby';

import style from './Navbar.module.css';

const Navbar = ({ menuLinks }) => (
  <div className={style.container}>
    <nav>
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navbar;
