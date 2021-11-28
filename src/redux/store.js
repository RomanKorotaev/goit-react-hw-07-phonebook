import { rootReducer} from './reducer'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
 

// const persistConfig = {
//     key: 'hello',
//     storage,
//   }

const myMiddleware = store => next => action => {
  console.log ('МОЯ ПРОСЛОЙКА!', action);
next(action);
}


const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
    myMiddleware
  ];

  // const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore ({
    // reducer:  persistedReducer,   
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

console.log (' Лог store   после Свича: ', store );
console.log (' Лог store.getState()  после Свича: ', store.getState() );

let persistor = persistStore(store);

// export default { store, persistor};


export default  store