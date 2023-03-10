import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <img
                className={classes.mainImg}
                src="https://img3.akspic.ru/crops/7/3/3/7/4/147337/147337-macbook-makbuk_ejr-voda-tkan-more-3840x2160.jpg"
                alt="photo"/>
            <div>ava+desc</div>
        </div>
    );
};

export default ProfileInfo;