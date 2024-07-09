import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ToastBar, Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster>
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            animation: t.visible
              ? 'custom-enter 3s ease'
              : 'custom-exit 1s ease',
          }}
        />
      )}
    </Toaster>


    
    <App />
  </React.StrictMode>
);
