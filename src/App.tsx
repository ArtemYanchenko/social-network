import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, Switch} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
    return (
        <div className="App">
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path={'/profile'} component={Profile}/>
                        <Route path={'/dialogs'} component={DialogsContainer}/>
                        <Route path={'/users'} component={UsersContainer}/>
                        <Route path={'/news'} component={News}/>
                        <Route path={'/music'} component={Music}/>
                    </Switch>
                </div>

            </div>
        </div>
    );
}

export default App;
