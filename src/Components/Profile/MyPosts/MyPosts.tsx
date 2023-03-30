import React, {ChangeEvent, useState} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePropsType} from '../Profile';


const addPostAC = () => {
    return {
        type: 'ADD-POST'
    }
}

const updateNewPostNextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    }
}

const MyPosts = (props: ProfilePropsType) => {


    const onClickButtonHandler = () => {
        props.addPost(props.postsData.messageForNewPost);
    }

    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeTitleTextArea(e.currentTarget.value);
    }

    return (
        <div className={classes.postsBlock}>
            <h3> my posts </h3>
            <textarea value={props.postsData.messageForNewPost} onChange={onChangeTextAreaHandler}/>
            <button onClick={onClickButtonHandler}>add post</button>
            {props.postsData.postsData.map((p) => <Post message={p.message} likeCount={p.likesCount}/>)}
        </div>

    );
};

export default MyPosts;