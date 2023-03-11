import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import {AppPropsType} from './index';


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path={'/profile'} element={<Profile postsData={props.postsData}/>}/>
                            <Route path={'/dialogs'} element={<Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>}/>
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
