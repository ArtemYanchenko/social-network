import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProfileContainer from '../Profile/ProfileContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';
import News from '../News/News';
import Music from '../Music/Music';
import LoginContainer from '../Login/LoginContainer';

export const Routing = () => {
    return (
        <Switch>
            <Route exact path={`/`} component={ProfileContainer}/>
            <Route path={`/profile/:id?`} component={ProfileContainer}/>
            <Route path={'/dialogs'} component={DialogsContainer}/>
            <Route path={'/users'} component={UsersContainer}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/login'} component={LoginContainer}/>
        </Switch>
    );
};