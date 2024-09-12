// import React, { StrictMode, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { AdminFlagProvider } from './components/providers/AdminFlagProvider.jsx';
import { App } from './App.jsx';
import './index.css';
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>
);


// reportWebVitals(console.log);
