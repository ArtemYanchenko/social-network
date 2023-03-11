import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostsDataType = {
    id: number,
    likesCount: number,
    message: string
}
export type DialogsDataType = {
    id: number,
    name: string
}

export type MessageDataType = {
    id: number,
    message: string
}

export type AppPropsType = {
    postsData?: PostsDataType[],
    dialogsData?: DialogsDataType[],
    messageData?: MessageDataType[]
}

const postsData = [
    {id: 1, likesCount: 5, message: 'hi, my first post'},
    {id: 2, likesCount: 10, message: 'i am fine'},
]

const dialogsData = [
    {id: 1, name: 'Artem'},
    {id: 2, name: 'Fedor'},
    {id: 3, name: 'Petya'},
    {id: 4, name: 'Ivan'},
    {id: 5, name: 'Nikola'},
]

const messageData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'yo'},
    {id: 3, message: 'how are you?'},
    {id: 4, message: 'fine'},
]

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App postsData={postsData} dialogsData={dialogsData} messageData={messageData}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
