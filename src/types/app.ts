export interface AppState {
    isAuth: boolean;
    authAs: string | null;
}

export enum AppStateAuth {
    APP_SIGN_IN = 'APP_SIGN_IN',
    APP_LOG_OUT = 'APP_LOG_OUT'
}


interface signIn {
    type: AppStateAuth.APP_SIGN_IN;
    payload: AppState;
}

interface logOut {
    type: AppStateAuth.APP_LOG_OUT;
    payload: AppState;
}



export type AppAction = signIn | logOut
