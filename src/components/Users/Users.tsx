import React, {FC} from 'react';
import classes from './Users.module.css';
import {UsersType} from '../../bll/user-reducer';
import { LoadingOutlined } from '@ant-design/icons';
import {NavLink} from 'react-router-dom';
import {Pagination, Spin} from 'antd';

type Props = {
    users: UsersType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

    toggleUsersPage: (currentPage: number) => void
    onChangePage: (page: number) => void
    followUserTC: (id: number) => void
    unfollowUserTC: (id: number) => void
}

const Users:FC<Props> = ({...props}) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const antIcon = <LoadingOutlined style={{fontSize: 100}} spin rev={undefined} />;
    return (
        <div className={classes.usersContainer}>
            <div>
                {props.isFetching ? <Spin indicator={antIcon} className={classes.preloader} /> : null}

                <Pagination total={pagesCount} onChange={props.onChangePage} showSizeChanger={false} className={classes.pagination}/>
            </div>
            <div className={classes.usersBlock}>
                {props.users.map(user => {
                    const onClickHandler = () => {
                        !user.followed ? props.followUserTC(user.id) : props.unfollowUserTC(user.id)
                    }
                    return (
                        <div className={classes.userBlock}>
                            <div>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img
                                        src={user.photos.small !== null ? user.photos.small : 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'}
                                        alt="avatar-user"
                                        className={classes.avatar}/>
                                </NavLink>
                            </div>
                            <div className={classes.userName}>{user.name}</div>
                            <button className={classes.buttonFollow}
                                    onClick={onClickHandler}
                                    disabled={props.followingInProgress.some(id => user.id === id)}>{user.followed ? 'follow' : 'unfollow'}</button>

                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Users;