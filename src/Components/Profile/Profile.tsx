import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div><img
                src="https://img3.akspic.ru/crops/7/3/3/7/4/147337/147337-macbook-makbuk_ejr-voda-tkan-more-3840x2160.jpg"
                alt="photo"/>
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;