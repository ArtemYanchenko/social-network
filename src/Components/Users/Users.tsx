import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './Users.css'
import {UsersContainerType} from './UsersContainer';
import {log} from 'util';


const Users = (props: UsersContainerType) => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res =>
           console.log(res.data.items)
        )
    const addUserHandler = () => {
    }

    return (
        <div>
            <button onClick={addUserHandler}>add users</button>
            {}
            {props.users.map(user => {
                const onClickHandler = () => {
                    props.followUserAC(user.userId, !user.followed)
                }
                return (
                    <>
                        <button onClick={onClickHandler}>{user.followed ? 'follow' : 'unfollow'}</button>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                        <div>{user.location.city}</div>
                        <div>{user.location.country}</div>
                    </>
                )
            })}
        </div>
    );
};

export default Users;

