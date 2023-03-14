import React, {ChangeEvent, useState} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePageType} from '../../../redux/state';


const MyPosts = (props: ProfilePageType) => {

    const [titlePost, setTitlePost] = useState('')

    const onClickButtonHandler = () =>
        console.log(titlePost);

    const onChangeInputHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setTitlePost(e.currentTarget.value)
    }
    console.log(titlePost)
        return (
            <div className={classes.postsBlock}>
                <h3> my posts </h3>
                <textarea value={titlePost} onChange={onChangeInputHandler}></textarea>
                <button onClick={onClickButtonHandler}>add post</button>
                {props.postsData.map((p) => <Post message={p.message} likeCount={p.likesCount}/>)}
            </div>

        );
    };

    export default MyPosts;