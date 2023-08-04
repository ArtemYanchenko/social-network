import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {userReducer} from './user-reducer';
import {authReducer} from './auth-reducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {appReducer} from './app-reducer';

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    app:appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage:userReducer,
    auth:authReducer,
    form:formReducer
})



const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type RootStateType = ReturnType<typeof rootReducer>
export type RootState =ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootStateType, unknown, AnyAction>
// @ts-ignore
window.store = store