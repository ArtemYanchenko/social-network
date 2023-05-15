import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './Users.css'
import {UsersContainerType} from './UsersContainer';
import {setUsersAC} from '../../redux/user-reducer';


const Users = (props: UsersContainerType) => {
    let data: any;
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res =>
        data = res.data.items
    )
    const addUserHandler = () => {
        setUsersAC(data)
    }

    return (
        <div>
            <button onClick={addUserHandler}>add users</button>

            {props.users.map(user => {
                const onClickHandler = () => {
                    props.followUserAC(user.id, !user.followed)
                }
                return (
                    <>
                        <button onClick={onClickHandler}>{user.followed ? 'follow' : 'unfollow'}</button>
                        <div>{user.followed}</div>
                        <div>{user.id}</div>
                        <div>{user.status}</div>
                        <div>{user.name}</div>
                    </>
                )
            })}
        </div>
    );
};

export default Users;

