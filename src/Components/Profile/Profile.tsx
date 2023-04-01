import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {StatePropsType} from '../../App';



const Profile = (props: StatePropsType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;