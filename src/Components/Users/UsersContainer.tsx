import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import {followUserAC, setTotalCountAC, setUsersAC, toggleUsersPageAC, UsersType} from '../../redux/user-reducer';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import UsersClass from './UsersClass';

export type UsersContainerType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    users: UsersType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

type MapDispatchToProps = {
    followUser: (id: number, checked: boolean) => void
    setUsers: (users: UsersType[]) => void
    toggleUsersPage:(currentPage:number)=>void
    setTotalCount:(totalCount:number)=>void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        followUser: (id: number, checked: boolean) => {
            dispatch(followUserAC(id, checked))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users));
        },
        toggleUsersPage: (currentPage:number) => {
            dispatch(toggleUsersPageAC(currentPage))
        },
        setTotalCount:(totalCount:number)=>{
            dispatch(setTotalCountAC(totalCount))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersClass)