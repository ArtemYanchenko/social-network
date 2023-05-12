import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Route, Switch} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Users from './Components/Users/Users';
import UsersContainer from './Components/Users/UsersContainer';

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
