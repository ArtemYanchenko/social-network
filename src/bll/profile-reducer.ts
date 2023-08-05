import {addMessage, updateMessageText} from './dialogs-reducer';
import {Dispatch} from 'redux';
import {profileAPI} from '../dal/api';

export type PostsDataType = {
    id: number,
    likesCount: number,
    message: string
}

type InitialStateType = {
    messageForNewPost: string
    postsData: PostsDataType[]
    profile: UserProfileType
}

const initialState = {
    messageForNewPost: '',
    postsData: [
        {id: 1, likesCount: 8, message: 'TypeScript is a programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends the capabilities of JavaScript. The developer of the TypeScript language is Anders Hejlsberg, who previously created Turbo Pascal, Delphi, and C#.'},
        {id: 2, likesCount: 10, message: 'React can be used to develop single page and mobile applications. Its goal is to provide high development speed, simplicity and scalability. As a library for developing user interfaces, React is often used with other libraries such as MobX, Redux, and GraphQL.'},
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
            small: null,
            large: null,
        }
    }
}

type ActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostNextAC>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof updateMessageText>
    | ReturnType<typeof setUserProfile>


export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, messageForNewPost: action.newText};
        case 'ADD-POST':
            const newPost: PostsDataType = {id: 1, likesCount: 0, message: state.messageForNewPost};
            return {...state, postsData: [newPost, ...state.postsData], messageForNewPost: ''};
        case 'SET-USER': {
            return {...state, profile: {...action.profile}}
        }
        default:
            return state;
    }
}

export const updateNewPostNextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}


export const setUserProfile = (profile: UserProfileType) => ({type: 'SET-USER', profile} as const)


export const setUserProfileTC = (id: string) => (dispatch: Dispatch) => {
    debugger
    profileAPI.getProfilePage(id)
        .then(data => {
            dispatch(setUserProfile(data))
            // dispatch(setUserPhoto(data.photos.large))
        })
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
    photos: {
        small: string | null;
        large: string | null;
    };
}