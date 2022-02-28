import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, HOME_ROUTE} from "../utils/consts";
import logo from "../assets/Logo.png"
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import CreateReview from "./CreateReview";
import Auth from "./Auth";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const [reviewsVisible, setReviewsVisible] = useState(false)
    const [authVisible, setAuthVisible] = useState(false)
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
                        <Button variant="outline-light" className="ml-2" onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button className="ml-2" onClick={() => setReviewsVisible(true)}> Отзыв</Button>
                        <Nav.Link className="ml-2" onClick={() => setAuthVisible(true)}>Выйти</Nav.Link>
                    </Nav>
                    :
                    <Nav className={"ml-auto"}>
                        <Nav.Link variant={"outline-light"}>Направления</Nav.Link>
                        <Button className="ml-2"><i className="fas fa-download"/> Отзыв</Button>
                        <Nav.Link className="ml-2" onClick={() => user.setIsAuth(true) && setAuthVisible(true)}>Вход</Nav.Link>
                    </Nav>
                }
                <CreateReview show={reviewsVisible} onHide={() => setReviewsVisible(false)}/>
                <Auth show={authVisible} onHide={() => setAuthVisible(false)}/>
            </Container>
        </Navbar>
    );
});

export default NavBar;