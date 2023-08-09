import React, {FC} from 'react';
import classes from '../dialogs.module.css';
import {NavLink} from 'react-router-dom';

export const DialogItem:FC<Props> = ({id,img}) => {
    return (
        <div className={classes.dialogItem}>
            <NavLink to={'/dialogs/' + id}>
                <img src={img} alt=""/>
            </NavLink>
        </div>
    );
};

//types
type Props = {
    id: number
    name: string
    img:string
}
