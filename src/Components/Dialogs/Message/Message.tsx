import React from 'react';
import classes from './../Dialogs.module.css';


type MessageItemPropsType = {
    message: string
}

const Message = (props: MessageItemPropsType) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
        ;
};

export default Message;


