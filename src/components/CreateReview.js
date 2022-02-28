import React, {useContext} from 'react';
import {Col, Dropdown, Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import StarRating from "./StarRating";

const CreateReview = ({show, onHide}) => {
    return (
            <Modal
                show={show}
                onHide={onHide}
                centered
                style={{backgroundColor: 'rgba(0,0,0,0.7)'}}
            >
                <Modal.Header
                    style={{backgroundColor: "#E5E5E5", height:60}}
                    closeButton>
                    <Col className="d-flex justify-content-center">
                        <Modal.Title>Оставить отзыв</Modal.Title>
                    </Col>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            style={{borderRadius: 25}}
                            className={"ml-1 mt-2"}
                            placeholder={"Введите название курса"}
                            type={""}

                        />
                        <Col className={"mt-3 d-flex justify-content-center"}>Дата прохождения курса</Col>
                        <Row>
                            <Col>
                                <Form.Control
                                    style={{borderRadius: 25}}
                                    className={"ml-1 mt-2"}
                                    placeholder={"От"}
                                    type={"date"}

                                />
                            </Col>
                            <Col className={" mt-3"}>—</Col>
                            <Col>
                                <Form.Control
                                    style={{borderRadius: 25}}
                                    className={"mr-1 mt-2"}
                                    placeholder={""}
                                    type={"date"}
                                />
                            </Col>
                        </Row>
                        <Col className={"mt-3 d-flex justify-content-center"}> Комментарий</Col>
                        <textarea className={"mt-3"} style={{width:460}}></textarea>
                        <StarRating
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer >
                    <Col className="d-flex justify-content-center">
                        <Button  style={{borderRadius: 25, backgroundColor: '#4985FF'}} variant="primary">Отправить</Button>
                    </Col>
                </Modal.Footer>
            </Modal>
    );
};

export default CreateReview;