import {addMessage, updateMessageText} from './dialogs-reducer';
import {Dispatch} from 'redux';
import {v1} from 'uuid';
import {profileAPI} from '../dal/profile-api';

const initialState = {
    postsData: [
        {
            id: v1(),
            likesCount: 8,
            message: 'TypeScript is a programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends the capabilities of JavaScript. The developer of the TypeScript language is Anders Hejlsberg, who previously created Turbo Pascal, Delphi, and C#.'
        },
        {
            id: v1(),
            likesCount: 10,
            message: 'React can be used to develop single page and mobile applications. Its goal is to provide high development speed, simplicity and scalability. As a library for developing user interfaces, React is often used with other libraries such as MobX, Redux, and GraphQL.'
        },
        {
            id: v1(),
            likesCount: 43,
            message: 'Web programming is a section of programming focused on the development of web applications (programs that ensure the functioning of dynamic World Wide Web sites). Web programming languages are languages that are primarily designed to work with web technologies. Web programming languages can be roughly divided into two overlapping groups: client-side and server-side.'
        },
        {
            id: v1(),
            likesCount: 36,
            message: 'Programming is the process of creating computer programs. In the words of one of the founders of programming languages, Niklaus Wirth, "Programs = algorithms + data structures.'
        },
        {
            id: v1(),
            likesCount: 54,
            message: 'post functionality is still under development. Some features may be unavailable. An online platform that is used for communication, dating, creating social relationships between people who have similar interests or offline connections, as well as for entertainment (music, movies) and work.'
        },
    ],
    profile: {
        id: 0,
        lookingForAJob: true,
        lookingForAJobDescription: 'lookingForAJobDescription',
        fullName: '',
        contacts: {
            github: 'github',
            vk: 'vk',
            facebook: 'facebook',
            instagram: 'instagram',
            twitter: 'twitter',
            website: 'website',
            youtube: 'youtube',
        },
        photos: {
            small: '',
            large: '',
        }
    }
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsDataType = {id: v1(), likesCount: 0, message: action.text};
            return {...state, postsData: [newPost, ...state.postsData]};
        case 'SET-USER': {
            return {...state, profile: {...action.profile}}
        }
        case 'SAVE-PHOTOS-SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}

//actions
export const addPostAC = (text: string) => ({type: 'ADD-POST', text} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: 'SET-USER', profile} as const)
export const savePhotoSuccessAC = (photos: PhotosType) => ({type: 'SAVE-PHOTOS-SUCCESS', photos} as const)

//thunks
export const setUserProfileTC = (id: string) => (dispatch: Dispatch) => {
    profileAPI.getProfilePage(id)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}
export const savePhoto = (file: File) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccessAC(response.data.data.photos))
        }
    }
}


//types
type ActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof updateMessageText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof savePhotoSuccessAC>

export type PostsDataType = {
    id: string,
    likesCount: number,
    message: string
}

type InitialStateType = {
    postsData: PostsDataType[]
    profile: UserProfileType
}

export type UserProfileType = {
    id: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: {
        github: string;
        vk: string;
        facebook: string;
        instagram: string;
        twitter: string;
        website: string;
        youtube: string;
    };
    photos: PhotosType
}

export type PhotosType = {
    small: string;
    large: string;
}