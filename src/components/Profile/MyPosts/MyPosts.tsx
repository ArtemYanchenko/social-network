import React, {ChangeEvent, FC} from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostsContainerPropsType} from './MyPostsContainer';
import {CustomButton} from '../../common/custom-button/custom-button';


export const MyPosts: FC<MyPostsContainerPropsType> = ({
                                                           addPost,
                                                           updatePostText,
                                                           postsData,
                                                           messageForNewPost,
                                                           photo
                                                       }) => {

    const addPostHandler = () => {
        addPost();
    }

    const updatePostTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updatePostText(e.currentTarget.value)
    }

    const mappedPosts = postsData.map((p) => <Post message={p.message} likeCount={p.likesCount} photo={photo}/>)

    return (
        <div className={classes.postsBlock}>
            <div className={classes.addPostFormWrapper}>
                <input placeholder={`What's new?`} value={messageForNewPost}
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

