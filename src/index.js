import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppHooks from './AppHooks'
import reportWebVitals from './reportWebVitals';
import store from './redux/store'

import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

console.log (" store : ", store );


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <AppHooks/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
