import React from 'react';
import {AppStateType} from '../../bll/redux-store';
import {
    followUser,
    setTotalCount,
    setUsers,
    toggleFetching,
    toggleUsersPage,
    UsersType
} from '../../bll/user-reducer';
import {connect} from 'react-redux';
import axios from 'axios';
import Users from './Users';

class UsersAPI extends React.Component<UsersContainerType> {
    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,{withCredentials:true})
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalCount((res.data.totalCount / 50))
                this.props.toggleFetching(false)
            })
    }

    onChangePage = (page: number) => {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`,{withCredentials:true})
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.toggleFetching(false)
            })
    }

    render() {
        return <Users users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      isFetching={this.props.isFetching}
                      followUser={this.props.followUser}
                      setUsers={this.props.setUsers}
                      setTotalCount={this.props.setTotalCount}
                      toggleUsersPage={this.props.toggleUsersPage}
                      toggleFetching={this.props.toggleFetching}
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
}

type MapDispatchToProps = {
    followUser: (id: number, checked: boolean) => void
    setUsers: (users: UsersType[]) => void
    toggleUsersPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleFetching: (checked: boolean) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    followUser,
    setUsers,
    toggleUsersPage,
    setTotalCount,
    toggleFetching
})(UsersAPI)