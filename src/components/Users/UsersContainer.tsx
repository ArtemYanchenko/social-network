import React from 'react';
import {AppStateType} from '../../bll/redux-store';
import {
    followUser,
    setTotalCount,
    setUsers,
    toggleFetching,
    toggleFollowing,
    toggleUsersPage,
    UsersType
} from '../../bll/user-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import {usersAPI} from '../../dal/api';

class UsersContainer extends React.Component<UsersContainerType> {
    componentDidMount() {
        this.props.toggleFetching(true)
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalCount((data.totalCount / 50))
                this.props.toggleFetching(false)
            })
    }

    onChangePage = (page: number) => {
        this.props.toggleFetching(true)
        usersAPI.getUsers(this.props.pageSize, page)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleFetching(false)
            })
    }

    render() {
        return <Users users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      isFetching={this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
                      followUser={this.props.followUser}
                      setUsers={this.props.setUsers}
                      setTotalCount={this.props.setTotalCount}
                      toggleUsersPage={this.props.toggleUsersPage}
                      toggleFetching={this.props.toggleFetching}
                      toggleFollowing={this.props.toggleFollowing}
                      onChangePage={this.onChangePage}
        />
    }
}

export type UsersContainerType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:number[]
}

type MapDispatchToProps = {
    followUser: (id: number, checked: boolean) => void
    setUsers: (users: UsersType[]) => void
    toggleUsersPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleFetching: (checked: boolean) => void
    toggleFollowing:(userId: number,isFetching:boolean) => void
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
    followUser,
    setUsers,
    toggleUsersPage,
    setTotalCount,
    toggleFetching,
    toggleFollowing
})(UsersContainer)