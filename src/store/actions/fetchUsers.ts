import {Dispatch} from "redux";
import {UserAction, UserActionTypes} from "../../types/users";
import axios from "axios";
import {Contact} from "./addContact";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({
                type: UserActionTypes.FETCH_USERS
            })
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data.map((item: Contact) => {
                    return {
                        id: item.id,
                        name: item.name,
                        email: item.email,
                        phone: item.phone,
                    }
                })
            })
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Ошибка загрузки'
            })
        }
    }
}