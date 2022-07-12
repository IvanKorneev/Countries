import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from "./components/App";
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store";
import ErrorBoundry from "./components/error-boundry";


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ErrorBoundry>
    </Provider>
    ,
    document.getElementById('root')
);
