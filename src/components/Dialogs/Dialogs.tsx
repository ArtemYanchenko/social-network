import React, {ChangeEvent, FC} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsContainerType} from './DialogsContainer';


export const Dialogs:FC<DialogsContainerType> = ({dialogsPage,addMessage,updateMessageText}) => {
    const mappedDialogs = dialogsPage.dialogsData.map((d) => <DialogItem name={d.name} id={d.id}
                                                                                 img={d.img}/>)
    const mappedMessages = dialogsPage.messageData.map((m) => <Message message={m.message}/>)

    const sendMessageHandler = () => {
        addMessage();
    }

    const updateMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateMessageText(e.currentTarget.value)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {mappedDialogs}
            </div>
            <div className={classes.messages}>
                {mappedMessages}
                <input type="text" value={dialogsPage.textMessage} onChange={updateMessageTextHandler}/>
                <button onClick={sendMessageHandler}>+</button>
            </div>

        </div>
    );
};

