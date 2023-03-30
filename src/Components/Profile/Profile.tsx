import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from '../../redux/state';


export type ProfilePropsType = {
    postsData: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    debugger;
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;