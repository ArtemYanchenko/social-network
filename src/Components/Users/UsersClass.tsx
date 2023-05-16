import React from 'react';
import axios from 'axios';
import {UsersContainerType} from './UsersContainer';
import classes from './Users.module.css';


class UsersClass extends React.Component<UsersContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(res => {
            this.props.setUsers(res.data.items);
            this.props.setTotalCount((res.data.totalCount/100))
        })
    }


    addUserHandler = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsers(res.data.items)
        }).catch(e => console.log('error', e))
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (<div>
                <div>
                    {pages.map(page => {
                        const toggleUserPageHandler = (page: number) => {
                            this.props.toggleUsersPage(page)
                            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(res => {
                                this.props.setUsers(res.data.items)
                            })
                        }
                        return (
                            <span className={this.props.currentPage === page ? classes.selectPage : ''}
                                  onClick={() => toggleUserPageHandler(page)}>{page}</span>)
                    })}
                </div>
                <button onClick={this.addUserHandler}>add users
                </button>
                {this.props.users.map(user => {
                    const onClickHandler = () => {
                        this.props.followUser(user.id, !user.followed)
                    }
                    return (
                        <>
                            <div>
                                <button onClick={onClickHandler}>{user.followed ? 'follow' : 'unfollow'}</button>
                            </div>
                            <div>{user.id}</div>
                            <div>{user.followed}</div>
                            <div>{user.status}</div>
                            <div>{user.name}</div>
                        </>
                    )
                })}
            </div>
        )
    }
}


export default UsersClass;