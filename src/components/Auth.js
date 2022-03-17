import React from 'react'
import {Container, Form, Modal} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "../style.css";
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
            <Modal.Header style={{backgroundColor:"#E5E5E5"}}>
                <h2 className="m-auto text_3">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            </Modal.Header>
            <Modal.Body>
                <Form className="d-flex flex-column "
                      style={{ borderRadius:25}}
                >
                    <Form.Control
                        style={{ borderRadius:25}}
                        className="mt-4"
                        placeholder="Эл.почта"
                    />
                    <Form.Control
                        style={{ borderRadius:25}}
                        className="mt-4"
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
                       <Row className = "justify-content-center"> <Button className= "mt-5 mb-4"
                                style={{backgroundColor:"#4985FF", borderRadius:25, width: 250}}
                        >
                            {isLogin ? 'Войти': 'Регистрация'}
                        </Button>
                       </Row>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
};

export default Auth