import React from 'react';
import axios from 'axios';
import {UsersContainerType} from './UsersContainer';


class UsersClass extends React.Component<UsersContainerType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsersAC(res.data.items)
        })
    }

    addUserHandler = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsersAC(res.data.items)
        }).catch(e=>console.log('error',e))
    }

    render() {
        return (<div>
                <button onClick={this.addUserHandler}>add users</button>
                {this.props.users.map(user => {
                    const onClickHandler = () => {
                        this.props.followUserAC(user.id, !user.followed)
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