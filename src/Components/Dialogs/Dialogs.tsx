import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string,
    id: string
}

type MessageItemPropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={classes.dialogItem}>
            <NavLink to={`/dialogs/` + `${props.id}`}>{props.name}</NavLink>
        </div>

    );
};

const MessageItem = (props:MessageItemPropsType) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                <DialogItem name="Artem" id="1"/>
                <DialogItem name="Fedor" id="2"/>
                <DialogItem name="Petya" id="3"/>
                <DialogItem name="Ivan" id="4"/>
                <DialogItem name="Nikola" id="5"/>
            </div>

            <div className={classes.messages}>
                <MessageItem message='hi'/>
                <MessageItem message='yo'/>
                <MessageItem message='how are you?'/>
            </div>
        </div>
    );
};

export default Dialogs;
