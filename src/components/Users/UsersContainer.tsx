import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import {
    followUser,
    setTotalCount,
    setUsers,
    toggleFetching,
    toggleUsersPage,
    UsersType
} from '../../redux/user-reducer';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import Users from './Users';

class UsersAPI extends React.Component<UsersContainerType> {
    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(res => {
            this.props.setUsers(res.data.items);
            this.props.setTotalCount((res.data.totalCount / 100))
            this.props.toggleFetching(false)
        })
    }

    onChangePage = (page: number) => {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(res => {
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

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         followUser:followUserAC,
//         // followUser: (id: number, checked: boolean) => {
//         //     dispatch(followUserAC(id, checked))
//         // },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users));
//         },
//         toggleUsersPage: (currentPage:number) => {
//             dispatch(toggleUsersPageAC(currentPage))
//         },
//         setTotalCount:(totalCount:number)=>{
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toggleFetching:(checked:boolean)=>{
//             dispatch(toggleFetchingAC(checked))
//         }
//     }
// }


export default connect(mapStateToProps, {followUser, setUsers, toggleUsersPage, setTotalCount, toggleFetching})(UsersAPI)