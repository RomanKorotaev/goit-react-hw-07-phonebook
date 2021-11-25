
import s from "./App.module.css";
import React, {useState } from "react";

import ContactFormHooks from './components/ContactForm/ContactFormHooks';
import ContactsListHooks from './components/ContactsList/ContactListHooks'
import FilterHooks from "./components/Filter/FilterHooks";
import db from './db.json'


function AppHooks () {

// Записываем стартовые значения контактов в СТЕЙТ нашего компонента
  localStorage.setItem('contactsLocalSt_db',   JSON.stringify( [...db] ) );


const [ contacts, setContacts] = useState ( JSON.parse(localStorage.getItem('contactsLocalSt_db')) );


    const formSubmitHandler = (data) => {
        console.log("formSubmitHandler");
        console.log("Новый контакт ( data ) : ", data);
    
        const newContact = {
          id: data.id,
          name: data.name,
          number: data.number
        }


      // Обновляем прежнее состояние массива через распыление
      setContacts ([newContact, ...contacts ])
    };
     
      // Записываем новый массив контактов в localStorage
      localStorage.setItem('contactsLocalSt_db',   JSON.stringify( contacts)  );
    
  return (
    <div className={s.container}>
       
       <h1 className={s.titlePhonebook}>Phonebook</h1>
      
       <ContactFormHooks onFormSubmit={formSubmitHandler} />

      <h2 className={s.contactsTitle}>Contacts</h2>

          <FilterHooks/>

          <ContactsListHooks />         

    </div>
  );

}

export default AppHooks;