import React, { Component } from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import logo from "./Logo.png";
export default class Header extends Component {
    render() {
        return(
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="70"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto ">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/">Направления</Nav.Link>
                            <Button className="btn btn-primary">Отзыв
                            </Button>
                            <Nav.Link href="/">Вход</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
        );
    }
}