import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../bll/redux-store';
import {loginTC, LoginValues} from '../../bll/auth-reducer';
import {Redirect} from 'react-router-dom';
import {LoginWithReduxForm} from './LoginForm';
import styles from './Login.module.css'

type MapStateToPropsType = {
    isLoggedIn: boolean
}

type MapDispatchToPropsType = {
    login: (values: LoginValues) => void
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({isLoggedIn:state.auth.isLoggedIn})


type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: LoginValues) => {
        props.login(formData)
        debugger
    }
    if (props.isLoggedIn) return <Redirect to={'/profile'}/>

    return (
        <div className={styles.loginWrapper}>
            <LoginWithReduxForm onSubmit={onSubmit} captcha={''}/>
        </div>
    );
};

export default connect(mapStateToProps, {login:loginTC})(Login)