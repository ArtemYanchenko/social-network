import React, {FC} from 'react';
import classes from './Header.module.css';
import {Avatar, Dropdown, Menu} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {CustomButton} from '../common/custom-button/custom-button';

export const Header: FC<Props> = ({login, photo, isLoggedIn, logoutTC}) => {
    const onLoginHandler = () => {
        logoutTC()

    }

    const widgetMenu = (
        <Menu>
            <Menu.Item key={1}>
                {login}
            </Menu.Item>
            <Menu.Item key={2} onClick={onLoginHandler}>
                <CustomButton name="logout"/>
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
        </header>
    );
};

//types
type Props = {
    login: string | null
    photo: string | null
    isLoggedIn: boolean
    logoutTC: () => void
}