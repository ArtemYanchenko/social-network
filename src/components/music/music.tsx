import React from 'react';
import gear from '../../assets/image/gear.png';
import s from './music.module.css'

export const Music = () => {
    return (
        <div className={s.musicWrapper}>
            <img src={gear} alt=""/>
            <p>Music page is under development.</p>
        </div>
    );
};
