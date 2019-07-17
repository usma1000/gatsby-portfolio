import React from 'react';

import style from './UnderConstruction.module.css';

const UnderConstruction = ({ text }) => (
    <div className={style.container}>
        <p className={style.text}>{text}</p>
    </div>
);

export default UnderConstruction;
