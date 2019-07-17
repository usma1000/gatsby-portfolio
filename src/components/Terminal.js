import React from 'react';

import style from './Terminal.module.css';

const Terminal = ({ text }) => (
    <div className={style.terminal}>
        <p className={style.text}>{text}</p>
    </div>
);

export default Terminal;
