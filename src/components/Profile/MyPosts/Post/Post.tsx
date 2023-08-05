import React, {FC} from 'react';
import classes from './Post.module.css';

type Props = {
    message: string
    likeCount:number
    photo:string | null
}

export const Post:FC<Props> = ({message,likeCount,photo}) => {
    return (
        <div className={classes.item}>

            <img src={photo || "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1678108303~exp=1678108903~hmac=7aa8cde4054338765d1f742abe6d6352da726ad344ad4649ceb2042dbf007dde"} alt="" className={classes.avatar}/>
            <p>{message}</p>

            <p>- like: {likeCount}</p>
        </div>
    );
};
