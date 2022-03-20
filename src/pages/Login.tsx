import React, {useState} from 'react';
import {Button, FloatingLabel, Form} from 'react-bootstrap';
import {useDispatch} from "react-redux";
import {signIn} from "../store/actions/appAuth";
import {getAuthorization} from "../utils/authorization";

const Login: React.FunctionComponent = () => {
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();
    const handleLogin = async () => {
        const login = await getAuthorization(userName);
        if (login[0]) {
            dispatch(signIn(login[0], login[1]))
        } else {
            alert(`Пользователь ${login[1]} не найден`)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.currentTarget.value)
    }

    return (
        <Form className="form-login">
            <h2>Авторизация</h2>
            <a href="https://jsonplaceholder.typicode.com/users">Пользователи от сюда. Пароль не нужен</a>
            <Form.Group className="col-md-5 mx-auto d-grid gap-3">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Username или Email"
                >
                    <Form.Control
                        value={userName}
                        onChange={handleChange}
                        type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Пароль">
                    <Form.Control type="password" placeholder="Пароль" />
                </FloatingLabel>
                <div className="d-grid gap-2">
                    <Button onClick={handleLogin} variant="primary" size="lg">
                        Войти
                    </Button>
                </div>
            </Form.Group>
        </Form>
    );
};

export default Login;