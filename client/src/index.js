import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import logger from 'redux-logger';

let middlewares = [thunk];
middlewares.push(logger);

export const store = createStore(reducers, applyMiddleware(thunk, logger));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);


