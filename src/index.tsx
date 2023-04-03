import React from 'react';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {StoreContext} from './StoreContext';
import { store } from './redux/redux-store';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';


    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root') as HTMLElement
    )



reportWebVitals()


