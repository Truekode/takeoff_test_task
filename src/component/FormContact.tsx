import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addContact, changeContact} from "../store/actions/addContact";
import {modalHide} from "../store/actions/modalVisible";
import {useTypedSelector} from "../hooks/useTypedSelector";



const FormContact: React.FunctionComponent = () => {
    const contactStore = useTypedSelector(state => state.modal.contact);
    const modalHeading = useTypedSelector(state => state.modal.modalHeading);
    const [contact, setContact] = useState(contactStore);

    const dispatch = useDispatch();

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (modalHeading === 'Добавить контакт'){
            dispatch(addContact({...contact, id: Date.now()}));
            dispatch(modalHide())
        }
        else {
            dispatch(changeContact(contact));
            dispatch(modalHide());
        }
    }

    const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContact(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }}))
    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Имя</Form.Label>
                <Form.Control
                    name="name"
                    value={contact.name}
                    onChange={changeInputHandler}
                    type="text"
                    placeholder="John Graham"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    name="email"
                    value={contact.email}
                    onChange={changeInputHandler}
                    type="text"
                    placeholder="name@example.com"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Телефон</Form.Label>
                <Form.Control
                    name="phone"
                    value={contact.phone}
                    onChange={changeInputHandler}
                    type="text"
                    placeholder="+7 999 999 99 99"
                />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button type="submit" variant="primary" size="lg">
                    {modalHeading}
                </Button>
            </div>
        </Form>
    );
};

export default FormContact;