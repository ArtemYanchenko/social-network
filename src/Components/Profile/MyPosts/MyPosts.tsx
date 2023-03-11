import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {AppPropsType} from '../../../index';


const MyPosts = (props: AppPropsType) => {

    return (
        <div className={classes.postsBlock}>
            <h3> my posts </h3>
            <textarea></textarea>
            <button>add post</button>
            {props.postsData?.map((p) => <Post message={p.message} likeCount={p.likesCount}/>)}
        </div>

    );
};

export default MyPosts;