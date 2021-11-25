import React from "react";
import s from "./ContactsList.module.css";
import PropTypes from 'prop-types';
import ContactHooks from '../Contact/ContactHooks'
import state from '../../redux/store'

import {deleteContactMY} from '../../redux/actions'
import { connect } from "react-redux";




function ContactsListHooks ({ contacts, onDelCont,  filterValue }) {

  const getVisibleContact = () => {
    //Приводим значение фильтра к нижнему регистру (и в функции проверки имена тоже будем приводить к нижнему регистру)
    const  normalizedFilter = filterValue.toLowerCase ();

    //Используем метод Array.filter() c MDN. Проверяем есть ли значение из фильтра в массиве контактов (ищем по значению имени)
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }


let visibleContacts = getVisibleContact();



  // console.log ( 'Лог стейта из ContactsList  - state.getState () ', state.getState () );

  // console.log ( 'Лог стейта из ContactsList  -  visibleContacts ', visibleContacts );
  

    return (
        <ul className= {s.ContactsListStyle}>
              {visibleContacts.length<1
                ?   ( <p className={s.item}> List of contacts is empty </p> )
                :   ( visibleContacts.map(({id, name, number}) => (
                        
                      <li  className= {s.item}  key = {id}>
                            <ContactHooks name={name} number ={number} onDelete = {()=>onDelCont(id)} />
                      </li>
                )))
            }
        </ul>
      );
}

ContactsListHooks.propTypes = {
 
    state: PropTypes.arrayOf (
      // Объект с определённой структурой
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ), 
  };

  const mapStateToProps = state => { 

    return {  contacts: state.contacts,
              filterValue:state.filterValue
           }

}

const mapDispatchToProps = dispatch => {
  return {
    //Здесь название локальной функции придумывавем сами
    onDelCont: (id)  => dispatch (deleteContactMY(id)),
  }
} 

  export default connect(mapStateToProps, mapDispatchToProps) (ContactsListHooks);
  