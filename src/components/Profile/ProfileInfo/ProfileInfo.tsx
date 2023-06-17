import React from 'react';
import classes from './ProfileInfo.module.css';
import {UserProfileType} from '../../../redux/profile-reducer';
import PreLoader from '../../common/PreLoader';

type PropsType = {
    profile: UserProfileType
}

const ProfileInfo = (props: PropsType) => {
    return (
        <div className={classes.profileInfoBlock}>
            {/*<img*/}
            {/*    className={classes.mainImg}*/}
            {/*    src="https://klike.net/uploads/posts/2019-11/1572608904_9.jpg"*/}
            {/*    alt="photo"/>*/}
            {!props.profile ? <PreLoader/>
                : <div className={classes.descriptionBlock}>
                    <img
                        src={props.profile.photos.small !== null ? props.profile.photos.small : 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'}/>
                    <div>Имя: {props.profile.fullName}</div>
                    <div>VK: {props.profile.contacts.vk}</div>
                </div>
            }
        </div>
    );
};

export default ProfileInfo;