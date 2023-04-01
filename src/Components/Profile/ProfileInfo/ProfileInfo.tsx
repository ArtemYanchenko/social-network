import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div className={classes.profileInfoBlock}>
            <img
                className={classes.mainImg}
                src="https://klike.net/uploads/posts/2019-11/1572608904_9.jpg"
                alt="photo"/>
            <div className={classes.descriptionBlock}>ava+desc</div>
        </div>
    );
};

export default ProfileInfo;