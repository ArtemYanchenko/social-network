import React, {FC} from 'react';
import style from './Post.module.css';
import {SvgLike} from '../../../../assets/icons/svg-like';

type Props = {
    message: string
    likeCount:number
    photo:string | null
}

export const Post:FC<Props> = ({message,likeCount,photo}) => {
    return (
        <div className={style.item}>

            <img src={photo || "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1678108303~exp=1678108903~hmac=7aa8cde4054338765d1f742abe6d6352da726ad344ad4649ceb2042dbf007dde"} alt="" className={style.avatar}/>
            <p>{message}</p>
            <div className={style.likeWrapper}>
                <SvgLike/>{likeCount}
            </div>

        </div>
    );
};
