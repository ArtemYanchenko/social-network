import React from 'react';
import classes from './Header.module.css';
import {Redirect} from 'react-router-dom';

type PropsType = {
    login:string | null
    isLoggedIn:boolean
}

const  Header = (props:PropsType) => {

    const onLoginHandler = () => {
        <Redirect to={'login'}/>
    }

    return (
        <header className={classes.header}>
            <a href='#'><img src="https://cdn-icons-png.flaticon.com/128/124/124019.png" alt="logo"/></a>
            <input type="text" placeholder={'Search'}/>
            {props.isLoggedIn ?
                <button>{props.login}</button>
            :   <button onClick={onLoginHandler}>LOGIN</button>
            }


        </header>
    );
};

export default Header;