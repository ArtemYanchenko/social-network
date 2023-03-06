import React from 'react';
import classes from './Header.module.css';


const  Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://cdn-icons-png.flaticon.com/128/124/124019.png" alt="logo"/>
        </header>
    );
};

export default Header;