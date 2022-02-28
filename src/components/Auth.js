import React from 'react'
import {Container, Form, Modal} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = ({show, onHide}) =>  {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            style={{backgroundColor: 'rgba(0,0,0,0.7)'}}
        >
            <Modal.Header>
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            </Modal.Header>
            <Modal.Body>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Эл.почта"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Пароль"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                        }
                        <Button className={"mt-3"}
                        >
                            {isLogin ? 'Войти': 'Регистрация'}
                        </Button>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
};

export default Auth