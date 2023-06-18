import React from 'react';
import {addPostAC, PostsDataType, updateNewPostNextAC} from '../../../bll/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../bll/redux-store';
import {Dispatch} from 'redux';


type MapStatePropsType = {
    postsData: PostsDataType[]
    messageForNewPost: string
}
type MapDispatchPropsType = {
    updatePostText: (newPostText: string) => void,
    addPost: () => void
}

export type MyPostsContainerPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        postsData: state.profilePage.postsData,
        messageForNewPost: state.profilePage.messageForNewPost
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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
