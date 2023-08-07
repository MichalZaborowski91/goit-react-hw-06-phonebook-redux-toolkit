import { combineReducers } from 'redux';
import Notiflix from 'notiflix';

const initialState = JSON.parse(localStorage.getItem('contacts'));

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/ADD':
      const newContact = action.payload;
      const existedContact = state.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      );
      if (existedContact) {
        Notiflix.Notify.warning(`Contact ${newContact.name} already exists.`);
        return state;
      } else {
        const newStateAdd = [...state, newContact];
        localStorage.setItem('contacts', JSON.stringify(newStateAdd));
        return newStateAdd;
      }
    case 'contacts/DELETE':
      const newStateDelete = state.filter(
        contact => contact.id !== action.payload
      );
      localStorage.setItem('contacts', JSON.stringify(newStateDelete));
      return newStateDelete;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
