import React from 'react';

import {addPostAC, updateNewPostNextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {StoreContext} from '../../../StoreContext';


const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState()

                const addPost = () => {
                    if (state.profilePage.messageForNewPost) {
                        store.dispatch(addPostAC())
                    }
                }

                const updatePostText = (newPostText: string) => {
                    const action = updateNewPostNextAC(newPostText);
                    store.dispatch(action)
                }
                return (
                    <MyPosts addPost={addPost}
                             updatePostText={updatePostText}
                             postsData={state.profilePage.postsData}
                             messageForNewPost={state.profilePage.messageForNewPost}/>
                )
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;