import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfileTC, UserProfileType} from '../../bll/profile-reducer';
import {AppStateType} from '../../bll/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: UserProfileType
    isLoggedIn:boolean
}
type MapDispatchPropsType = {
    setUserProfileTC: (userId: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setUserProfileTC(userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isLoggedIn:state.auth.isLoggedIn
})


const ProfileContainterWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, ({setUserProfileTC}))(ProfileContainterWithRouter)