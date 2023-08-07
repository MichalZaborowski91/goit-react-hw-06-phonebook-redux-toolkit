import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/ADD',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/DELETE',
    payload: id,
  };
};
