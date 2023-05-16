import React from 'react';
import axios from 'axios';
import classes from './Users.module.css';
import {UsersType} from '../../redux/user-reducer';

type PropsType = {
    users:UsersType[]
    totalUsersCount:number
    pageSize:number
    currentPage:number
    followUser: (id: number, checked: boolean) => void
    setUsers: (users: UsersType[]) => void
    toggleUsersPage:(currentPage:number)=>void
    setTotalCount:(totalCount:number)=>void
}

const Users = (props:PropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(page => {
                    const toggleUserPageHandler = (page: number) => {
                        props.toggleUsersPage(page)
                        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${page}`).then(res => {
                            props.setUsers(res.data.items)
                        })
                    }
                    return (
                        <span className={props.currentPage === page ? classes.selectPage : ''}
                              onClick={() => toggleUserPageHandler(page)}>{page}</span>)
                })}
            </div>
            {props.users.map(user => {
                const onClickHandler = () => {
                    props.followUser(user.id, !user.followed)
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
};

export default Users;