import React from 'react';
import {Button, Card} from "react-bootstrap";
import {FaPhoneAlt, FaUserAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {useDispatch} from "react-redux";
import {deleteContact} from "../store/actions/addContact";
import {modalChangeShow} from "../store/actions/modalVisible";
import {useTypedSelector} from "../hooks/useTypedSelector";

export interface userItem {
    id: number;
    name: string;
    email: string;
    phone: string;
}

interface ContactItemProps {
    key: number;
    user: userItem;
}

const ContactItem: (props: ContactItemProps) => JSX.Element = (props: ContactItemProps) => {
    const userList = useTypedSelector(state => state.contact.users)
    const dispatch = useDispatch()

    const removeContact = () => {
        dispatch(deleteContact(props.user))
    }

    const changeContact = () => {
        dispatch(modalChangeShow('Изменить контакт', props.user))

    }

    return (
        <Card>
            <Card.Header>
                <FaUserAlt />
                {props.user.name}
            </Card.Header>
            <Card.Body>
                <div>
                    <Card.Title>
                        <MdEmail/>
                        <a className="card__link" href={`mailto:${props.user.email}`}>{props.user.email}</a>
                    </Card.Title>
                    <Card.Title>
                        <FaPhoneAlt/>
                        <a className="card__link" href={`tel:${props.user.phone}`}>{props.user.phone}</a>
                    </Card.Title>
                </div>
                <div className="btn-wrp">
                    <Button onClick={removeContact} variant="danger" >Удалить</Button>
                    <Button onClick={changeContact} variant="primary">Изменить</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ContactItem;