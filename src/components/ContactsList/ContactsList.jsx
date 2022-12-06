import PropTypes from 'prop-types';




export const ContactsList = ({onDelete, actualContacts}) => {
  // const removeContact = contactID => {
  //   const newArray = contacts.filter((item) => item.id !== contactID)
  //   setContacts(newArray) przerobic na delete !!!!!
  //     }

  
    return (
    
    <ul>
        {actualContacts().map(contact =>(
        <li  key={contact.id}>
           <span className='contact'>  {contact.name}:   </span>
           <span className='contact'>    {contact.number} </span>
             
             <button type="button" className='btn'
             onClick={()=> onDelete(contact.id)}>
              Remove Contact

             </button>
             </li>
     )  )}

</ul>)}
    
    ContactsList.propTypes = {
      onDelete: PropTypes.func.isRequired,
      actualContacts: PropTypes.func.isRequired
        }