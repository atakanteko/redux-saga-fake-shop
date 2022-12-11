import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { RouterProvider } from "react-router-dom";
import { router } from './routes';
import './App.css'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={ router }>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);


