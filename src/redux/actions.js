import { createAction } from '@reduxjs/toolkit';

// export const addContact = value => {
//     return {type: 'contact/add',
//             payload: value
//         };
// }


// ------------- Redux Toolkit -------------
export const addContact = createAction('contact/add');


// export const deleteContactMY = id => {
//     return {type: 'contact/delete',
//             payload: id}
//     };

// ------------- Redux Toolkit -------------
export const deleteContactMY = createAction('contact/delete');


//     export const setFilter = value => {
//         return {type: 'filter/value',
//                 payload: value.trim()}
//         };

// ------------- Redux Toolkit -------------  
export const setFilter = createAction('filter/value');

