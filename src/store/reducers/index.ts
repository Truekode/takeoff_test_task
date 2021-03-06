import {combineReducers} from "redux";
import {contactReducer} from "./contactReducer";
import {modalReducer} from "./modalReducer";
import {appReducer} from "./appReducer";


export const rootReducer = combineReducers({
    contact: contactReducer,
    modal: modalReducer,
    app: appReducer
})

export type RootState = ReturnType<typeof rootReducer>