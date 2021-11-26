import axios from 'axios'
import actions from './actions'
import { addContactReguest,
    addContactSuccess,
    addContactError,
    deleteContactReguest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactReguest,
    fetchContactSuccess,
    fetchContactError
 }  from './actions'


 const addContact = newContact => dispatch => {

    const newContactwithoutID = {
        name: newContact.name,
        number: newContact.number,
    };
    // НАЧАЛЬНОЕ СОСТОЯНИЕ
    dispatch (addContactReguest);

    axios
        .post('https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/contacts', newContactwithoutID)
        .then (({ data }) =>
        // СОСТОЯНИЕ В СЛУЧАЕ УСПЕХА
                 dispatch ( addContactSuccess (data) ))

        .catch (error=>  dispatch(addContactError ( error ) ) )

}

const deleteContact = contactId => dispatch => {
    dispatch (deleteContactReguest());

    axios.delete(`https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/contacts/${contactId}`)
        .then ( ()=> dispatch (deleteContactSuccess(contactId)) )
        .catch (error => dispatch (deleteContactError (error)) )
}


const fetchContacts = () => dispatch => {
    dispatch (fetchContactReguest() );

    axios
    .get ('https://619a41019022ea0017a7b0ae.mockapi.io/api_phonebook/v1/contacts')
    .then(({ data }) => {
        console.log ("DATA из fetchContacts ", data)
    // СОСТОЯНИЕ В СЛУЧАЕ УСПЕХА
         dispatch ( fetchContactSuccess (data) )
        }
     )
     // СОСТОЯНИЕ В СЛУЧАЕ ОШИБКИ
    .catch(error => dispatch( fetchContactError ( error ) ) );
}


export default {
    addContact,
    deleteContact,
    fetchContacts
    };

