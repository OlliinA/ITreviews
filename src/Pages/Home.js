import React, { Component } from "react";
import { Card, Container, CardDeck } from "react-bootstrap";
import head from "../assets/head.png"

export default class Header extends Component {
    render() {
        return( 
            <Container>
                <h2 className="text-center m-4">Наши преимущества</h2>
                <CardDeck>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="../assest/Group1.png"
                        />
                        <Card.Body>
                            <Card.Title>Добро пожаловать</Card.Title>
                            <Card.Text>Мы — каталог-отзовик курсов.</Card.Text>
                           
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="../assest/Group1.png"
                        />
                        <Card.Body>
                            <Card.Title>Добро пожаловать</Card.Title>
                            <Card.Text>Мы — каталог-отзовик курсов.</Card.Text>
                           
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variant="top"
                            src="../assest/Group1.png"
                        />
                        <Card.Body>
                            <Card.Title>Добро пожаловать</Card.Title>
                            <Card.Text>Мы — каталог-отзовик курсов.</Card.Text>
                           
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>

        )
    }
}