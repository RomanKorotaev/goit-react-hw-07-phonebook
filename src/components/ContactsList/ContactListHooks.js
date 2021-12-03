import React, {useEffect} from "react";
import s from "./ContactsList.module.css";
import PropTypes from 'prop-types';
import ContactHooks from '../Contact/ContactHooks'

import { getContacts, getFilterValue, getLoading } from '../../redux/selectors'

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchContactsV2, deleteContactV2} from '../../redux/contacts-operations'; 

 
function ContactsListHooks () {

    //  ================ REDUX ================ //
    const dispatch = useDispatch (); 

    // Переписываем на селекторы:
    // const contacts = useSelector (state  => state.contacts);
    // const filterValue = useSelector (state  => state.filterValue);
    // const isLoadingContacts = useSelector (state  => state.loading);
    const contacts = useSelector (getContacts);
    const filterValue = useSelector (getFilterValue);
    const isLoadingContacts = useSelector (getLoading);
                
    //   ================ REDUX ================ //


  useEffect(() => {
    //Первая загрузка. Вытаскиваем из бекенда имеющиеся там контакты
    dispatch (fetchContactsV2())
  
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
                              <ContactHooks name={name} number ={number} onDelete = {()=>dispatch(deleteContactV2(id))} />
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


  export default (ContactsListHooks);