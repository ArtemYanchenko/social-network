import {AnyAction, combineReducers, createStore, EmptyObject, Store } from "redux";
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {DialogsPageType, ProfilePageType} from './store';


const reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})


export const store: Store<EmptyObject & { dialogsPage: DialogsPageType; profilePage: ProfilePageType }, AnyAction> = createStore(reducers);
