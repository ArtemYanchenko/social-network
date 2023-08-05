import React, {FC} from 'react';
import classes from './../Dialogs.module.css';

type Props = {
    message: string
}

export const Message:FC<Props> = ({message}) => {
    return (
            <div className={classes.message}>
                {message}
            </div>

    )
        ;
};



