import React from 'react';
import classes from './navbar.module.css';
import {NavLink} from 'react-router-dom';
import {SvgProfile} from '../../assets/icons/svg-profile';
import {SvgDialogs} from '../../assets/icons/svg-dialogs';
import {SvgUsers} from '../../assets/icons/svg-users';
import {SvgNews} from '../../assets/icons/svg-news';
import {SvgMusic} from '../../assets/icons/svg-music';
import {SvgSettings} from '../../assets/icons/svg-settings';

export const Navbar = () => {
    return (
        <nav className={classes.nav + ' ' + classes.active}>
            <NavLink className={classes.navLink} to={'/profile'}><SvgProfile/> Profile</NavLink>
            <NavLink className={classes.navLink} to={'/dialogs'}><SvgDialogs/> Messages</NavLink>
            <NavLink className={classes.navLink} to={'/users'}><SvgUsers/> Users</NavLink>
            <NavLink className={classes.navLink} to={'/news'}><SvgNews/> News</NavLink>
            <NavLink className={classes.navLink} to={'/music'}><SvgMusic/> Music</NavLink>
            <NavLink className={classes.navLink} to={'/settings'}><SvgSettings/> Settings</NavLink>
        </nav>
    );
};
