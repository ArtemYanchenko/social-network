import {addMessageAC, updateMessageTextAC} from './dialogs-reducer';

export type PostsDataType = {
    id: number,
    likesCount: number,
    message: string
}

type InitialStateType = {
    messageForNewPost: string
    postsData: PostsDataType[]
}

const initialState = {
    messageForNewPost: '',
    postsData: [
        {id: 1, likesCount: 5, message: 'hi, my first post'},
        {id: 2, likesCount: 10, message: 'i am fine'},
    ]
}

type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostNextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateMessageTextAC>

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType => {

    switch (action.type) {
        case 'UPDATE-NEW-POST-TEXT':
            return {...state,messageForNewPost:action.newText};
        case 'ADD-POST':
            const newPost: PostsDataType = {id: 1, likesCount: 0, message: state.messageForNewPost};
            return {...state, postsData:[newPost,...state.postsData],messageForNewPost: ''};
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