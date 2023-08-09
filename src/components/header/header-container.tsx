import React from 'react';
import {connect} from 'react-redux';
import {authTC, logoutTC} from '../../bll/auth-reducer';
import {AppStateType} from '../../bll/redux-store';
import {Header} from './header';
import {setNightMode} from '../../bll/app-reducer';

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.authTC()
    }

    render() {
        return <Header login={this.props.login} photo={this.props.photo} nightMode={this.props.nightMode} setNightMode={this.props.setNightMode} isLoggedIn={this.props.isLoggedIn} logoutTC={this.props.logoutTC}/>;
    }
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType =>({isLoggedIn:state.auth.isLoggedIn , login:state.auth.login, photo:state.auth.photo,nightMode:state.app.nightMode})

export default connect(mapStateToProps,{authTC,logoutTC,setNightMode})(HeaderContainer)

//types
type MapStateToPropsType= {
    isLoggedIn:boolean
    login:string | null
    photo:string | null
    nightMode:boolean
}

type MapDispatchToPropsType = {
    authTC:()=>void
    logoutTC:()=>void
    setNightMode:(mode:boolean) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType
