import React from 'react';
import {connect} from 'react-redux';
import {authTC, logoutTC, setUserData, UserInfoType} from '../../bll/auth-reducer';
import {AppStateType} from '../../bll/redux-store';
import Header from './Header';

type MapStateToPropsType= {
    isLoggedIn:boolean
    login:string | null
}

type MapDispatchToPropsType = {
    authTC:()=>void
    logoutTC:()=>void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.authTC()
    }

    render() {
        return <Header login={this.props.login} isLoggedIn={this.props.isLoggedIn} logoutTC={this.props.logoutTC}/>;
    }
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType =>({isLoggedIn:state.auth.isLoggedIn , login:state.auth.login})


export default connect(mapStateToProps,{authTC,logoutTC})(HeaderContainer)