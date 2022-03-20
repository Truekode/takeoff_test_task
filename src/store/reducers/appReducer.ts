import {AppAction, AppState, AppStateAuth} from "../../types/app";

const initialState: AppState = {
    isAuth: !!localStorage.getItem('isAuth'),
    authAs: localStorage.getItem('authAs')
}

export const appReducer = (state = initialState, action: AppAction):AppState => {
    switch (action.type) {
        case AppStateAuth.APP_SIGN_IN:
            return {isAuth: action.payload.isAuth, authAs: action.payload.authAs}
        case AppStateAuth.APP_LOG_OUT:
            return {isAuth: action.payload.isAuth, authAs: action.payload.authAs}
        default:
            return state
    }
}