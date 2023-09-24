import React from 'react';
import s from './navbar.module.css';
import {NavLink} from 'react-router-dom';
import {SvgProfile} from '../../assets/icons/svg-profile';
import {SvgDialogs} from '../../assets/icons/svg-dialogs';
import {SvgUsers} from '../../assets/icons/svg-users';
import {SvgNews} from '../../assets/icons/svg-news';
import {SvgMusic} from '../../assets/icons/svg-music';
import {SvgSettings} from '../../assets/icons/svg-settings';

export const Navbar = () => {
    return (
        <nav className={s.nav + ' ' + s.active}>
            <NavLink className={s.navLink} to={'/profile'}><SvgProfile/> Profile</NavLink>
            <NavLink className={s.navLink} to={'/dialogs'}><SvgDialogs/> Messages</NavLink>
            <NavLink className={s.navLink} to={'/users'}><SvgUsers/> Users</NavLink>
            <NavLink className={s.navLink} to={'/news'}><SvgNews/> News</NavLink>
            <NavLink className={s.navLink} to={'/music'}><SvgMusic/> Music</NavLink>
            <NavLink className={s.navLink} to={'/settings'}><SvgSettings/> Settings</NavLink>
        </nav>
    );
};
