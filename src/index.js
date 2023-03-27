import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));  //---> Punto de entrada de la aplicación
root.render(


  <React.StrictMode>
    <App />
  </React.StrictMode>
);  //---> En el punto de entrada se cargan los modulos y todo lo demás.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// To run the project: npm start on folder.