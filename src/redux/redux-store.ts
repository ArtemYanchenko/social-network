import {AnyAction, combineReducers, createStore, EmptyObject, Store } from "redux";
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {DialogsPageType, ProfilePageType} from './store';


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer
})


export let store: Store<EmptyObject & { dialogsPage: DialogsPageType; profilePage: ProfilePageType }, AnyAction>;
store = createStore(reducers);
