import React, {FC} from 'react';
import classes from './ProfileInfo.module.css';
import {UserProfileType} from '../../../bll/profile-reducer';
import PreLoader from '../../common/PreLoader';

type Props = {
    profile: UserProfileType
}

export const ProfileInfo:FC<Props> = ({profile}) => {
    return (
        <div className={classes.profileInfoBlock}>
            {!profile ? <PreLoader/>
                : <div className={classes.descriptionBlock}>
                    <img className={classes.mainImg}
                         alt={'mainPhoto'}
                         src={profile.photos.large !== null
                             ? profile.photos.large
                             : 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'}
                    />
                    <div>
                        <p className={classes.userName}>{profile.fullName}</p>
                        <p>{profile.contacts.vk}</p>
                    </div>
                </div>}
            <div className={classes.buttonBlock}>
                <a href='#'>Edit profile</a>
                <a href='#'>More</a>
            </div>
        </div>
    );
};
