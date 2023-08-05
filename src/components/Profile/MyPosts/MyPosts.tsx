import React, {ChangeEvent, FC} from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostsContainerPropsType} from './MyPostsContainer';


export const MyPosts:FC<MyPostsContainerPropsType> = ({addPost,updatePostText,postsData,messageForNewPost,photo} ) => {

    const addPostHandler = () => {
        addPost();
    }

    const updatePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updatePostText(e.currentTarget.value)
    }

    const mappedPosts = postsData.map((p) => <Post message={p.message} likeCount={p.likesCount} photo={photo}/>)

    return (
        <div className={classes.postsBlock}>
            <h3> My Posts </h3>
            <textarea value={messageForNewPost}
                      onChange={updatePostTextHandler}
            />
            <button onClick={addPostHandler}>add post</button>
            {mappedPosts}
        </div>

    );
};
