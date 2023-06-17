import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile, UserProfileType} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    userId:string
}

type MapStateToPropsType = {
    profile:UserProfileType
}
type MapDispatchPropsType = {
    setUserProfile:(profile:UserProfileType)=>void
}

type PropsType =  RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchPropsType


class ProfileContainer extends React.Component<PropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        // if (!userId) {
        //     userId = "2";
        // }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    profile: state.profilePage.profile
})


const ProfileContainterWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, ({setUserProfile}))(ProfileContainterWithRouter)