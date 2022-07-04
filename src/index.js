import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// underneath here is where we'll be making some changes!
// this is for our practice w. turboEncabulator dev.

import 'bootstrap/dist/css/bootstrap.css'; //LOL MAKE SURE YOU USE .CSS
// note semicolons added out of FEAR and OPPRESSIVE HERITAGE
import Counter from './components/counter'; //EXTENSIONS ARE DOOOOOPE AUTOCOMPLETE FTW

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
