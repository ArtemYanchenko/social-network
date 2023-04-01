import React from 'react';

import {addPostAC, updateNewPostNextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {StatePropsType} from '../../../App';


const MyPostsContainer = (props: StatePropsType) => {

    const state = props.store.getState()

    const addPost = () => {
        if (state.profilePage.messageForNewPost) {
            props.store.dispatch(addPostAC())
        }
    }

    const updatePostText = (newPostText: string) => {
        const action = updateNewPostNextAC(newPostText);
        props.store.dispatch(action)
    }

    return (
        <MyPosts addPost={addPost}
                 updatePostText={updatePostText}
                 postsData={state.profilePage.postsData}
                 messageForNewPost={state.profilePage.messageForNewPost}/>

    );
};

export default MyPostsContainer;