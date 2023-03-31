import React, {ChangeEvent, createRef, useState} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePropsType} from '../Profile';
import {addPostAC, updateNewPostNextAC} from '../../../redux/store';


const MyPosts = (props: ProfilePropsType) => {

    const addPost = () => {
        if (props.postsData.messageForNewPost) {
            props.dispatch(addPostAC())
        }
    }

    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostNextAC(e.currentTarget.value))
    }

    return (
        <div className={classes.postsBlock}>
            <h3> My Posts </h3>
            <textarea value={props.postsData.messageForNewPost}
                      onChange={onChangeTextAreaHandler}
            />
            <button onClick={addPost}>add post</button>
            {props.postsData.postsData.map((p) => <Post message={p.message} likeCount={p.likesCount}/>)}
        </div>

    );
};

export default MyPosts;