export type ChangeContact = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface ModalAddState {
    modalVisible: boolean;
    modalHeading: string;
}

export interface ModalState {
    modalVisible: boolean;
    modalHeading: string;
    contact: ChangeContact;
}

export enum ModalVisibleTypes {
    SHOW_MODAL = 'SHOW_MODAL',
    SHOW_CHANGE_MODAL = 'SHOW_CHANGE_MODAL',
    HIDE_MODAL = 'HIDE_MODAL',
}


interface ShowModalAdd {
    type: ModalVisibleTypes.SHOW_MODAL;
    payload: ModalAddState;
}

interface ShowModalChange {
    type: ModalVisibleTypes.SHOW_CHANGE_MODAL;
    payload: ModalState;
}

interface HideModalAdd {
    type: ModalVisibleTypes.HIDE_MODAL;
    payload: boolean;
}


export type ModalAction = ShowModalAdd | HideModalAdd | ShowModalChange
