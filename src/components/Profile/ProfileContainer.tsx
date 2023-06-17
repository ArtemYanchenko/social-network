import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res)=>{
                this.props.setUserProfile(res.data)
            })
    }

    render() {
      return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state:AppStateType) => ({
    profile:state.profilePage.profile
})

export default connect(mapStateToProps,({setUserProfile}))(ProfileContainer)