import React, {FC} from 'react';
import s from '../dialogs.module.css';

export const Message: FC<Props> = ({message}) => {
    return (
        <div className={s.message}>
            {message}
        </div>
    );
};

//types
type Props = {
    message: string
}

