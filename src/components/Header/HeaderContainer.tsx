import React from 'react';
import {connect} from 'react-redux';
import {authTC, setUserData, UserInfoType} from '../../bll/auth-reducer';
import {AppStateType} from '../../bll/redux-store';
import Header from './Header';

type MapStateToPropsType= {
    isLogedIn:boolean
    login:string | null
}

type MapDispatchToPropsType = {
    setUserData:(data:UserInfoType)=>void
    authTC:()=>void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.authTC()
    }

    render() {
        return <Header login={this.props.login} />;
    }
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType =>({isLogedIn:state.auth.isLoggedIn , login:state.auth.login})


export default connect(mapStateToProps,{setUserData,authTC})(HeaderContainer)