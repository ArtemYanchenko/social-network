import React from 'react';
import gear from '../../assets/image/gear.png';
import s from './settings.module.css'

export const Settings = () => {
    return (
        <div className={s.musicWrapper}>
            <img src={gear} alt=""/>
            <p>Settings is under development.</p>
        </div>
    );
};
