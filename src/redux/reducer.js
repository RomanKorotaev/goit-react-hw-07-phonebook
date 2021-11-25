import db from '../db.json'
import { createReducer } from '@reduxjs/toolkit'
import {combineReducers} from "redux";



// // Записываем стартовые значения контактов в localStorage
// localStorage.setItem('contactsLocalSt_db',   JSON.stringify( [...db] ) );
 

// const initialState ={
//     contacts: JSON.parse(localStorage.getItem('contactsLocalSt_db')),
//     filterValue:'',
// }

       
// // ------------- Redux Toolkit -------------
// let state = initialState;

//     export const reducer = createReducer ( state, {
//     'contact/add':  (state, action) => {
//                         return {...state, contacts: [...state.contacts, action.payload] } 
//                     },
//     'contact/delete': (state, action) => {
//           //Удаляем в localStorage выбранный контакт 
//           localStorage.setItem('contactsLocalSt_db',   JSON.stringify( [...state.contacts.filter (oneContact =>{ return oneContact.id !== action.payload })] ) );
//                         return {...state,
//                             contacts: [...state.contacts.filter (oneContact =>{ return oneContact.id !== action.payload })]
//                         };
//                     },
//     'filter/value': (state, action) => {
//                     return {...state,
//                         filterValue: action.payload
//                     } 
//      }
// } )



///////////////////////---------
// Записываем стартовые значения контактов в localStorage
localStorage.setItem('contactsLocalSt_db',   JSON.stringify( [...db] ) );
 

const initialState = JSON.parse(localStorage.getItem('contactsLocalSt_db'));
    


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
