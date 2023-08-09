import React, {FC, useState} from 'react';
import style from './post.module.css';
import {SvgLike} from '../../../../assets/icons/svg-like';
import {SvgNotLike} from '../../../../assets/icons/svg-not-like';

export const Post: FC<Props> = ({message, likeCount, photo}) => {
    const [likes, setLikes] = useState(likeCount);
    const [liked, setLiked] = useState(false);
    return (
        <div className={style.item}>
            <img
                src={photo || 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1678108303~exp=1678108903~hmac=7aa8cde4054338765d1f742abe6d6352da726ad344ad4649ceb2042dbf007dde'}
                alt="" className={style.avatar}/>
            <p>{message}</p>
            <div className={style.likeWrapper} onClick={() => {
                if (liked) {
                    setLikes(likes - 1);
                    setLiked(false);
                } else {
                    setLikes(likes + 1);
                    setLiked(true)
                }
            }}>
                {liked ? <SvgLike/> : <SvgNotLike/>} {likes}
            </div>

        </div>
    );
};

//types
type Props = {
    message: string
    likeCount: number
    photo: string | null
}