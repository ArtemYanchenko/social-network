import React from 'react';
import {addPostAC, PostsDataType} from '../../../bll/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../bll/redux-store';
import {Dispatch} from 'redux';
import {MyPosts} from './my-posts';

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        postsData: state.profilePage.postsData,
        photo:state.profilePage.profile.photos.large
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {

        addPost: (text:string) => {
            dispatch(addPostAC(text))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


//types
type MapStatePropsType = {
    postsData: PostsDataType[]
    photo:string | null
}
type MapDispatchPropsType = {
    addPost: (text:string) => void
}

export type MyPostsContainerPropsType = MapStatePropsType & MapDispatchPropsType
