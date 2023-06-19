import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {userReducer} from './user-reducer';
import {authReducer} from './auth-reducer';
import thunk from 'redux-thunk';

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:userReducer,
    auth:authReducer
})



export const store = createStore(rootReducer,applyMiddleware(thunk));

// @ts-ignore
window.store = store