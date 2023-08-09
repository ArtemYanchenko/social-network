import React, {ChangeEvent, FC} from 'react';
import classes from './ProfileInfo.module.css';
import {UserProfileType} from '../../../bll/profile-reducer';
import {Preloader} from '../../common/preloader/preloader';
import {CustomButton} from '../../common/custom-button/custom-button';

type Props = {
    profile: UserProfileType
    isOwner: boolean
    savePhoto: (file: File) => void
}

export const ProfileInfo: FC<Props> = ({profile, isOwner, savePhoto}) => {
    const mainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        debugger
        if (event.target.files && event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }
    return (
        <div className={classes.profileInfoBlock}>
            {!profile ? <Preloader/>
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
                {isOwner && <><label htmlFor="mainPhotoInput" className={classes.inputFile}>
                    Update photo
                </label>
                    <input type="file" id="mainPhotoInput"  onChange={mainPhotoSelected}
                           style={{display: 'none'}}/>
                </>}
                {isOwner && <CustomButton name="Edit profile"/>}
            </div>
        </div>
    );
};
