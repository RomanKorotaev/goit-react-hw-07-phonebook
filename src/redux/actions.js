import { createAction } from '@reduxjs/toolkit';



//////// ===========  asyncReduxAction: actions for contacts-operations.js ==========

export const addContactReguest = createAction ('contacts/addContactReguest');
export const addContactSuccess = createAction ('contacts/addContactSuccess');
export const addContactError = createAction ('contacts/addContactError');

export const deleteContactReguest = createAction ('contacts/deleteContactReguest');
export const deleteContactSuccess = createAction ('contacts/deleteContactSuccess');
export const deleteContactError = createAction ('contacts/deleteContactError');


// export const addContact = value => {
//     return {type: 'contact/add',
//             payload: value
//         };
// }


// ------------- Redux Toolkit -------------
///////////// export const addContact = createAction('contact/add');



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


