import React, {ChangeEvent, FC, useState} from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostsContainerPropsType} from './MyPostsContainer';
import {CustomButton} from '../../common/custom-button/custom-button';


export const MyPosts: FC<MyPostsContainerPropsType> = ({
                                                           addPost,
                                                           postsData,
                                                           photo
                                                       }) => {
    const [newPostText,setNewPostText] = useState<string>('')

    const addPostHandler = () => {
        addPost(newPostText);
        setNewPostText('')
    }

    const updatePostTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPostText(e.currentTarget.value)
    }

    const mappedPosts = postsData.map((p) => <Post key={p.id} message={p.message} likeCount={p.likesCount} photo={photo}/>)

    return (
        <div className={classes.postsBlock}>
            <div className={classes.addPostFormWrapper}>
                <input placeholder={`What's new?`} value={newPostText}
                       onChange={updatePostTextHandler}
                />
                <CustomButton name="add post" callback={addPostHandler}/>
            </div>

            <div className={classes.postsWrapper}>
                {mappedPosts}
            </div>

        </div>

    );
};

