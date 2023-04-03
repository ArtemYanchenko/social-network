import React, {ChangeEvent, createRef, useState} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsContainerPropsType} from './MyPostsContainer';



const MyPosts = (props: MyPostsContainerPropsType ) => {

    const addPostHandler = () => {
        props.addPost();
    }

    const updatePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(e.currentTarget.value)
    }

    const mappedPosts = props.postsData.map((p) => <Post message={p.message} likeCount={p.likesCount}/>)

    return (
        <div className={classes.postsBlock}>
            <h3> My Posts </h3>
            <textarea value={props.messageForNewPost}
                      onChange={updatePostTextHandler}
            />
            <button onClick={addPostHandler}>add post</button>
            {mappedPosts}
        </div>

    );
};

export default MyPosts;