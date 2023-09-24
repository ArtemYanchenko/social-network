import React from 'react';
import './index.css';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import  {AppContainer} from './app';
import {store} from './bll/redux-store';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>, document.getElementById('root') as HTMLElement
)


// reportWebVitals()


