import {ModalAction, ModalVisibleTypes, ModalState} from "../../types/modal";

const initialState: ModalState = {
    modalVisible: false,
    modalHeading: '',
    contact: {
        id: 0,
        name: '',
        email: '',
        phone: ''
    }
}

export const modalReducer = (state = initialState, action: ModalAction):ModalState => {
    switch (action.type) {
        case ModalVisibleTypes.SHOW_MODAL:
            return {...state, modalVisible: action.payload.modalVisible, modalHeading: action.payload.modalHeading}
        case ModalVisibleTypes.SHOW_CHANGE_MODAL:
            return {modalVisible: action.payload.modalVisible, modalHeading: action.payload.modalHeading, contact: action.payload.contact}
        case ModalVisibleTypes.HIDE_MODAL:
            return {modalVisible: action.payload, modalHeading: initialState.modalHeading, contact: initialState.contact}
        default:
            return state
    }
}