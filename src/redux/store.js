import {reducer, rootReducer} from './reducer'
// import {createStore} from "redux";
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import {
     persistStore,
      persistReducer,
      FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

const persistConfig = {
    key: 'hello',
    storage,
  }


const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ];

  // const persistedReducer = persistReducer(persistConfig, reducer)

  const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store=  createStore (reducer);

const store = configureStore ({
    reducer:  persistedReducer,
    // reducer: reducer,
    
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

console.log (' Лог store   после Свича: ', store );
console.log (' Лог store.getState()  после Свича: ', store.getState() );

let persistor = persistStore(store);

export default { store, persistor};
