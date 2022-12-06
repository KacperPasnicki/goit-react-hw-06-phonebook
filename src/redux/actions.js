import { createAction } from "@reduxjs/toolkit";


export const addContact = createAction("reducer/addContact")
 export const removeContact = createAction("reducer/removeContact")
 export const filterContact = createAction("reducer/filterContact")

//  export default {addContact,removeContact, filterContact }