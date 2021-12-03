import axios from 'axios'

 import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchContactsV2 = createAsyncThunk (
    'contacts/fetchContacts',
    async ()=> {
        const contacts = await  axios.get ('https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/contacts');
        console.log ("777 fetchContactsV2 = ", fetchContactsV2 )
        return contacts.data;
    } )

export const addContactV2 = createAsyncThunk (
    'contacts/addContact',
    async (newContact)=> {
        const contacts = await  axios.post('https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/contacts', newContact);
        console.log ("777 addContactV2 = ", addContactV2 )
        return contacts.data;
    } )


export const deleteContactV2 = createAsyncThunk (
    'contacts/deleteContact',
    async (contactId)=> {
        const contacts = await  axios.delete(`https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/contacts/${contactId}`);
        console.log ("777 deleteContactV2 = ", deleteContactV2 )
        return contactId;
    } )



 
// export const fetchContacts = () => dispatch => {
//     dispatch (fetchContactReguest() );

//     axios
//     .get ('https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/contacts')
//     .then(({ data }) => {
//         console.log ("DATA из fetchContacts ", data)
//     // СОСТОЯНИЕ В СЛУЧАЕ УСПЕХА
//          dispatch ( fetchContactSuccess (data) )
//         }
//      )
//      // СОСТОЯНИЕ В СЛУЧАЕ ОШИБКИ
//     .catch(error => dispatch( fetchContactError ( error ) ) );
// }

// Вариант вышеуказанной функции с фетчем, с синтаксисом async/await
// export const fetchContacts = () => async  dispatch => {
//     dispatch (fetchContactReguest() );

//     try {
//     const {data} = await  axios.get ('https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/contacts')
//     dispatch ( fetchContactSuccess (data) )

//     } catch (error) {
//         dispatch( fetchContactError ( error ) );
//     }
// }
