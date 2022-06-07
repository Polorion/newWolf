import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './redax/redaxState';
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
const reRenderAllPage = (state) => {

    root.render(
            <Provider store={Store}>
                <App />
            </Provider>
    )
    ;
}
reRenderAllPage()


Store.subscribe(() => {
    reRenderAllPage()
})


reportWebVitals();
