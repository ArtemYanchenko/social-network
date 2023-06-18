import React from 'react';
import classes from './ProfileInfo.module.css';
import {UserProfileType} from '../../../bll/profile-reducer';
import PreLoader from '../../common/PreLoader';

type PropsType = {
    profile: UserProfileType
}

const ProfileInfo = (props: PropsType) => {
    return (
        <div className={classes.profileInfoBlock}>
            {!props.profile ? <PreLoader/>
                : <div className={classes.descriptionBlock}>
                    <img className={classes.mainImg}
                         alt={'mainPhoto'}
                         src={props.profile.photos.small !== null
                             ? props.profile.photos.small
                             : 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'}
                    />
                    <div>
                        <p className={classes.userName}>{props.profile.fullName}</p>
                        <p>{props.profile.contacts.vk}</p>
                    </div>
                </div>}
            <div className={classes.buttonBlock}>
                <a href='#'>Edit profile</a>
                <a href='#'>More</a>
            </div>
        </div>
    );
};

export default ProfileInfo;