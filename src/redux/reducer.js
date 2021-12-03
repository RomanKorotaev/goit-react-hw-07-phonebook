import { createReducer } from '@reduxjs/toolkit'
import {combineReducers} from "redux";


    import {fetchContactsV2, addContactV2, deleteContactV2} from './contacts-operations'
    

// Первоначальное значение списка контактов -пустой массив.
const state=[];

const contactsReducer = createReducer ( state, {

    //Поскольку при первой загрузке стейт с контактами пустой, то старое состоянее не распыляем, а просто поверх него записываем payload
    [fetchContactsV2.fulfilled]: (_, action) => { 
        return action.payload
    },

    [addContactV2.fulfilled]: (state, action) => {
            return  [...state, action.payload] 
    },


    [deleteContactV2.fulfilled]: (state, action) => {
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


    [fetchContactsV2.panding] :()=> true,
    [fetchContactsV2.rejected]: ()=> false,
    
    [addContactV2.pandin]: ()=>true,
    [addContactV2.fulfilled]: ()=>false,
    [addContactV2.rejected]: ()=>false,

    [deleteContactV2.pandin]: ()=>true,
    [deleteContactV2.fulfilled]: ()=>false,
    [deleteContactV2.rejected]: ()=>false,
});

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filterValue: filterReducer,
    loading: loadingReducer
  });
