import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        {id: 1, likesCount: 5, message:"hi, my first post" },
        {id: 2, likesCount: 10, message:"i am fine" },
    ]
    return (
        <div className={classes.postsBlock}>
            <h3> my posts </h3>
            <textarea></textarea>
            <button>add post</button>
            {postsData.map( (p)=>  <Post message={p.message} likeCount={p.likesCount}/>) }
        </div>

    );
};

export default MyPosts;