import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cabecalho from './component/Cabecalho';
import Card from './component/Card';

ReactDOM.render(
  <React.StrictMode>
    <Cabecalho/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
