import React from 'react';
import {AppStateType} from '../../bll/redux-store';
import {
    followUserTC,
    getUsersTC,
    setTotalCount,
    toggleUsersPage,
    unfollowUserTC,
    UsersType
} from '../../bll/user-reducer';
import {connect} from 'react-redux';
import {Users} from './users';

class UsersContainer extends React.Component<UsersContainerType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.pageSize, this.props.currentPage);
    }

    onChangePage = (page: number) => {
        this.props.getUsersTC(this.props.pageSize, page)
    }

    render() {
        return <Users users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      isFetching={this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
                      followUserTC={this.props.followUserTC}
                      unfollowUserTC={this.props.unfollowUserTC}
                      toggleUsersPage={this.props.toggleUsersPage}
                      onChangePage={this.onChangePage}
        />
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    toggleUsersPage,
    setTotalCount,

    getUsersTC,
    followUserTC,
    unfollowUserTC,
})(UsersContainer)

//types
export type UsersContainerType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchToProps = {
    toggleUsersPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void

    followUserTC: (id: number) => void
    unfollowUserTC: (id: number) => void
    getUsersTC: (pageSize: number, currentPage: number) => void
}
