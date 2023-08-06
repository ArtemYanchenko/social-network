import React from 'react';
import {addPostAC, PostsDataType, updateNewPostNextAC} from '../../../bll/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../bll/redux-store';
import {Dispatch} from 'redux';
import {MyPosts} from './MyPosts';

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        postsData: state.profilePage.postsData,
        messageForNewPost: state.profilePage.messageForNewPost,
        photo:state.profilePage.profile.photos.large
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updatePostText: (newPostText: string) => {
            const action = updateNewPostNextAC(newPostText);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


//types
type MapStatePropsType = {
    postsData: PostsDataType[]
    messageForNewPost: string
    photo:string | null
}
type MapDispatchPropsType = {
    updatePostText: (newPostText: string) => void,
    addPost: () => void
}

export type MyPostsContainerPropsType = MapStatePropsType & MapDispatchPropsType
