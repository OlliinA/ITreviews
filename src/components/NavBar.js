import React, {useContext}  from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import logo from "../assets/Logo.png"
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    return (
        <Navbar  bg="dark" variant="dark">
            <Container>
                <NavLink onClick={() => history.push(HOME_ROUTE)}>
                    <img
                    alt=""
                    src={logo}
                    width={80}
                    className="d-inline-block align-top"
                />{' '}
                </NavLink>
                {user.isAuth ?
                    <Nav className={"ml-auto"}>
                        <Nav.Link variant={"outline-light"}>Направления</Nav.Link>
                        <Nav.Link className="ml-2" onClick={() => history.push(LOGIN_ROUTE)}>Вход</Nav.Link>
                    </Nav>
                    :
                    <Nav className={"ml-auto"}>
                        <Nav.Link variant={"outline-light"}>Направления</Nav.Link>
                        <Button className="ml-2"> Отзыв</Button>
                        <Nav.Link className="ml-2" onClick={() => user.setIsAuth(true)}>Вход</Nav.Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;