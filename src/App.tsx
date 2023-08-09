import React, {Component, ComponentType} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {withRouter} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import {connect} from 'react-redux';
import {AppStateType} from './bll/redux-store';
import {compose} from 'redux';
import {initializeApp} from './bll/app-reducer';
import {Preloader} from './components/common/preloader/preloader';
import {Routing} from './components/common/routing/routing';
import News from './components/News/News';

class App extends Component<PropsType> {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="App">
                    <HeaderContainer/>
                    {this.props.isLoggedIn && <Navbar/>}
                    <div className="app-wrapper-content">
                        {this.props.isLoggedIn ? <Routing/> : <LoginContainer/>}

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