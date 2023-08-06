import React, {FC} from 'react';
import style from './night-mode-button.module.css'

export const NightModeButton: FC<Props> = ({nightMode,setNightMode}) => {
    return (
        <label className={style.switch}>
            <input type="checkbox" checked={nightMode} onChange={()=>setNightMode(!nightMode)}/>
            <span className={style.slider}></span>
        </label>
    );
};

//types
type Props = {
    nightMode: boolean;
    setNightMode: (mode:boolean) => void
}
