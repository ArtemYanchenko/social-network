import React, {ChangeEvent, useState} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redux/state';


const Dialogs = (props: DialogsPageType) => {

    const dialogsElements = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} img={d.img}/>)
    const messagesElements = props.messageData.map((m) => <Message message={m.message}/>)
    const onClickButtonHandler = () => {
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <input type="text" value={props.newMessageText} onChange={onChangeInputHandler}/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>

        </div>
    );
};

export default Dialogs;
