import React, {FC} from 'react';
import classes from './users.module.css';
import {NavLink} from 'react-router-dom';
import {UsersType} from '../../bll/user-reducer';

type Props = {
    user: UsersType
    callback:()=>void
    followingInProgress:number[]
}

export const User:FC<Props> = ({user,followingInProgress,callback}) => {
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
                    onClick={callback}
                    disabled={followingInProgress.some(id => user.id === id)}>{user.followed ? 'follow' : 'unfollow'}</button>

        </div>
    );
};
