import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <>
            <div>my posts</div>
            <textarea></textarea>
            <button>add post</button>
            <Post message="hi, my first post" likeCount={5}/>
            <Post message="i am fine" likeCount={10}/>

        </>

    );
};

export default MyPosts;