import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import {connect} from 'react-redux';
import {AppStateType} from './bll/redux-store';
import {compose} from 'redux';
import {initializeApp} from './bll/app-reducer';
import PreLoader from './components/common/PreLoader';

type MapStateToPropsType = {
    initialized: boolean
    isLoggedIn: boolean
}

type MapDispatchToPropsType = {
    initialize: () => void
}

class App extends Component<MapStateToPropsType & MapDispatchToPropsType> {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.initialized) {
            return <PreLoader/>
        }
        if (!this.props.isLoggedIn) {
            return <LoginContainer/>
        }
        return (
            <div className="App">
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route path={`/profile/:userId?`} component={ProfileContainer}/>
                            <Route path={'/dialogs'} component={DialogsContainer}/>
                            <Route path={'/users'} component={UsersContainer}/>
                            <Route path={'/news'} component={News}/>
                            <Route path={'/music'} component={Music}/>
                            <Route path={'/login'} component={LoginContainer}/>
                        </Switch>
                    </div>

                </div>
            </div>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized,
    isLoggedIn: state.auth.isLoggedIn
})

export const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initialize: initializeApp}))(App)