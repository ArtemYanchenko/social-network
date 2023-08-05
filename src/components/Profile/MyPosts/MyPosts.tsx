import React, {ChangeEvent, FC} from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostsContainerPropsType} from './MyPostsContainer';
import {CustomButton} from '../../common/custom-button/custom-button';
import {reduxForm, stopSubmit} from 'redux-form';
import {Input} from 'antd';


export const MyPosts:FC<MyPostsContainerPropsType> = ({addPost,updatePostText,postsData,messageForNewPost,photo} ) => {

    const addPostHandler = () => {
        stopSubmit('');
        addPost();
    }

    const updatePostTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updatePostText(e.currentTarget.value)
    }

    const mappedPosts = postsData.map((p) => <Post message={p.message} likeCount={p.likesCount} photo={photo}/>)

    return (
        <div className={classes.postsBlock}>
            <h3> My Posts </h3>
                 <input value={messageForNewPost}
                           onChange={updatePostTextHandler}
                 />
                <CustomButton name='add post' callback={addPostHandler}/>
            {mappedPosts}
        </div>

    );
};

export const MyPostsWithReduxForm = reduxForm<FormDataType,any>({form:'add-post'})(MyPosts)

type FormDataType = {postText:string}
type MyPostsFormKeyValuesType = keyof FormDataType