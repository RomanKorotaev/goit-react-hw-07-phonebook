import db from '../db.json'
import { createReducer } from '@reduxjs/toolkit'
import {combineReducers} from "redux";
import action from './actions'

import { addContactReguest,
    addContactSuccess,
    addContactError,
    deleteContactReguest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactReguest,
    fetchContactSuccess,
    fetchContactError }  from './actions'

    import {fetchContactsV2} from './contacts-operations'
    

// Первоначальное значение списка контактов -пустой массив.
const state=[];

const contactsReducer = createReducer ( state, {

    //Поскольку при первой загрузке стейт с контактами пустой, то старое состоянее не распыляем, а просто поверх него записываем payload
    // [fetchContactSuccess]:  (state, action) => { 
    //     console.log ('TEST: action.payload after - fetchContactSuccess', action.payload)
    //     return action.payload},

    [fetchContactsV2.fulfilled]: (_, action) => { 
        return action.payload
    },

    [addContactSuccess]:  (state, action) => {
                return  [...state, action.payload] 
            },

    // 'contact/delete': (state, action) => {
        [deleteContactSuccess]: (state, action) => {
             return [...state.filter (oneContact =>{ return oneContact.id !== action.payload })]   
                    }
} )


// Первоначальное значение фильтра -пустая строка.
const stateFilter='';

 const filterReducer = createReducer ( stateFilter, {
    'filter/value': (_, action) => {
                    return action.payload
                    
     }
} )


const loadingReducer = createReducer (false, {

    // [fetchContactReguest]: ()=> true,
    // [fetchContactSuccess]: ()=> false,
    //  [fetchContactError]: ()=> false,

    [fetchContactsV2.panding] :()=> true,
     [fetchContactsV2.rejected]: ()=> false,

    [addContactReguest]: ()=> true,
    [addContactSuccess]: ()=> false,
    [addContactError]: ()=> false,

    [deleteContactReguest]: ()=> true,
    [deleteContactSuccess]: ()=> false,
    [deleteContactError]: ()=> false,
});

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filterValue: filterReducer,
    loading: loadingReducer
  });
