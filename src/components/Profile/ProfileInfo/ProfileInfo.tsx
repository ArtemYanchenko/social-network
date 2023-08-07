import React, {FC} from 'react';
import classes from './ProfileInfo.module.css';
import {UserProfileType} from '../../../bll/profile-reducer';
import PreLoader from '../../common/PreLoader';
import {CustomButton} from '../../common/custom-button/custom-button';

type Props = {
    profile: UserProfileType
    isOwner:boolean
}

export const ProfileInfo:FC<Props> = ({profile,isOwner}) => {
    debugger
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
                {isOwner && <input type={'file'}/> }
                {isOwner && <CustomButton name='Edit profile'/> }
            </div>
        </div>
    );
};
