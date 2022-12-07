import { useDispatch } from "react-redux"
import { removeContact } from "redux/Slice"
import PropTypes from 'prop-types';

export const ContactsItem = ({contact}) => {
const dispatch = useDispatch()
    const removeContacts = () =>{dispatch(removeContact(contact.id))}

return (
    <>
    <span className='contact'>{contact.name} : {contact.number}</span>
    <button type="button" className='btn'
             onClick={()=> removeContacts()}>
              Remove Contact

             </button>
    </>
)

}

ContactsItem.propTypes = {
    contact: PropTypes.object.isRequired,
    
      }