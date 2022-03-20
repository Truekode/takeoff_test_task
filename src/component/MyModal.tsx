import React from 'react';
import FormContact from "./FormContact";
import {Modal} from "react-bootstrap";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {modalHide} from "../store/actions/modalVisible";

const MyModal = () => {
    const show = useTypedSelector(state => state.modal.modalVisible);
    const modalHeading = useTypedSelector(state => state.modal.modalHeading);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(modalHide())
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{modalHeading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormContact/>
            </Modal.Body>
        </Modal>
    );
};

export default MyModal;