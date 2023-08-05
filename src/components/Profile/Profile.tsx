import React, {FC} from 'react';
import classes from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UserProfileType} from '../../bll/profile-reducer';

export const Profile:FC<Props> = ({profile}) => {
    return (
        <div className={classes.profileContent}>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    );
};

//types
type Props = {
    profile:UserProfileType
}