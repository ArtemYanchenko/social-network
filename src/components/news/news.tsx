import React from 'react';
import s from './news.module.css';
import gear from '../../assets/image/gear.png';

export const News = () => {
    return (
        <div className={s.newWrapper}>
            <img src={gear} alt=""/>
            <p>News page is under development.</p>
        </div>
    );
};

