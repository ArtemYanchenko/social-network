import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redux/state';


const Dialogs = (props: DialogsPageType) => {

    const dialogsElements = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} img={d.img}/>)
    const messagesElements = props.messageData.map((m) => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
