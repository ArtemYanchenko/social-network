import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePageType} from '../../../redux/state';



const MyPosts = (props: ProfilePageType) => {

    return (
        <div className={classes.postsBlock}>
            <h3> my posts </h3>
            <textarea></textarea>
            <button>add post</button>
            {props.postsData.map((p) => <Post message={p.message} likeCount={p.likesCount}/>)}
        </div>

    );
};

export default MyPosts;