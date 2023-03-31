import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import {RootStateType, StateType} from './redux/store';

export type StatePropsType = {
    store: RootStateType,
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
                               element={<Profile postsData={state.profilePage}
                                                 dispatch={props.store.dispatch.bind(props.store)}/>}/>
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
