import React, {ChangeEvent, FC, useState} from 'react';
import s from './my-posts.module.css';
import {Post} from './post/post';
import {MyPostsContainerPropsType} from './my-posts-container';
import {CustomButton} from '../../common/custom-button/custom-button';


export const MyPosts: FC<MyPostsContainerPropsType> = ({
                                                           addPost,
                                                           postsData,
                                                           photo
                                                       }) => {
    const [newPostText, setNewPostText] = useState<string>('')

    const addPostHandler = () => {
        addPost(newPostText);
        setNewPostText('')
    }

    const updatePostTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPostText(e.currentTarget.value)
    }

    const mappedPosts = postsData.map((p) => <Post key={p.id} message={p.message} likeCount={p.likesCount}
                                                   photo={photo}/>)

    return (
        <div className={s.postsBlock}>
            <div className={s.addPostFormWrapper}>
                <input placeholder={`What's new?`} value={newPostText}
                       onChange={updatePostTextHandler}
                />
                <CustomButton name="Add post" callback={addPostHandler}/>
            </div>
            <div className={s.postsWrapper}>
                {mappedPosts}
            </div>
        </div>

    );
};

