import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // ✅ This applies Tailwind styles
import App from './App'; // ✅ Your main component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
