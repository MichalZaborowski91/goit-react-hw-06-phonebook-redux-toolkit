import { ContactForm } from 'components/contactForm/contactForm';
import { ContactList } from 'components/contactList/contactList';
import css from './phonebook.module.css';

export const Phonebook = () => {
  return (
    <div>
      <div className={css.phonebook}>
        <h1 className={css.header}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.contacts}>
        <h2 className={css.header}>Contacts</h2>
        <ContactList />
      </div>
    </div>
  );
};
