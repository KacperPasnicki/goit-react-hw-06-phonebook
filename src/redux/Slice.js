import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = {
  items: [],
  filter: '',
};

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
        localStorage.setItem('items', JSON.stringify(state.items));
      },
      prepare(name, number) {
        return {
          payload: { id: nanoid(8), name, number },
        };
      },
    },
    newInitialState(state, action) {
      state.items = action.payload;
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },

    removeContact(state, action) {
      let newArray = state.items.filter(
        contact => contact.id !== action.payload
      );
      state.items = newArray;
      localStorage.setItem('items', JSON.stringify(state.items));
      // state.splice(id, 1);
    },
  },
});

export const {
  addContact,
  removeContact,
  filterContact,
  prepare,
  newInitialState,
} = ContactsSlice.actions;

export const ContactsReducer = ContactsSlice.reducer;
