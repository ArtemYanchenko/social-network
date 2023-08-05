import React, {FC} from 'react';
import style from './custom-button.module.css'

type Props = { name: string; width?:string;callback?:()=>void}

export const CustomButton: FC<Props> = ({name,width,callback}) => {
    return (
        <button className={style.customButton} style={{width}} onClick={callback}>{name}</button>
    );
};
