import {ActionsTypes, PostsDataType, ProfilePageType} from './store';


const initialState = {
    messageForNewPost: '',
    postsData: [
        {id: 1, likesCount: 5, message: 'hi, my first post'},
        {id: 2, likesCount: 10, message: 'i am fine'},
    ]
}

export const profileReducer = (state:ProfilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsDataType = {id: 1, likesCount: 0, message: state.messageForNewPost};
            state.postsData.unshift(newPost);
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.messageForNewPost = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostNextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}