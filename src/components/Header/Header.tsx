import React from 'react';
import classes from './Header.module.css';

type PropsType = {
    login:string | null
}

const  Header = (props:PropsType) => {
    return (
        <header className={classes.header}>
            <a href='#'><img src="https://cdn-icons-png.flaticon.com/128/124/124019.png" alt="logo"/></a>
            <input type="text" placeholder={'Search'}/>
            <button>{props.login}</button>
        </header>
    );
};

export default Header;