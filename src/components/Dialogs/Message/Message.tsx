import React, {FC} from 'react';
import classes from './../Dialogs.module.css';

export const Message: FC<Props> = ({message}) => {
    return (
        <div className={classes.message}>
            {message}
        </div>
    );
};

//types
type Props = {
    message: string
}

