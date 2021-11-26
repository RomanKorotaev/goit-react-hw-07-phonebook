import React, {useEffect} from "react";
import s from "./ContactsList.module.css";
import PropTypes from 'prop-types';
import ContactHooks from '../Contact/ContactHooks'

import contactsOperations from '../../redux/contacts-operations'
import { connect } from "react-redux"; 





function ContactsListHooks ({ contacts, onDeleteContact,  filterValue, fetchContacts,  isLoadingContacts }) {

  useEffect(() => {
    //Первая загрузка. Вытаскиваем из бекенда имеющиеся там контакты
    fetchContacts ()
  // loadFirstContacts();
  console.log ('СРАБОТАЛ useEffect один раз при первой загрузке компонента ContactsList')
  }, []);


  const getVisibleContact = () => {
    //Приводим значение фильтра к нижнему регистру (и в функции проверки имена тоже будем приводить к нижнему регистру)
    const  normalizedFilter = filterValue.toLowerCase ();

    //Используем метод Array.filter() c MDN. Проверяем есть ли значение из фильтра в массиве контактов (ищем по значению имени)
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }


let visibleContacts = getVisibleContact();



    return (
      <div>
        { isLoadingContacts &&  <p className={s.item}> Wait for loading, please... </p> }

          <ul className= {s.ContactsListStyle}>
                {visibleContacts.length<1
                  ?   ( <p className={s.item}> List of contacts is empty </p> )
                  :   ( visibleContacts.map(({id, name, number}) => (
                          
                        <li  className= {s.item}  key = {id}>
                              <ContactHooks name={name} number ={number} onDelete = {()=>onDeleteContact(id)} />
                        </li>
                  )))
              }
          </ul>
        </div>
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
              filterValue:state.filterValue,
              /////////////
              isLoadingContacts: state.loading
           }
}


const mapDispatchToProps = dispatch => {
  return {
    //Здесь название локальной функции придумывавем сами
    
    onDeleteContact: (id)  => dispatch ( contactsOperations.deleteContact(id)),
   fetchContacts: (id)  => dispatch ( contactsOperations.fetchContacts(id)),
  }
} 

  export default connect(mapStateToProps, mapDispatchToProps) (ContactsListHooks);
  