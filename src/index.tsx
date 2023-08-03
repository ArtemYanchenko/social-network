import React from 'react';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import  {AppContainer} from './App';
import {store} from './bll/redux-store';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>, document.getElementById('root') as HTMLElement
)


// reportWebVitals()


