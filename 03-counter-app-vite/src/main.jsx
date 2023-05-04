import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
// import { CounterApp } from './CounterApp';
import './styles.css';
import { CounterApp2 } from './CounterApp2';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CounterApp value={20} /> */}
        <CounterApp2 />
    </React.StrictMode>
);