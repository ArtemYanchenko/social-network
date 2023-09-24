import React, {FC} from 'react';
import s from './profile.module.css';
import {UserProfileType} from '../../bll/profile-reducer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './my-posts/my-posts-container';

export const Profile:FC<Props> = ({profile,isOwner,savePhoto}) => {
    return (
        <div className={s.profileContent}>
            <ProfileInfo profile={profile} isOwner={isOwner} savePhoto={savePhoto}/>
            <MyPostsContainer/>
        </div>
    );
};

//types
type Props = {
    profile:UserProfileType
    isOwner:boolean
    savePhoto:(file:File)=>void
}