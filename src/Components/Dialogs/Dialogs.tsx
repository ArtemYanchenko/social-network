import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string,
    id: number
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

    let dialogsData = [
        {id:1,name:'Artem'},
        {id:2,name:'Fedor'},
        {id:3,name:'Petya'},
        {id:4,name:'Ivan'},
        {id:5,name:'Nikola'},
    ]

    let messageData = [
        {id:1,message:'hi'},
        {id:2,message:'yo'},
        {id:3,message:'how are you?'},
        {id:4,message:'fine'},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsData.map((d)=>
                    <DialogItem name={d.name} id={d.id}/>
                )}
            </div>

            <div className={classes.messages}>
                {messageData.map( (m)=> <MessageItem message={m.message}/>  )}
            </div>
        </div>
    );
};

export default Dialogs;
