import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import {RootStateType, StateType} from './redux/state';

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
                               element={<Profile postsData={state.profilePage} addPost={props.store.dispatch.bind(props.store)}
                                                 changeTitleTextArea={props.store.dispatch.bind(props.store)}/>}/>
                        <Route path={'/dialogs'} element={<Dialogs dialogsData={state.dialogsPage.dialogsData}
                                                                   messageData={state.dialogsPage.messageData}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
