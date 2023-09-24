import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProfileContainer from '../../profile/profile-container';
import DialogsContainer from '../../dialogs/dialogs-container';
import UsersContainer from '../../users/users-container';
import LoginContainer from '../../login/login-container';
import {News} from '../../news/news';
import {Music} from '../../music/music';
import {Settings} from '../../settings/settings';

export const Routing = () => {
    return (
        <Switch>
            <Route path={`/profile/:id?`} component={ProfileContainer}/>
            <Route exact path={`/`} component={ProfileContainer}/>
            <Route path={'/dialogs'} component={DialogsContainer}/>
            <Route path={'/users'} component={UsersContainer}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
            <Route path={'/login'} component={LoginContainer}/>
        </Switch>
    );
};