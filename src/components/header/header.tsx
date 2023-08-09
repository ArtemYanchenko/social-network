import React, {FC} from 'react';
import classes from './header.module.css';
import {Avatar, Dropdown, Menu} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {CustomButton} from '../common/custom-button/custom-button';
import {NightModeButton} from '../common/night-mode-button/night-mode-button';

export const Header: FC<Props> = ({login, photo, nightMode ,isLoggedIn, logoutTC,setNightMode}) => {
    const onLoginHandler = () => {
        logoutTC()

    }

    const widgetMenu = (
        <Menu className={classes.menuWrapper} >
            <Menu.Item key={1}>
                {login}
            </Menu.Item>
            <Menu.Item key={2} onClick={onLoginHandler}>
                <CustomButton name="logout" width='110px'/>
            </Menu.Item>
        </Menu>
    );
    return (
        <header className={classes.header}>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/124/124019.png" alt="logo"/></a>
            <input type="text" placeholder={'Search'}/>
            {isLoggedIn ? <Dropdown overlay={widgetMenu}>
                    {photo ? <img src={photo} alt="avatarSmall"/>
                        : <Avatar icon={<UserOutlined rev={undefined}/>}/>
                    }
                </Dropdown>
                : <Avatar icon={<UserOutlined rev={undefined}/>}/>}
            <NightModeButton nightMode={nightMode} setNightMode={setNightMode}/>
        </header>
    );
};

//types
type Props = {
    login: string | null
    photo: string | null
    isLoggedIn: boolean
    nightMode:boolean
    logoutTC: () => void
    setNightMode:(mode:boolean) => void
}