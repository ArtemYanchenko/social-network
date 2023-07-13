import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {userReducer} from './user-reducer';
import {authReducer} from './auth-reducer';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:userReducer,
    auth:authReducer,
    form:formReducer
})



export const store = createStore(rootReducer,applyMiddleware(thunk));
export type RootStateType = ReturnType<typeof rootReducer>
export type RootState =ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store