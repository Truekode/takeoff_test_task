import { UserActionTypes } from "../../types/users";

export interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export const addContact = (contact: Contact) => {
    return {
        type: UserActionTypes.ADD_USER,
        payload: contact
    }
}

export const changeContact = (contact: Contact) => {
    return {
        type: UserActionTypes.CHANGE_USER,
        payload: contact
    }
}

export const deleteContact = (contact: Contact) => {
    return {
        type: UserActionTypes.DELETE_USER,
        payload: contact
    }
}