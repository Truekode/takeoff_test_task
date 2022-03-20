import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/actions/fetchUsers";
import ContactItem from "./ContactItem";
import {useSearchContacts} from "../hooks/useSearchContact";
import {Dropdown, DropdownButton, FormControl, InputGroup} from "react-bootstrap";

const ContactList: React.FunctionComponent = () => {
    const {users, error, loading} = useTypedSelector(state => state.contact)
    const dispatch = useDispatch();
    const [searchType, setSearchType] = useState('name');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchHeading, setSearchHeading] = useState('Имени');
    const searchContacts = useSearchContacts(users, searchType, searchQuery);
    const selectTypeSearch = (type: string, heading: string): void => {
        setSearchType(type);
        setSearchHeading(heading);
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading){
        return <h1>Loading</h1>
    }

    if (error) {
        return <h1>error</h1>
    }

    return (
        <div className="contactsList">
            <InputGroup className="mb-3">
                <DropdownButton
                    variant="outline-secondary"
                    title={`Поиск по ${searchHeading}`}
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item onClick={() => selectTypeSearch('name', 'Имени')} >Имени</Dropdown.Item>
                    <Dropdown.Item onClick={() => selectTypeSearch('email', 'Email')} >Email</Dropdown.Item>
                    <Dropdown.Item onClick={() => selectTypeSearch('phone', 'Номеру телефона')} >Номеру телефона</Dropdown.Item>
                </DropdownButton>
                <FormControl onChange={(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                    setSearchQuery(event.target.value.toLowerCase())
                }} />
            </InputGroup>
            {searchContacts.map(user =>
                <ContactItem key={user.id} user={user} />
                )
            }
        </div>
    );
};

export default ContactList;