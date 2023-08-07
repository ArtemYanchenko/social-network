import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {setUserProfileTC, UserProfileType} from '../../bll/profile-reducer';
import {AppStateType} from '../../bll/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component<PropsType> {
    // id = this.props.match.params.id;
    refreshProfile() {
        let id = this.props.match.params.id;
        if (!id) {
            id = String(this.props.id)
        }
        this.props.setUserProfileTC(id)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.id != prevProps.match.params.id){
            this.refreshProfile();
        }
    }

    render() {
        return <Profile profile={this.props.profile} isOwner={!this.props.match.params.id}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isLoggedIn: state.auth.isLoggedIn,
    id: state.auth.id
})


const ProfileContainterWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, ({setUserProfileTC}))(ProfileContainterWithRouter);

//types
type PathParamsType = {
    id: string
}

type MapStateToPropsType = {
    profile: UserProfileType
    isLoggedIn: boolean
    id: number | null
}
type MapDispatchPropsType = {
    setUserProfileTC: (id: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchPropsType
