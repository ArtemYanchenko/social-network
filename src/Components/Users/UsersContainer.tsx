import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import {followUserAC, setUsersAC, UsersType, UserType} from '../../redux/user-reducer';
import {Dispatch} from 'redux';
import Users from './Users';
import {connect} from 'react-redux';

export type UsersContainerType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    users: UserType[]
}

type MapDispatchToProps = {
    followUserAC: (userId: string, checked: boolean) => void
    setUsersAC: (users: UserType[]) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        followUserAC: (userId: string, checked: boolean) => {
            dispatch(followUserAC(userId, checked))
        },
        setUsersAC: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)