import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsContainerType} from './DialogsContainer';


const Dialogs = (props: DialogsContainerType) => {

    const dialogsElements = props.dialogsPage.dialogsData.map((d) => <DialogItem name={d.name} id={d.id}
                                                                                 img={d.img}/>)
    const messagesElements = props.dialogsPage.messageData.map((m) => <Message message={m.message}/>)

    const sendMessageHandler = () => {
        props.sendMessage();
    }

    const updateMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateMessageText(e.currentTarget.value)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <input type="text" value={props.dialogsPage.textMessage} onChange={updateMessageTextHandler}/>
                <button onClick={sendMessageHandler}>+</button>
            </div>

        </div>
    );
};

export default Dialogs;
