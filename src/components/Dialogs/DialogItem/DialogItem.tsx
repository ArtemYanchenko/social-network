import React, {FC} from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type Props = {
    id: number
    name: string
    img:string
}

export const DialogItem:FC<Props> = ({id,name,img}) => {
    return (
        <div className={classes.dialogItem}>
            <NavLink to={'/dialogs/' + id}>
                <img src={img} alt=""/>
                <p>{name}</p>
            </NavLink>
        </div>
    );
};

