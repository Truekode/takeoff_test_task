import {AppStateAuth} from "../../types/app";

export const signIn = (isAuth: boolean, user: string) => {
    localStorage.setItem('isAuth', `${isAuth}`);
    localStorage.setItem('authAs', `${user}`);
    return {
        type: AppStateAuth.APP_SIGN_IN,
        payload: {isAuth, authAs: user}
    }
}

export const logOut = (isAuth: boolean, user: string) => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('authAs');
    return {
        type: AppStateAuth.APP_LOG_OUT,
        payload: {isAuth, authAs: user}
    }
}