import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';

import {AppPropsType} from '../../index';
import Message from './Message/Message';


const Dialogs = (props: AppPropsType) => {

    const dialogsElements = props.dialogsData?.map((d) => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.messageData?.map((m) => <Message message={m.message}/>)

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
