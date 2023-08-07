import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getContacts } from 'redux/selectors';
import css from './contactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const viewContacts = () => {
    if (filter.length === 0) {
      return contacts;
    }
    return contacts.filter(
      contact => contact.name.toLowerCase().indexOf(filter) >= 0
    );
  };

  return (
    <div>
      <div>
        <form className={css.searchNameBox}>
          <label htmlFor="Find contacts by name" className={css.labelInput}>
            Find contacts by name
            <input
              className={css.input}
              type="text"
              name="filter"
              placeholder="Search by name"
              title="Search contacts by name, only small letters by default"
              value={filter}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
      <ol>
        {viewContacts().map(contact => (
          <li key={contact.id} className={css.listItem}>
            {contact.name}: {contact.number}
            <button
              onClick={() => handleDelete(contact.id)}
              className={css.deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
