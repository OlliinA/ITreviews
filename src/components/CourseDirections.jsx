import React from 'react';
import play from "../assets/premium-icon-game-control-4315514 1.svg";
import language from "../assets/premium-icon-programming-language-1723208  1.svg";
import frame from "../assets/free-icon-framework-3524995 1.svg";
import directrions from "../assets/stacked-files 1.svg";
import {Card, Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";

export default function CourseDirections() {
    return (
        <Container style={{padding: '5vw'}}>
            <Row>
                <Col className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'style={{padding: '2.5vw'}}>
                    <Card className='h-100 w-75' style={{backgroundColor:"#3B1966",marginLeft: "auto",
                        marginRight:"auto"}}>
                        <img src={play} alt="play" className='card_img'/>
                        <div className='card-body'>
                            <p className='card_text_title'> Игры </p>
                            <p className="card_text"> VR/AR разработка </p>
                            <p className="card_text"> Разработка игр </p>
                            <p className="card_text"> Разработка игр на Unity </p>
                        </div>
                    </Card>
                </Col>

                <Col className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'style={{padding: '2.5vw'}}>
                    <Card className='h-100 w-75' style={{backgroundColor:"#747FE5",marginLeft: "auto",
                        marginRight:"auto"}}>
                        <img src={language} alt="language" className='card_img'/>
                        <div className='card-body'>
                            <p className='card_text_title'> Языки </p>
                            <p className="card_text"> Python-разработка </p>
                            <p className="card_text"> JavaScript - разработка </p>
                            <p className="card_text"> Java - разработка </p>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'style={{padding: '2.5vw'}}>
                    <Card className='h-100 w-75' style={{backgroundColor:"#373592",marginLeft: "auto",
                        marginRight:"auto"}}>
                        <img src={frame} alt="frame" className='card_img'/>
                        <div className='card-body'>
                            <p className='card_text_title'> Фреймворки </p>
                            <p className="card_text"> Фреймворк Django </p>
                            <p className="card_text"> Фреймворк Laravel </p>
                        </div>
                    </Card>
                </Col>

                <Col className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 'style={{padding: '2.5vw'}}>
                    <Card className='h-100 w-75' style={{backgroundColor: "#334CD0",marginLeft: "auto",
                        marginRight:"auto"}}>
                        <img src={directrions} alt="directrions" className='card_img'/>
                        <div className='card-body'>
                            <p className='card_text_title'> Направления </p>
                            <p className="card_text"> Web-разработка </p>
                            <p className="card_text"> Мобильная разработка </p>
                            <p className="card_text"> Android - разработка </p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}