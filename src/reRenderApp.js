import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

const reRenderAllPage = (States) => {
    root.render(
        <React.StrictMode>
            <App AppState={States}/>
        </React.StrictMode>
    );
}


export default reRenderAllPage

reportWebVitals();
