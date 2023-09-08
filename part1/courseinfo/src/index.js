import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let counter = 0

const refresh =() =>{
    ReactDOM.createRoot(document.getElementById('root')).render(<App counter={counter} />);

}

setInterval(() =>{
    refresh()
    counter += 1
}, 1000)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
