import s from "./Contact.module.css";
import React from "react";

import {deleteContactMY} from '../../redux/actions'
import { connect } from "react-redux";

// Прокидывание пропсов по цепочке до "внука": 1:10:00 Репета. Занятие 5. Жизненный цикл 
 function Contact ({name, number, onDelete}) { 

   
        // const {name, number, onDelete} = this.props;
        return ( 
           <div>
                <p> <span> {name} : </span> <span>{number}</span></p >

                <button type="button"
                className ={s.deleteBtn}
                // onClick ={ () => onDeleteContact(id) }
                onClick ={ onDelete } >   Delete </button>
            </div>  
        )
    
}
export default  Contact;
  
// const mapDispatchToProps = dispatch => {
//     return {
//       //Здесь название локальной функции придумывавем сами
//       onDelCont: (id)  => dispatch (deleteContactMY(id)),
//     }
//   } 

//   export default  connect(null, mapDispatchToProps) (Contact)
  
