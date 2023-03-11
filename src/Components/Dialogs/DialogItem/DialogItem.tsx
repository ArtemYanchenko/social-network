import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    id: number
    name: string
    img:string
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={classes.dialogItem}>
            <NavLink to={'/dialogs/' + props.id}>
                <img src={props.img} alt=""/>
                <p>{props.name}</p>
            </NavLink>
        </div>
    );
};

export default DialogItem;
