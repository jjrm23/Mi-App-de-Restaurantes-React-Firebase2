import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Puedes mantenerlo o eliminarlo si solo usas main.css
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);