import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getContact, getFilter } from 'redux/selectors';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

const findContact = (items, filter) => {
  if (filter === '') return items;
  const newArray = items.filter(item => {
    const valueToLow = filter.toLowerCase();
    return item.name.toLowerCase().includes(valueToLow);
  });
  console.log(newArray);
  return newArray;
};

export const ContactsList = () => {
  const items = useSelector(getContact);
  const filter = useSelector(getFilter);
  const actualContacts = findContact(items, filter);

  return (
    <ul>
      {actualContacts.map(contact => (
        <li key={contact.id}>
          <ContactsItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};

findContact.propTypes = {
  items: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired,
};
