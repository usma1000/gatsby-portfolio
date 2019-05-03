import React from 'react';
import styles from './image.module.css';

import SVG from '../assets/images/gatsby+storybook.svg';

const Image = () => (
  <img src={SVG} className={styles.base} alt="image" />
);

export default Image;
