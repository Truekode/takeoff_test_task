import React from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {modalShow} from "../store/actions/modalVisible";
import {logOut} from "../store/actions/appAuth";
import {useTypedSelector} from "../hooks/useTypedSelector";

const MyNavbar: React.FunctionComponent = () => {
    const authAs = useTypedSelector(state => state.app.authAs)
    const dispatch = useDispatch();
    const handleShow = () => {
        dispatch(modalShow('Добавить контакт'))
    }

    return (
        <Navbar>
            <Container>
                <Navbar.Brand>My Contacts</Navbar.Brand>
                <Button onClick={handleShow} variant="primary">Добавить контакт</Button>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: {authAs}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            <Button onClick={() => dispatch(logOut(false, ''))} variant="danger">LogOut</Button>
        </Navbar>
    );
};

export default MyNavbar;