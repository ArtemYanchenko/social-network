import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div><a href="src/Components/Navbar/Navbar#">Profile</a></div>
            <div><a href="src/Components/Navbar/Navbar#">Messages</a></div>
            <div><a href="src/Components/Navbar/Navbar#">News</a></div>
            <div><a href="src/Components/Navbar/Navbar#">Music</a></div>
            <div><a href="src/Components/Navbar/Navbar#">Settings</a></div>
        </nav>
    );
};

export default Navbar;