import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './Users.css'
import {UsersContainerType} from './UsersContainer';


const Users = (props: UsersContainerType) => {


        const addUserHandler = () => {
            if (props.users.length === 0) {
                axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                    props.setUsersAC(res.data.items)
                })
            }

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
                            <div>
                                <button onClick={onClickHandler}>{user.followed ? 'follow' : 'unfollow'}</button>
                            </div>
                            <div>{user.id}</div>
                            <div>{user.followed}</div>
                            <div>{user.status}</div>
                            <div>{user.name}</div>
                        </>
                    )
                })}
            </div>
        );
    }
;

export default Users;

