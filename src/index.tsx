import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss'
import store from './store/store'
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <Provider store={store}>
            <React.StrictMode>
              <App/>
          </React.StrictMode>
        </Provider>
    )
  } else {
    console.error("Element with id 'root' not found");
  }