import React, {FC, useEffect} from 'react';
import style from './night-mode-button.module.css'

export const NightModeButton: FC<Props> = ({nightMode,setNightMode}) => {
    const switchInput = React.createRef<HTMLInputElement>()
    useEffect(() => {
        if (switchInput.current?.checked) {
            document.documentElement.style.setProperty('--bg-color', '#edeef0');
            document.documentElement.style.setProperty('--bg-color-secondary', '#FFFFFF');
            document.documentElement.style.setProperty('--text-color', '#161c2d');

        } else {
            document.documentElement.style.setProperty('--bg-color', '#141414');
            document.documentElement.style.setProperty('--bg-color-secondary', '#222222');
            document.documentElement.style.setProperty('--text-color', '#fff');
        }
    }, [nightMode]);
    return (
        <label className={style.switch}>
            <input type="checkbox" ref={switchInput} checked={!nightMode} onChange={()=>setNightMode(!nightMode)}/>
            <span className={style.slider}></span>
        </label>
    );
};

//types
type Props = {
    nightMode: boolean;
    setNightMode: (mode:boolean) => void
}
