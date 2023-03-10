import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav + ' ' + classes.active }>
            <div className={classes.active}><NavLink to={"/profile"}>Profile</NavLink></div>
            <div><NavLink to={"/dialogs"}>Messages</NavLink></div>
            <div><NavLink to={"/news"}>News</NavLink></div>
            <div><NavLink to={"/music"}>Music</NavLink></div>
            <div><NavLink to={"/settings"}>Settings</NavLink></div>
        </nav>
    );
};

export default Navbar;