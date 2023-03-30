import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';


export type ProfilePropsType = {
    postsData: ProfilePageType
    addPost:(titlePost:string)=>void
    changeTitleTextArea:(newTitle:string)=>void
}

const Profile = (props:ProfilePropsType) => {
    debugger;
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData}
                addPost={props.addPost}
                changeTitleTextArea={props.changeTitleTextArea}
            />
        </div>
    );
};

export default Profile;