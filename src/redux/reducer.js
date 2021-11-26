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


const initialState = db;
console.log ('!!!! initialState ', initialState)


let state = initialState;

const contactsReducer = createReducer ( state, {
    [addContactSuccess]:  (state, action) => {
        console.log ("СРАБОТАЛ  редьюсер contact/add")
                        return  [...state, action.payload] 
                    },


    'contact/delete': (state, action) => {
        console.log ("СРАБОТАЛ  редьюсер  contact/delete ")
        return [...state.filter (oneContact =>{ return oneContact.id !== action.payload })]   
                    }
} )


 const filterReducer = createReducer ( state='', {
    'filter/value': (state, action) => {
        console.log ("СРАБОТАЛ редьюсер   filter/value")
                    return action.payload
                    
     }
} )


const loadingReducer = createReducer (false, {

    // [fetchContactReguest]: ()=> true,
    // [fetchContactSuccess]: ()=> false,
    // [fetchContactError]: ()=> false,

    [addContactReguest]: ()=> true,
    [addContactSuccess]: ()=> false,
    [addContactError]: ()=> false,

    // [deleteContactReguest]: ()=> true,
    // [deleteContactSuccess]: ()=> false,
    // [deleteContactError]: ()=> false,
});

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filterValue: filterReducer,
  });
