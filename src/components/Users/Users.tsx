import React from 'react';
import classes from './Users.module.css';
import {UsersType} from '../../redux/user-reducer';
import PreLoader from '../common/PreLoader';

type PropsType = {
    users: UsersType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followUser: (id: number, checked: boolean) => void
    setUsers: (users: UsersType[]) => void
    toggleUsersPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleFetching: (checked: boolean) => void
    onChangePage: (page: number) => void
}

const Users = (props: PropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {props.isFetching ? <PreLoader/> : null}
                {pages.map(page => {
                    const toggleUserPageHandler = (page: number) => {
                        props.toggleUsersPage(page)
                        props.onChangePage(page)
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
                        <div>
                            {user.photos.small ? <img src={user.photos.small} alt='avatar-user'/> :
                                <img className={classes.avatar} src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png" alt='avatar-user'/>}
                        </div>
                    </>
                )
            })}
        </div>
    );
};

export default Users;