import React, {FC} from 'react';
import style from './custom-button.module.css'

type Props = { name: string; callback?:()=>void }

export const CustomButton: FC<Props> = ({name,callback}) => {
    return (
        <button className={style.button} onClick={callback}>{name}</button>
    );
};
