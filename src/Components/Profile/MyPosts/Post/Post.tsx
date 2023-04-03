import React from 'react';
import classes from './Post.module.css';

export type PropsType = {
    message: string,
    likeCount:number
}

const Post = (props: PropsType) => {
    return (
        <div className={classes.item}>

            <img src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1678108303~exp=1678108903~hmac=7aa8cde4054338765d1f742abe6d6352da726ad344ad4649ceb2042dbf007dde" alt="" className={classes.avatar}/>
            <p>{props.message}</p>

            <p>- like: {props.likeCount}</p>
        </div>
    );
};

export default Post;