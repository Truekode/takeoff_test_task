import {ModalVisibleTypes, ChangeContact} from "../../types/modal";


export const modalShow = (modalHeading: string) => {
    return {
        type: ModalVisibleTypes.SHOW_MODAL,
        payload: {modalVisible: true, modalHeading: modalHeading}
    }
}

export const modalChangeShow = (modalHeading: string, contact: ChangeContact) => {
    return {
        type: ModalVisibleTypes.SHOW_CHANGE_MODAL,
        payload: {modalVisible: true, modalHeading: modalHeading, contact: contact}
    }
}

export const modalHide = () => {
    return {
        type: ModalVisibleTypes.HIDE_MODAL,
        payload: false
    }
}