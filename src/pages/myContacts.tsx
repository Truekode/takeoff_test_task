import React from 'react';
import MyNavbar from "../component/MyNavbar";
import ContactList from "../component/ContactList";
import MyModal from "../component/MyModal";

const MyContacts: React.FunctionComponent = () => {
    return (
        <>
            <MyNavbar/>
            <ContactList/>
            <MyModal/>
        </>
    );
};

export default MyContacts;