import React, {FC} from 'react';
import classes from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UserProfileType} from '../../bll/profile-reducer';

export const Profile:FC<Props> = ({profile,isOwner}) => {
    return (
        <div className={classes.profileContent}>
            <ProfileInfo profile={profile} isOwner={isOwner}/>
            <MyPostsContainer/>
        </div>
    );
};

//types
type Props = {
    profile:UserProfileType
    isOwner:boolean
}