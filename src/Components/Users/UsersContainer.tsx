import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import {followUserAC, setUsersAC, UsersType} from '../../redux/user-reducer';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import UsersClass from './UsersClass';

export type UsersContainerType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    users: UsersType[]
}

type MapDispatchToProps = {
    followUserAC: (id: number, checked: boolean) => void
    setUsersAC: (users: UsersType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        followUserAC: (id: number, checked: boolean) => {
            dispatch(followUserAC(id, checked))
        },
        setUsersAC: (users: UsersType[]) => {
            dispatch(setUsersAC(users));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersClass)