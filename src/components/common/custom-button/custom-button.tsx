import React, {FC} from 'react';
import s from './custom-button.module.css'

type Props = { name: string; width?:string;callback?:()=>void}

export const CustomButton: FC<Props> = ({name,width,callback}) => {
    return (
        <button className={s.customButton} style={{width}} onClick={callback}>{name}</button>
    );
};
