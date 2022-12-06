// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { removeContact } from 'redux/Slice';
import {getContact, getFilter} from 'redux/selectors'

const findContact = (items, filter) => {
 
  if (filter === '') return items;
  const newArray = items.filter(item => {
    const valueToLow = filter.toLowerCase();
    return item.name.toLowerCase().includes(valueToLow);
  });
  console.log(newArray)
  return newArray;
};

export const ContactsList = ({ removeContacts}) => {
  
  
  const [...items] = useSelector(getContact);
  const filter = useSelector(getFilter)
  const actualContacts = findContact(items, filter);
  // const Array = [...actualContacts]

  
   
  return (
    
    <ul>
        {actualContacts.map(contact =>(
        <li  key={contact.id}>
           <span className='contact'>  {contact.name}:   </span>
           <span className='contact'>    {contact.number}: </span>
             
             <button type="button" className='btn'
             onClick={()=> removeContacts()}>
              Remove Contact

             </button>
             </li>
     )  )}

</ul>)}
    
    // ContactsList.propTypes = {
    //   onDelete: PropTypes.func.isRequired,
    //   actualContacts: PropTypes.func.isRequired
    //     }