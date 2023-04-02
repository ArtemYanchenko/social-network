import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = () => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;