import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfileTC, UserProfileType} from '../../bll/profile-reducer';
import {AppStateType} from '../../bll/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    id: string
}

type MapStateToPropsType = {
    profile: UserProfileType
    isLoggedIn:boolean
    id:number | null
}
type MapDispatchPropsType = {
    setUserProfileTC: (id: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let id = this.props.match.params.id;
        if(!id){
            id = String(this.props.id)
        }
        this.props.setUserProfileTC(id)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isLoggedIn:state.auth.isLoggedIn,
    id:state.auth.id
})


const ProfileContainterWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, ({setUserProfileTC}))(ProfileContainterWithRouter)