
import s from "./App.module.css";
import React, {useState } from "react";

import ContactFormHooks from './components/ContactForm/ContactFormHooks';
import ContactsListHooks from './components/ContactsList/ContactListHooks'
import FilterHooks from "./components/Filter/FilterHooks";

function AppHooks () {
    
  return (
    <div className={s.container}>
       
       <h1 className={s.titlePhonebook}>Phonebook</h1>
      
       <ContactFormHooks  />

      <h2 className={s.contactsTitle}>Contacts</h2>

          <FilterHooks/>

          <ContactsListHooks/>         

    </div>
  );

}


export default AppHooks;
