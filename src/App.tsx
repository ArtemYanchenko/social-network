import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import {DialogsPageType, ProfilePageType, RootStateType, StateType} from './redux/store';
import {AnyAction, EmptyObject, Store} from 'redux';

export type StatePropsType = {
    store: Store<EmptyObject & { dialogsPage: DialogsPageType; profilePage: ProfilePageType }, AnyAction>,
}

function App(props: StatePropsType) {
    const state = props.store.getState();

    return (
        <div className="App">
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile store={props.store}/>}/>
                        <Route path={'/dialogs'} element={<Dialogs dialogsPageData={state.dialogsPage}
                                                                   dispatch={props.store.dispatch.bind(props.store)}/>
                        }/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
