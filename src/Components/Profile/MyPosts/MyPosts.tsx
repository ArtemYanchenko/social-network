import React, {ChangeEvent, useState} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePageType} from '../../../redux/state';
import {ProfilePropsType} from '../Profile';


const MyPosts = (props: ProfilePropsType) => {

    const [titlePost, setTitlePost] = useState('')

    const onClickButtonHandler = () => {
        props.addPost(titlePost);
        setTitlePost('');
    }


    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitlePost(e.currentTarget.value)
    }
    console.log(titlePost)
    return (
        <div className={classes.postsBlock}>
            <h3> my posts </h3>
            <textarea value={titlePost} onChange={onChangeInputHandler}></textarea>
            <button onClick={onClickButtonHandler}>add post</button>
            {props.postsData.postsData.map((p) => <Post message={p.message} likeCount={p.likesCount}/>)}
        </div>

    );
};

export default MyPosts;