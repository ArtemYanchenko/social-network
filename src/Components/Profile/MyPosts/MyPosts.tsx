import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <>
            <textarea></textarea>
            <button>add post</button>
            <div>my posts</div>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </>

    );
};

export default MyPosts;