import React from 'react';
import classes from './Header.module.css';


const  Header = () => {
    return (
        <header className={classes.header}>
            <a href='#'><img src="https://cdn-icons-png.flaticon.com/128/124/124019.png" alt="logo"/></a>
            <input type="text" placeholder={'Search'}/>
        </header>
    );
};

export default Header;