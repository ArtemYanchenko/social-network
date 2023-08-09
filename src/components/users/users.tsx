import React, {FC} from 'react';
import classes from './users.module.css';
import {LoadingOutlined} from '@ant-design/icons';
import {Pagination, Spin} from 'antd';
import {User} from './user';
import {UsersType} from '../../bll/user-reducer';

export const Users: FC<Props> = ({
                              users,
                              totalUsersCount,
                              pageSize,
                              isFetching,
                              followingInProgress,
                              onChangePage,
                              followUserTC,
                              unfollowUserTC
                          }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const antIcon = <LoadingOutlined style={{fontSize: 100}} spin rev={undefined}/>;
    return (
        <div className={classes.usersContainer}>
            <div>
                {isFetching ? <Spin indicator={antIcon} className={classes.preloader}/> : null}
                <Pagination defaultCurrent={1} total={pagesCount} onChange={onChangePage} showSizeChanger={false}
                            className={classes.pagination} />
            </div>
            <div className={classes.usersBlock}>
                {users.map(user => {
                    const onClickHandler = () => {
                        !user.followed ? followUserTC(user.id) : unfollowUserTC(user.id)
                    }
                    return <User user={user} callback={onClickHandler} followingInProgress={followingInProgress}/>
                })}
            </div>
        </div>
    );
};


//types
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
