import db from '../db.json'
import { createReducer } from '@reduxjs/toolkit'
import {combineReducers} from "redux";


const initialState = db;
console.log ('!!!! initialState ', initialState)


let state = initialState;

const contactsReducer = createReducer ( state, {
    'contact/add':  (state, action) => {
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

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filterValue: filterReducer,
  });
