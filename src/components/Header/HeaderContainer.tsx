import React from 'react';
import {connect} from 'react-redux';
import {authTC, setLogedIn, setUserData, UserInfoType} from '../../bll/auth-reducer';
import {AppStateType} from '../../bll/redux-store';
import Header from './Header';
import {authAPI} from '../../dal/api';

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
        // authAPI.authMe()
        //     .then(data=>{
        //         this.props.setUserData(data.data)
        //         this.props.setLogedIn(true)
        //     })
    }

    render() {
        return <Header login={this.props.login} />;
    }
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType =>({isLogedIn:state.auth.isLoggedIn , login:state.auth.login})


export default connect(mapStateToProps,{setUserData,authTC})(HeaderContainer)