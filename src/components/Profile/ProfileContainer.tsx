import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile, UserProfileType} from '../../bll/profile-reducer';
import {AppStateType} from '../../bll/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {profileAPI} from '../../dal/api';


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: UserProfileType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        profileAPI.getProfilePage(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})


const ProfileContainterWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, ({setUserProfile}))(ProfileContainterWithRouter)