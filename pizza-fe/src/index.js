import WrapperComponent from 'Router/Wrapper/WrapperComponent';
import React from 'react';
import ReactDOM from 'react-dom';
import RouteComponent from 'Router/RouteComponent';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <RouteComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
