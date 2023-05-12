import React from 'react';
import './Users.css'
import {UsersContainerType} from './UsersContainer';


const Users = (props:UsersContainerType) => {
    return (
        <div>
            {props.users.map(user=>{
                const onClickHandler = () => {
                    props.followUserAC(user.userId,!user.followed)
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

