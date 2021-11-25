import React, { useState} from "react";
import s from "./ContactForm.module.css";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import  {addContact} from '../../redux/actions'
import state from '../../redux/store'

import shortid from 'shortid'

function ContactFormHooks ({onFormSubmit, onAdd, contacts2}) {
 
    const [name, setName] =useState ('');
    const [number, setNumber] =useState ('');


     // Функция о выводе предупреждения, если пользователь хочет добавить контакты, имена которых уже есть в телефонной книге.
  //Её вызов делаем внутри функции сабмита формы formSubmitHandler
  const isExist  = (data) => {
    //из нового полученного объекта с новым контактом берём name переводим в нижний регистр и ищем такие же имена в существующем списке контактов
    
    const  normalizedNewName = data.name.toLowerCase ();
    const tmpArray = contacts2.filter(contact => contact.name.toLowerCase().includes(normalizedNewName));

    if (tmpArray.length!==0) {
      alert (`${tmpArray[0].name} is already in contacts`)
       return true;
      } else {
        return false;
       }
  }


     // Это единый обработчик для разных элементов. Выбираем нужный по атрибуту name (задать каждому элементу свой)
  // и через вычисляемое (диннамическое) свойство объекта присваеваем нужному элементу нужное велью
  const handleChange = (e) => {
    const {name, value} = e.currentTarget;

    switch (name) {
        case "name":
            setName(value);
          break;

          case "number":
            setNumber(value);
          break;

          default:
            return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
   
    // Записываем  переменные имени и телефона, напечатанные в форме, в объект
    const data = {
      id: shortid.generate(),
      name: name,
      number: number,
    }

    // Передаём объект с новыми данными из формы как пареметр функции - для передачи в Арр (поднятие состояния)
    onFormSubmit(data);
    
    if ( isExist(data) ) {
      // если функция isExist возврвтит true, то такой контакт уже есть и мы сразу выходим, ничего не добавляем в список
       return;
          } else {
            // Диспатчим экшен
            onAdd (data);
             
         }    
    // Очищаем поля формы
    reset();
  };


  // Метод очистки полей Формы
  const reset = () => {
    console.log("Сработал    reset ");
    setName('');
    setNumber('');
  };

 


// console.log ('СТЕЙТ state.getState():  ', state.getState() );

    return (
        
        <form onSubmit={handleFormSubmit}>
        
          <label className={s.nameTitle}>
            Name:
            <input
            className={s.inputStyleClass }
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Введите имя"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
        
  
          <label className={s.nameTitle}>
            Number:
            <input
                className={s.inputStyleClass }
                type="tel"
                name="number"
                value={number}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                placeholder="Введите номер: 000-00-00"
                required
            />
                  </label> 
  
          <button className={s.addBtm}  type="submit"> Add contact </button>
        </form>
      );
}


const mapStateToProps = state => { 
  return {contacts2: state.contacts}
}

const mapDispatchToProps = dispatch => {
  return {
    //Здесь название локальной функции придумывавем сами
    onAdd: data => dispatch (addContact(data)),
  }
} 


export default connect(mapStateToProps, mapDispatchToProps) (ContactFormHooks);