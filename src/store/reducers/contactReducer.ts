import {UserAction, UserActionTypes, UserState} from "../../types/users";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const contactReducer = (state = initialState, action: UserAction):UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {users: [], loading: true, error: null}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {users: action.payload, loading: false, error: null}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {users: [], loading: false, error: action.payload}
        case UserActionTypes.ADD_USER:
            return {users: [action.payload, ...state.users], loading: false, error: null}
        case UserActionTypes.DELETE_USER:
            return {users: state.users.filter(c => c.id !== action.payload.id), loading: false, error: null}
        case UserActionTypes.CHANGE_USER:
            return {users: state.users.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                } else {
                    return item;
                }
                }), loading: false, error: null}
        default:
            return state
    }
}