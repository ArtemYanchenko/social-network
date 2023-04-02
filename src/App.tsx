import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import {DialogsPageType, ProfilePageType} from './redux/store';
import {AnyAction, EmptyObject, Store} from 'redux';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

// export type StatePropsType = {
//     store: Store<EmptyObject & { dialogsPage: DialogsPageType; profilePage: ProfilePageType }, AnyAction>,
// }

function App() {
    // const state = props.store.getState();

    return (
        <div className="App">
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/dialogs'} element={<DialogsContainer/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
