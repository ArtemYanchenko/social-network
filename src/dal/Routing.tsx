import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProfileContainer from '../components/Profile/ProfileContainer';
import DialogsContainer from '../components/Dialogs/DialogsContainer';
import UsersContainer from '../components/Users/UsersContainer';
import News from '../components/News/News';
import Music from '../components/Music/Music';
import LoginContainer from '../components/Login/LoginContainer';

export const Routing = () => {
    return (
        <Switch>

            <Route path={`/`} component={ProfileContainer}/>
            <Route path={`/profile/:userId?`} component={ProfileContainer}/>
            <Route path={'/dialogs'} component={DialogsContainer}/>
            <Route path={'/users'} component={UsersContainer}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/login'} component={LoginContainer}/>
        </Switch>
    );
};