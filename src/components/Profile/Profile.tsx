import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {UserProfileType} from '../../bll/profile-reducer';

type PropsType = {
    profile:UserProfileType
}

const Profile = (props:PropsType) => {
    return (
        <div className={classes.profileContent}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;