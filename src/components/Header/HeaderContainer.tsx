import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setLogedIn, setUserData, UserInfoType} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import Header from './Header';

type MapStateToPropsType= {
    isLogedIn:boolean
    login:string | null
}

type MapDispatchToPropsType = {
    setUserData:(data:UserInfoType)=>void
    setLogedIn:(value:boolean)=>void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true})
            .then((res)=>{
                debugger
                this.props.setUserData(res.data.data)
                this.props.setLogedIn(true)
            })
    }

    render() {
        return <Header login={this.props.login} />;
    }
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType =>({isLogedIn:state.auth.isLoggedIn , login:state.auth.login})


export default connect(mapStateToProps,{setUserData,setLogedIn})(HeaderContainer)