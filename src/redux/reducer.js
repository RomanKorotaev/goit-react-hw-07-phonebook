import db from '../db.json'
import { createReducer } from '@reduxjs/toolkit'
import {combineReducers} from "redux";


// Записываем стартовые значения контактов в localStorage
// localStorage.setItem('contactsLocalSt_db',   JSON.stringify( [...db] ) );
 
// Инициализируем стартовые значения данными из локал сториджа
// const initialState = JSON.parse(localStorage.getItem('contactsLocalSt_db'));
    
const initialState = db;
console.log ('!!!! initialState ', initialState)


let state = initialState;

const contactsReducer = createReducer ( state, {
    'contact/add':  (state, action) => {
        console.log ("!!!!сработал редьюсер 'contact/add")
                        return  [...state, action.payload] 
                    },
    'contact/delete': (state, action) => {
          //Удаляем в localStorage выбранный контакт 
          localStorage.setItem('contactsLocalSt_db',   JSON.stringify( [...state.filter (oneContact =>{ return oneContact.id !== action.payload })] ) );
                        return [...state.filter (oneContact =>{ return oneContact.id !== action.payload })]   
                    }
} )


    export const filterReducer = createReducer ( state='', {
   
    'filter/value': (state, action) => {
                    return action.payload
                    
     }
} )

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filterValue: filterReducer,
  });
