import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import {StateType} from './redux/state';

type StatePropsType = {
    state: StateType
}

function App(props: StatePropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path={'/profile'} element={<Profile postsData={props.state.profilePage.postsData}/>}/>
                            <Route path={'/dialogs'} element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData} messageData={props.state.dialogsPage.messageData}/>}/>
                            <Route path={'/news'} element={<News/>}/>
                            <Route path={'/music'} element={<Music/>}/>
                        </Routes>
                    </div>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
