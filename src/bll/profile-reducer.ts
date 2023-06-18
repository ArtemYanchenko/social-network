import {addMessageAC, updateMessageTextAC} from './dialogs-reducer';

export type PostsDataType = {
    id: number,
    likesCount: number,
    message: string
}

type InitialStateType = {
    messageForNewPost: string
    postsData: PostsDataType[],
    profile:UserProfileType
}

const initialState = {
    messageForNewPost: '',
    postsData: [
        {id: 1, likesCount: 5, message: 'hi, my first post'},
        {id: 2, likesCount: 10, message: 'i am fine'},
    ],
    profile: {   userId: 2,
        lookingForAJob: true,
        lookingForAJobDescription: 'lookingForAJobDescription',
        fullName: 'Artem Yanchenko',
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
        }}
}

type ActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostNextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateMessageTextAC>
    | ReturnType<typeof setUserProfile>


export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, messageForNewPost: action.newText};
        case 'ADD-POST':
            const newPost: PostsDataType = {id: 1, likesCount: 0, message: state.messageForNewPost};
            return {...state, postsData: [newPost, ...state.postsData], messageForNewPost: ''};
        case 'SET-USER': {
            return {...state,profile:action.profile}
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


export type UserProfileType = {
    userId: number;
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