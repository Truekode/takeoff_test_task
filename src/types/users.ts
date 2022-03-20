
export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    ADD_USER = 'ADD_USER',
    DELETE_USER = 'DELETE_USER',
    CHANGE_USER = 'CHANGE_USER',
}

interface AddUsersAction {
    type: UserActionTypes.ADD_USER;
    payload: any[];
}

interface DeleteUsersSuccessAction {
    type: UserActionTypes.DELETE_USER;
    payload: Contact;
}

interface ChangeUsersErrorAction {
    type: UserActionTypes.CHANGE_USER;
    payload: Contact;
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction | ChangeUsersErrorAction
                         | DeleteUsersSuccessAction | AddUsersAction
