import { createSlice } from "@reduxjs/toolkit";
import { ContactsList } from "components/ContactsList/ContactsList";
import {nanoid} from 'nanoid'


const initialState = {
    contacts: [
         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
     ], filter: ''
     
 };

 const ContactsSlice = createSlice( {
    name: 'Contacts',
    initialState,
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload)
            localStorage.setItem('contacts', JSON.stringify(state.items))
        },
        removeContact(state, action) {
            let newArray = state.contacts.filter((item) => item.id !== action.payload)

        },
        filterContact(state, action) {

        }
    }})

    
 export const {
        addContact,
        removeContact,
        filterContact, 

    } = ContactsSlice.actions;

    export const ContactsReducer = ContactsSlice.reducer;
