import React, {Component, ComponentType} from 'react';
import './app.module.css';
import {Navbar} from './components/navbar/navbar';
import {withRouter} from 'react-router-dom';
import HeaderContainer from './components/header/header-container';
import LoginContainer from './components/login/login-container';
import {connect} from 'react-redux';
import {AppStateType} from './bll/redux-store';
import {compose} from 'redux';
import {initializeApp} from './bll/app-reducer';
import {Routing} from './components/common/routing/routing';
import {News} from './components/news/news';
import style from './app.module.css'


class App extends Component<PropsType> {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        // if (!this.props.initialized) {
        //     return <Preloader/>
        // }
        return (
            <div className={style.app}>
                <HeaderContainer/>
                {!this.props.isLoggedIn && <Navbar/>} {/* DELETE ! */}
                <div className={style.appWrapperContent}>
                    {!this.props.isLoggedIn ? <Routing/> : <LoginContainer/>} {/* DELETE ! */}

                </div>
                <News/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized,
    isLoggedIn: state.auth.isLoggedIn
})

export const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initialize: initializeApp}))(App)

//types
type MapStateToPropsType = {
    initialized: boolean
    isLoggedIn: boolean
}

type MapDispatchToPropsType = {
    initialize: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType