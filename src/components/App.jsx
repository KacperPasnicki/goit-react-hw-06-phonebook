import React, { useEffect} from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from "./Form/Form";
// import { nanoid } from 'nanoid'
import { Filter } from './Filter';

import { useDispatch,  } from 'react-redux';
import {  newInitialState, removeContact } from 'redux/Slice';
 


export const App =({contact}) => {
  const dispatch = useDispatch()
  // const contacts = useSelector(getContact)
   useEffect(() => {


    const storage = JSON.stringify(localStorage.getItem('items'))
    if (storage  === null) {
      dispatch(newInitialState(
        [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]))}
      else
   { dispatch(newInitialState(storage))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])


  const removeContacts = () =>dispatch(removeContact(contact.id))
// useEffect(() => {
        
//       const LScontacts = contacts
//     const json = JSON.stringify(LScontacts)
//     localStorage.setItem('contacts', json)
//   },[contacts])


 

  // const handleSubmit = e => {
  //   e.preventDefault();
   
  //   const form = e.currentTarget;
  //   const name = form.elements.name.value
  //   const number = form.elements.number.value;
  //   const newContact = { id: nanoid(8), name: name, number: number };
  //   const nameArray = contacts.map(({name}) =>name)
  //   if (nameArray.includes(name)) {
  //     alert(`${name} is already in contacts !`)
  //   }else {
  //     dispatch(addContact(name, number))
    

    
  //   console.log(name, number);

  //   //  this.props.onSubmit({ ...this.state });

  //   form.reset();
  // }};



  
  
  ;
  
  // const findContact = () => {
  //   const newArray = contacts.filter(contact => {
  //     const valueToLow = filter.toLowerCase();
  //     return contact.name.toLowerCase().includes(valueToLow);
  //   });
  //   return newArray;
  // };
// const removeContact = () =>dispatch(removeContact(contact.id))
 
//   const removeContact = contactID => {
// const newArray = contacts.filter((item) => item.id !== contactID)
// setContacts(newArray)
//   }
   
    
  return (
      <div className='phonebook'
      
      >
        <h1>Phonebook</h1>
        <Form />
       
        <h2>Contacts:</h2>
      <Filter />
      <ContactsList
       onDelete={removeContacts} 
      />
      </div>
    );
  
}

