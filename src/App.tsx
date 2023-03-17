import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import {changeTitleTextArea, StateType} from './redux/state';

export type StatePropsType = {
    state: StateType,
    addPost: (titlePost: string) => void
    changeTitleTextArea:(newTitle:string) =>void
}

function App(props: StatePropsType) {
    return (
        <div className="App">
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile postsData={props.state.profilePage} addPost={props.addPost} changeTitleTextArea={props.changeTitleTextArea}/>}/>
                        <Route path={'/dialogs'} element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                                   messageData={props.state.dialogsPage.messageData}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
