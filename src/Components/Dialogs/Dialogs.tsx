import React, {ChangeEvent, useState} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {ActionsTypes, addMessageAC, DialogsPageType, updateMessageTextAC} from '../../redux/state';

type PropsType = {
    dialogsPageData:DialogsPageType
    dispatch: (action: ActionsTypes) => void
}


const Dialogs = (props: PropsType) => {

    const dialogsElements = props.dialogsPageData.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} img={d.img}/>)
    const messagesElements = props.dialogsPageData.messageData.map((m) => <Message message={m.message}/>)


    const onClickButtonHandler = () => {
        props.dispatch(addMessageAC(props.dialogsPageData.textMessage))
        props.dispatch(updateMessageTextAC(''))
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateMessageTextAC(e.currentTarget.value))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <input type="text" value={props.dialogsPageData.textMessage} onChange={onChangeInputHandler}/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>

        </div>
    );
};

export default Dialogs;
