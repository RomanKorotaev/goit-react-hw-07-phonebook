import { createAction } from '@reduxjs/toolkit';



//////// =========== Асинхронные экшены  asyncReduxAction: actions for contacts-operations.js ==========

export const addContactReguest = createAction ('contacts/addContactReguest');
export const addContactSuccess = createAction ('contacts/addContactSuccess');
export const addContactError = createAction ('contacts/addContactError');

export const deleteContactReguest = createAction ('contacts/deleteContactReguest');
export const deleteContactSuccess = createAction ('contacts/deleteContactSuccess');
export const deleteContactError = createAction ('contacts/deleteContactError');



// ------------- Redux Toolkit -------------
// export const deleteContactMY = createAction('contact/delete');


// ------------- Redux Toolkit -------------  
export const setFilter = createAction('filter/value');


