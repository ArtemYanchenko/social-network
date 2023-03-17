import ReactDOM from 'react-dom/client';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {addPost, changeTitleTextArea, StateType} from './redux/state';



export let rerenderEntireTree = (state:StateType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} changeTitleTextArea={changeTitleTextArea}/>
    </BrowserRouter>
    </React.StrictMode>
);
}