import React from "react";
import s from "./Filter.module.css";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {setFilter} from '../../redux/actions'


function FilterHooks ({ handleFilter3}) {


  const changeFilter3 = e => {
    handleFilter3 (e.currentTarget.value)
  }

    return (
        <label className = {s.filterTitle}>
              Find contacts by name:
                <input
                className ={s.filterInputStyle}
                  type="text"
                  name="filter"

                onChange={ changeFilter3 } 
                
                  placeholder="Введите имя для поиска контакта"
              />
            </label> 
    )
}



  const mapStateToProps = state => { 

    return {contacts: state.contacts,
            filterValue:state.filterValue
    }
}


   const mapDispatchToProps = dispatch => {
    return {
      //Здесь название локальной функции придумывавем сами
      handleFilter3: data => dispatch (setFilter(data))
    }
  } 
   

export default connect(mapStateToProps, mapDispatchToProps) (FilterHooks);
