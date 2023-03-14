import React from 'react';
import classes from './../Dialogs.module.css';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;


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


